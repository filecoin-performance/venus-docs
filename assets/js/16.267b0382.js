(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{383:function(e,a,t){"use strict";t.r(a);var s=t(17),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"venus-payment-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-payment-channels"}},[e._v("#")]),e._v(" Venus: Payment channels")]),e._v(" "),t("p",[e._v("This guide explains how payment channels work in Venus and provides some examples about how to operate with them. Go to "),t("a",{attrs:{href:"https://spec.filecoin.io/#section-systems.filecoin_token.payment_channels",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin Spec Payment Channel"),t("OutboundLink")],1),e._v(" for more details on how this works.")]),e._v(" "),t("p",[e._v("Payment channels are used to transfer funds between two actors.")]),e._v(" "),t("p",[e._v("For example, in Venus a payment channel is created when a client wants to fetch data from a provider.\nThen client sends vouchers for teh payment channel,and the provider sends data in response.\nPayment channels and vouchers can be used for any situation in which two parties need to incrementally transfer value between each other off-chain.")]),e._v(" "),t("h3",{attrs:{id:"working-principles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-principles"}},[e._v("#")]),e._v(" Working principles")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[e._v("The payment channel is create on-chain with an initial amount.")]),e._v(" "),t("li",[e._v("Vouchers allow the client and the provider to exchange funds incrementally off-chain. The Provider can submit vouchers to chain at any stage.")]),e._v(" "),t("li",[e._v("Either party to the payment channel can settle the payment channel on chain.")]),e._v(" "),t("li",[e._v("After a settlement period (currently 12 hours) either party to the payment channel can call collect on chain.")]),e._v(" "),t("li",[e._v("Collect sends the value of submitted vouchers to the channel recipient (the provider), and refunds the remaining channel balance to the channel creator (the client).")]),e._v(" "),t("li",[e._v("Vouchers have a lane, a nonce and a value, where vouchers with a higher nonce supersede vouchers with a lower nonce in the same lane.\n(Each deal is created on a different lane.)")])]),e._v(" "),t("h3",{attrs:{id:"cli-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-example"}},[e._v("#")]),e._v(" CLI example")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("For quick understanding, we can use the Venus CLI to Show how payment channels work. The Venus CLI is a client to the Venus daemon, and therefore each command run here corresponds to an API call to Venus.")]),e._v(" "),t("p",[e._v("A client creates a payment channel to a provider with value 10 FIL:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ venus paych add-funds "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("from-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("to_addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The client creates a voucher in lane 0 with nonce 1(implied) and value 2:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych voucher create "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The client sends the voucher to the provider and the provider adds the voucher to their local store:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych voucher  "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The provider sends some data to the client.")]),e._v(" "),t("p",[e._v("The client creates a voucher in lane 0 with nonce 2 (implied) and value 4:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych voucher create "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The client sends the voucher to the provider and the provider adds the voucher and sends back more data.\netc.")]),e._v(" "),t("p",[e._v('The client can add value to teh channel after it has been created by calling "paych add-funds" with the same client and provider addresses:')]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych add-funds "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("client addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("provider addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Same address as above. Channel now has 15")]),e._v("\n")])])]),t("p",[e._v("Once the client has received all their data,they may settle the channel. Note that settlement doesn't have to be done immediately. For example the client may keep the channel open as long as it wants to continue making deals with the provider.")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych settle "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("The provider can submit vouchers to chain (note that Venus does this automatically when it sees a settle message appear on chain). The provider may have received many vouchers with incrementally higher values. The provider should submit the best vouchers. Note that there will be one best voucher for each lane:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych voucher best-spendable "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n$ venus paych voucher submit "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("voucher"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Once the settlement period is over, either the client or provider can call collect to disburse funds.")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./venus paych collect "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("channel addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);