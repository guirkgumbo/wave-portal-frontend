(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{106:function(f,e,t){"use strict";t.r(e);var b=t(3),a=t.n(b),n=t(66),c=t.n(n),r=(t(87),t(2)),o=t.n(r),s=t(44),u=t(23),i=t(45),d=t(74),l=t(132),p=t(133),m=t(134),v=t(131),h=t(135),w=t(129),y=(t(89),t(69)),g=Object(d.a)({palette:{mode:"dark"}});function x(){var f=Object(b.useState)(""),e=Object(u.a)(f,2),t=e[0],n=e[1],c=Object(b.useState)(!1),r=Object(u.a)(c,2),d=r[0],x=r[1],k=Object(b.useState)(0),E=Object(u.a)(k,2),j=E[0],O=E[1],C=y.abi,N=function(){var f=Object(s.a)(o.a.mark((function f(){var e,t,b,a,c,r,s,u;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,e=window,(t=e.ethereum)?console.log("We have the ethereum object",t):console.log("Make sure you have metamask"),f.next=5,t.request({method:"eth_accounts"});case 5:return 0!==(b=f.sent).length?(a=b[0],console.log("Found an authorized account:",a),n(a)):console.log("No authorized account found"),c=new i.a.providers.Web3Provider(t),r=c.getSigner(),s=new i.a.Contract("0x62eb0Fd10B84A15d9b87d834DE0ee55a235A8539",C,r),f.next=12,s.getTotalWaves();case 12:u=f.sent,console.log("Retrieved total wave count...",u.toNumber()),O(u.toNumber()),f.next=20;break;case 17:f.prev=17,f.t0=f.catch(0),console.error("FUCK!");case 20:case"end":return f.stop()}}),f,null,[[0,17]])})));return function(){return f.apply(this,arguments)}}(),W=function(){var f=Object(s.a)(o.a.mark((function f(){var e,t,b;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,t=e.ethereum){f.next=5;break}return alert("Get Metamask!"),f.abrupt("return");case 5:return f.next=7,t.request({method:"eth_requestAccounts"});case 7:b=f.sent,console.log("Connected",b[0]),n(b[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.error(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),M=function(){var f=Object(s.a)(o.a.mark((function f(){var e,t,b;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,t=e.ethereum){f.next=5;break}return alert("Get Metamask! Can't disconnect whats not there!"),f.abrupt("return");case 5:return f.next=7,t.request({method:"eth_requestAccounts",params:[{eth_accounts:{}}]});case 7:b=f.sent,console.log(b),n(""),console.log("Disconnected",b[0]),f.next=16;break;case 13:f.prev=13,f.t0=f.catch(0),console.error(f.t0);case 16:case"end":return f.stop()}}),f,null,[[0,13]])})));return function(){return f.apply(this,arguments)}}(),T=function(){var f=Object(s.a)(o.a.mark((function f(){var e,b,a,n,c,r,s;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)||""===t){f.next=23;break}return a=new i.a.providers.Web3Provider(b),n=a.getSigner(),c=new i.a.Contract("0x62eb0Fd10B84A15d9b87d834DE0ee55a235A8539",C,n),f.next=8,c.wave();case 8:return r=f.sent,x(!0),console.log("Mining...",r.hash),f.next=13,r.wait();case 13:return x(!1),console.log("Mined -- ",r.hash),f.next=17,c.getTotalWaves();case 17:s=f.sent,O(s.toNumber()),console.log(s),console.log("Retrieved total wave count...",s.toNumber()),f.next=24;break;case 23:console.log("Ethereum object doesn't exist");case 24:f.next=29;break;case 26:f.prev=26,f.t0=f.catch(0),console.error(f.t0);case 29:case"end":return f.stop()}}),f,null,[[0,26]])})));return function(){return f.apply(this,arguments)}}();return Object(b.useEffect)((function(){N()}),[]),a.a.createElement(l.a,{theme:g},a.a.createElement(p.a,null),a.a.createElement(m.a,{style:{height:"100vh"}},a.a.createElement("div",{className:"mainContainer"},a.a.createElement("div",{className:"dataContainer"},a.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),a.a.createElement("div",{className:"bio"},"Connect your Ethereum wallet and say something nice or say something awful!"),t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{variant:"contained",onClick:T},d?a.a.createElement(h.a,{color:"inherit"}):"Wave at me"),a.a.createElement("br",null)),t?a.a.createElement(v.a,{variant:"contained",onClick:M},"Disconnect Wallet"):a.a.createElement(v.a,{variant:"contained",onClick:W},"Connect Wallet"),0!==j&&a.a.createElement(a.a.Fragment,null,a.a.createElement("br",null),a.a.createElement(w.a,{severity:"info"},"Total number of waves = ",j))))))}c.a.render(a.a.createElement(x,null),document.getElementById("root"))},69:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWavers","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wavers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5061003c6040518060600160405280602581526020016109db6025913961004160201b6102e41760201c565b6101c4565b6100dd816040516024016100559190610142565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100e060201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061011482610164565b61011e818561016f565b935061012e818560208601610180565b610137816101b3565b840191505092915050565b6000602082019050818103600083015261015c8184610109565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561019e578082015181840152602081019050610183565b838111156101ad576000848401525b50505050565b6000601f19601f8301169050919050565b610808806101d36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633ca736bd14610051578063635f29f8146100815780636fe15b441461008b5780639a2cdc0814610095575b600080fd5b61006b600480360381019061006691906104f3565b6100b3565b6040516100789190610573565b60405180910390f35b6100896100f2565b005b6100936101f9565b005b61009d6102b6565b6040516100aa9190610610565b60405180910390f35b600181815481106100c357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101306040518060400160405280601881526020017f486572652061726520616c6c20746865207761766572732100000000000000008152506102e4565b60005b6001805490508110156101f6576101e36040518060400160405280600b81526020017f416464726573733a202573000000000000000000000000000000000000000000815250600183815481106101b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661037d565b80806101ee9061070c565b915050610133565b50565b600160008082825461020b9190610647565b925050819055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102b46040518060400160405280601e81526020017f257320686173207761766564212046696e616c6c79206e6f74696365642100008152503361037d565b565b60006102dc6040518060600160405280602681526020016107ad60269139600054610419565b600054905090565b61037a816040516024016102f8919061058e565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b50565b61041582826040516024016103939291906105b0565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b5050565b6104b1828260405160240161042f9291906105e0565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000813590506104ed81610795565b92915050565b60006020828403121561050557600080fd5b6000610513848285016104de565b91505092915050565b6105258161069d565b82525050565b60006105368261062b565b6105408185610636565b93506105508185602086016106d9565b61055981610784565b840191505092915050565b61056d816106cf565b82525050565b6000602082019050610588600083018461051c565b92915050565b600060208201905081810360008301526105a8818461052b565b905092915050565b600060408201905081810360008301526105ca818561052b565b90506105d9602083018461051c565b9392505050565b600060408201905081810360008301526105fa818561052b565b90506106096020830184610564565b9392505050565b60006020820190506106256000830184610564565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610652826106cf565b915061065d836106cf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561069257610691610755565b5b828201905092915050565b60006106a8826106af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156106f75780820151818401526020810190506106dc565b83811115610706576000848401525b50505050565b6000610717826106cf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561074a57610749610755565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61079e816106cf565b81146107a957600080fd5b5056fe5765206861766520256420746f74616c207761766573212054616b6520746861742064616421a2646970667358221220bc0853d19ebdd69eeb13b7f83fccf0cf28a0729e0baa4feeb00860e11732b07a64736f6c63430008040033596f20796f2c204920616d206120636f6e747261637420616e64204920616d20736d617274","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633ca736bd14610051578063635f29f8146100815780636fe15b441461008b5780639a2cdc0814610095575b600080fd5b61006b600480360381019061006691906104f3565b6100b3565b6040516100789190610573565b60405180910390f35b6100896100f2565b005b6100936101f9565b005b61009d6102b6565b6040516100aa9190610610565b60405180910390f35b600181815481106100c357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101306040518060400160405280601881526020017f486572652061726520616c6c20746865207761766572732100000000000000008152506102e4565b60005b6001805490508110156101f6576101e36040518060400160405280600b81526020017f416464726573733a202573000000000000000000000000000000000000000000815250600183815481106101b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661037d565b80806101ee9061070c565b915050610133565b50565b600160008082825461020b9190610647565b925050819055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102b46040518060400160405280601e81526020017f257320686173207761766564212046696e616c6c79206e6f74696365642100008152503361037d565b565b60006102dc6040518060600160405280602681526020016107ad60269139600054610419565b600054905090565b61037a816040516024016102f8919061058e565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b50565b61041582826040516024016103939291906105b0565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b5050565b6104b1828260405160240161042f9291906105e0565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104b5565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000813590506104ed81610795565b92915050565b60006020828403121561050557600080fd5b6000610513848285016104de565b91505092915050565b6105258161069d565b82525050565b60006105368261062b565b6105408185610636565b93506105508185602086016106d9565b61055981610784565b840191505092915050565b61056d816106cf565b82525050565b6000602082019050610588600083018461051c565b92915050565b600060208201905081810360008301526105a8818461052b565b905092915050565b600060408201905081810360008301526105ca818561052b565b90506105d9602083018461051c565b9392505050565b600060408201905081810360008301526105fa818561052b565b90506106096020830184610564565b9392505050565b60006020820190506106256000830184610564565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610652826106cf565b915061065d836106cf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561069257610691610755565b5b828201905092915050565b60006106a8826106af565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156106f75780820151818401526020810190506106dc565b83811115610706576000848401525b50505050565b6000610717826106cf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561074a57610749610755565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61079e816106cf565b81146107a957600080fd5b5056fe5765206861766520256420746f74616c207761766573212054616b6520746861742064616421a2646970667358221220bc0853d19ebdd69eeb13b7f83fccf0cf28a0729e0baa4feeb00860e11732b07a64736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},82:function(f,e,t){f.exports=t(106)},87:function(f,e,t){},89:function(f,e,t){},93:function(f,e){}},[[82,1,2]]]);
//# sourceMappingURL=main.272ddbee.chunk.js.map