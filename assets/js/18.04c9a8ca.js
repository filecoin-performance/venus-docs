(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{385:function(e,a,t){"use strict";t.r(a);var s=t(17),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"venus-send-and-receive-fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-send-and-receive-fil"}},[e._v("#")]),e._v(" Venus: send and receive FIL")]),e._v(" "),t("p",[e._v("This guide will show you how to create and manage a Venus wallet and how to use it to send some Filecoin to a different address.\nEach node can have multiple addresses.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#venus-send-and-receive-fil"}},[e._v("Venus: send and receive FIL")])]),t("li",[t("a",{attrs:{href:"#creating-a-wallet"}},[e._v("Creating a wallet")]),t("ul",[t("li",[t("a",{attrs:{href:"#create-a-bls-wallet"}},[e._v("Create a bls wallet")])]),t("li",[t("a",{attrs:{href:"#create-a-secp256k1-wallet"}},[e._v("Create a secp256k1 wallet")])]),t("li",[t("a",{attrs:{href:"#create-a-multisig-wallet"}},[e._v("Create a multisig wallet")])]),t("li",[t("a",{attrs:{href:"#listing-addresses"}},[e._v("Listing addresses")])]),t("li",[t("a",{attrs:{href:"#obtaining-fil"}},[e._v("Obtaining FIL")])]),t("li",[t("a",{attrs:{href:"#sending-fil"}},[e._v("Sending FIL")])]),t("li",[t("a",{attrs:{href:"#transaction-fees"}},[e._v("Transaction fees")])]),t("li",[t("a",{attrs:{href:"#exporting-and-importing-addresses"}},[e._v("Exporting and importing addresses")])]),t("li",[t("a",{attrs:{href:"#offline-nodes"}},[e._v("Offline nodes")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"creating-a-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-wallet"}},[e._v("#")]),e._v(" Creating a wallet")]),e._v(" "),t("h3",{attrs:{id:"create-a-bls-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-bls-wallet"}},[e._v("#")]),e._v(" Create a bls wallet")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet new bls\n")])])]),t("h3",{attrs:{id:"create-a-secp256k1-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-secp256k1-wallet"}},[e._v("#")]),e._v(" Create a secp256k1 wallet")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet new --type=secp256k1\n")])])]),t("h3",{attrs:{id:"create-a-multisig-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-multisig-wallet"}},[e._v("#")]),e._v(" Create a multisig wallet")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus msig create address1 address2..\n")])])]),t("p",[e._v("This will create a new address and print it. You can distinguish mainnet from testnet addresses because they start with "),t("code",[e._v("f")]),e._v(" for mainnet and "),t("code",[e._v("t")]),e._v(" for testnets.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("The information for the addresses in your wallet is stored in the ~/.venus/wallet.\nRemoving these folders will also remove the keys, and you will lose control of any funds in those wallets.")])]),e._v(" "),t("h3",{attrs:{id:"listing-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listing-addresses"}},[e._v("#")]),e._v(" Listing addresses")]),e._v(" "),t("p",[e._v("You can create as many addresses as you need. One of them will be the "),t("em",[e._v("default address")]),e._v(".")]),e._v(" "),t("p",[e._v("You can see a list of all addresses for your current node:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet ls\n")])])]),t("p",[e._v("You can see the default address with:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet default\n")])])]),t("p",[e._v("If you wish, you can change the default address to a different one:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet set-default <address>\n")])])]),t("h3",{attrs:{id:"obtaining-fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-fil"}},[e._v("#")]),e._v(" Obtaining FIL")]),e._v(" "),t("p",[e._v("For non-mainnet networks, "),t("code",[e._v("FIL")]),e._v(" can be obtained from a faucet. A list of faucets is available on the "),t("a",{attrs:{href:"https://network.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("networks dashboard"),t("OutboundLink")],1),e._v(".\nFor mainnet, the easiest is to buy "),t("code",[e._v("FIL")]),e._v(" from an exchange. Not all exchanges support "),t("code",[e._v("FIL")]),e._v(", so do your research before signing up.")]),e._v(" "),t("p",[e._v("Once you have received some "),t("code",[e._v("FIL")]),e._v(", use wallet balance to check your balance:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet balance <address>\n")])])]),t("p",[e._v("Remember that you will only see the latest balance when your daemon is fully synced.")]),e._v(" "),t("h3",{attrs:{id:"sending-fil"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-fil"}},[e._v("#")]),e._v(" Sending FIL")]),e._v(" "),t("p",[e._v("Use the send command followed by the receiving address and the amount of "),t("code",[e._v("FIL")]),e._v(" you want to send")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus send <target-address> --value=<FIL amount>\n\nIf you want to specify the sending address:\nvenus send <target-address> --value=<FIL amount> --from=<address>\n")])])]),t("p",[e._v("For advanced sending options:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus send --help\n")])])]),t("h3",{attrs:{id:"transaction-fees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-fees"}},[e._v("#")]),e._v(" Transaction fees")]),e._v(" "),t("p",[e._v("Every transaction that sends "),t("code",[e._v("FIL")]),e._v(" pays an additional fee based on its gas usage. By default, Venus automatically sets all the necessary values.\nHowever, you may want to use the --gas-feecap flag in the send command to avoid surprises when network congestion is high.")]),e._v(" "),t("h3",{attrs:{id:"exporting-and-importing-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exporting-and-importing-addresses"}},[e._v("#")]),e._v(" Exporting and importing addresses")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Keep your addresses' private keys safe! Do not share them with anyone! Store them in a secure location!")])]),e._v(" "),t("p",[e._v("You can export and re-import a wallet, including a different Venus node. Exporting private key from nodes takes two steps:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("first step:\nvenus wallet export <address>\n\nsecond step:\nenter wallet password\n")])])]),t("p",[e._v("Use wallet import to import an address into a node:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus wallet import <private_key>\n")])])]),t("h3",{attrs:{id:"offline-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#offline-nodes"}},[e._v("#")]),e._v(" Offline nodes")]),e._v(" "),t("p",[e._v("Each node stores its wallet in "),t("code",[e._v("~/.venus/wallet")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    |--- 000000.vlog\n    |--- 000001.sst\n    |--- KEYREGISTRY\n    |--- LOCK\n    |--- MANIFEST\n")])])]),t("p",[e._v("To export a wallet when a node is offline, copy these files from "),t("code",[e._v("~/.venus/wallet")]),e._v(" to another location. To import this wallet, copy these files into "),t("code",[e._v("~/.venus/wallet")]),e._v(". The Venus node will automatically use these keys when it next starts.")])])}),[],!1,null,null,null);a.default=n.exports}}]);