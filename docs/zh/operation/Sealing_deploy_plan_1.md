# 算力增加与维持部署参考方案1

## 集群规模:
- 机器: 两台 
- 配置:128核，1T内存，双3060Ti(GPU)

## 方案
- 建议每台机器各去掉一块GPU,因为目前程序只能访问一块GPU;

- 安装zabbix监控

- 因为单个机器上运行不同的任务，需要给每个worker限核，需关闭超线程以确保限核的精准

    ```bash
    # 绝大多数的主板都可以设置关闭超线程，但需要重新启动。我们通过一种方式关闭一半CPU的映射关系来做到相同的效果，这种方式不需要重启，但是每次重启都会失效。
    
    #!/bin/bash
    for cpunum in $(cat /sys/devices/system/cpu/cpu*/topology/thread_siblings_list | cut -s -d, -f2- | tr ',' '\n' | sort -un)
    do
        echo 0 > /sys/devices/system/cpu/cpu$cpunum/online
    done
    ```

- 部署方案:
* A机器：venus-sealer只做wdpost和winningpost的计算;跑一个venus-worker只做AP，P1，P2（用cpu做）；
```sh
./venus-sealer --network=mainnet init --actor=<MINER_ID> --node-url=/ip4/<IP_ADDRESS_OF_VENUS/tcp/3453 --messager-url=/ip4/<IP_ADDRESS_OF_VENUS_MESSAGER>/tcp/<PORT_OF_VENUS_MESSAGER> --gateway-url=/ip4/<IP_ADDRESS_OF_VENUS_GATEWAY>/tcp/<PORT_OF_VENUS_GATEWAY> --auth-token <AUTH_TOKEN_FOR_ACCOUNT_NAME> --no-local-storage
    
# 修改配置文件只允许sealer做wdpost

[Storage]
    ParallelFetchLimit = 10
    AllowAddPiece = false
    AllowPreCommit1 = false
    AllowPreCommit2 = false
    AllowCommit = false
    AllowUnseal = false
    

# 启动venus-sealer

BELLMAN_CPU_UTILIZATION=0.875 FIL_PROOFS_USE_MULTICORE_SDR=1 nohup ./venus-sealer run > sealer.log 2>&1 &

# FIL_PROOFS_MAXIMIZE_CACHING=1 表示做P1的时候把部分临时文件缓存到内存

# 设置store目录，因为sealer我们不做任务，故只需设置store目录
  ./venus-sealer storage attach --init --seal <ABSOLUTE_PATH_OF_YOUR_PERMANENT_STORAGE>


# 启动一个worker,只做AP,P1,P2,unseal(不允许用GPU)
FIL_PROOFS_MAXIMIZE_CACHING=1 BELLMAN_CPU_UTILIZATION=0.875 FIL_PROOFS_USE_MULTICORE_SDR=1 ./venus-worker run --miner-addr=/ip4/127.0.0.1/tcp/2345 --miner-token=<sealer token> --commit=false --no-local-storage 

# 指定worker的seal路径
./venus-worker storage attach --init --seal <ABSOLUTE_LOCAL_PATH>
```
> venus-sealer不做任务，故只需指定store目录，不需要seal目录。

> 这里worker为什么只用cpu而不用GPU做呢？因为wdpost需要gpu做，并且是具有时效性的任务，如果worker竞争gpu，wdpost没法及时完成，存在惩罚算力的隐患。


> venus-sealer默认只监听127.0.0.1，要想别的机器连接sealer需要修改配置文件：
```sh
[API]
  ListenAddress = "/ip4/0.0.0.0/tcp/2345/http"
  RemoteListenAddress = "内网ip:2345"
```

> 设置p2，C2，wdPost等消息的from，即发送消息消耗fil的address
```sh
[Addresses]
  PreCommitControl = [] # P2
  CommitControl = [] # C2
  DisableOwnerFallback = true # 禁用owner发消息
  DisableWorkerFallback = false
```

> 设置sealer可接受任务类型
```sh
[Storage]
  ParallelFetchLimit = 10
  AllowAddPiece = true
  AllowPreCommit1 = true
  AllowPreCommit2 = true
  AllowCommit = true
  AllowUnseal = true
```

* B机器:启动两个worker，一个做P2，一个做Commit。p2阶段使用CPU，commit阶段使用GPU运行。
    - 限核：这台机器我们运行2个worker为了避免一个worker占满cpu资源，故需要对每个worker进程进行限核。这里我们将75%的核数分配给worker01，将25%的核数分配给worker02.参考文档：https://venus.filecoin.io/zh/operation/Efficiency_of_sealing.html
```sh
# worker01
BELLMAN_CPU_UTILIZATION=0.875 FIL_PROOFS_USE_MULTICORE_SDR=1 FIL_PROOFS_MAXIMIZE_CACHING=1 ./venus-worker run --miner-addr=/ip4/127.0.0.1/tcp/2345 --miner-token=<sealer token> --unseal=false --addpiece=false --commit=false --no-local-storage
    
# 指定worker01的seal路径
./venus-worker storage attach --init --seal <ABSOLUTE_LOCAL_PATH>

# worker02
VENUS_WORKER_PATH=<worker_path> BELLMAN_CPU_UTILIZATION=0.875 ./venus-worker run --miner-addr=/ip4/127.0.0.1/tcp/2345 --miner-token=<sealer token> --precommit1=false --precommit2=false --addpiece=false --unseal=false --no-local-storage

# 指定worker02的seal路径与worker01相同，这样做的好处是不需要文件的拷贝。
./venus-worker storage attach --seal <ABSOLUTE_LOCAL_PATH>
```
> TRUST_PARAMS=1 环境变量可以跳过校验证明参数文件，如果你确定参数文件都在且是正确的可以用此环境变量用加快venus-sealer或venus-worker的启动的速度；

> seal要求较高的磁盘吞吐量，建议ssd盘。

- 磁盘空间及并发数计算:
  
  * 32G内存消耗：56G cache + 64G * 运行数量
  * 32G磁盘消耗：520G 左右 * 运行数量
  * 64G内存消耗：112G cache + 128G 
  * 64G磁盘消耗：1T左右 * 运行数量
  
  * 故这两台机器1t的内存大约能做64G sector的数量为:

&ensp;&ensp; (1024G-112G)/128G=7.125,保险起见我们可以先并发6个观察一段时间资源使用率.

&ensp;&ensp; 确定了并发密封扇区个数后,就可以确定seal需要的磁盘空间= 6*1t=6t.

> 做策略的思路：先考虑内存，确定并发数，在补充其他资源，如临时磁盘空间，至于cpu，如果不足，可以限额，这样做的好处是系统可以持续运行，而不被oom。

> 可以利用gpu加速的任务时P2，C2和windowPoSt，分配gpu的顺序是： wdPoSt>C2>P2

- 并发数控制
&ensp;&ensp; ./venus-sealer sectors pledge 发送一个密封任务，通常写一个定时脚本或系统事务，每隔一段时间发送一个sector任务； 配置文件MaxSealingSectors控制同时进行的sector上限数。 
