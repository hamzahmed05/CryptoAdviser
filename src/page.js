//     return (
//       <div className = "App"> 
//         <header className="App-header">  
//             <img src={logo} style={{width:'100px', height:'100px'}} alt="logo" />
//         </header>
//         <div style={{clear:'both'}}> 
//           <h2 style={{float: "left"}}>BlockChain</h2>
//           <h2 style={{float: "right"}}>Coinbase</h2>
//         </div>
//         <div class="row">
//           <div class="column">
//             <table style={{paddingLeft:'170px'}}>
//               <tr>
//                 <th>Buy/Sell Prices</th>
//                 <th>BTC</th>
//                 <th>ETH</th>
//               </tr>
//               <tr>
//                 <td>Buy</td>
//                 <td>${this.state.BlockChainPayLoad.BTCbidPrice}</td>
//                 <td>${this.state.BlockChainPayLoad.ETHbidPrice}</td>
//               </tr>
//               <tr>
//                 <td>Sell</td>
//                 <td>${this.state.BlockChainPayLoad.BTCaskPrice}</td>
//                 <td>${this.state.BlockChainPayLoad.ETHaskPrice}</td>
//               </tr>
//             </table>
//           </div>
//           <div class="column">
//             <table style={{paddingLeft:'170px'}}>
//               <tr>
//                 <th>Buy/Sell Prices</th>
//                 <th>BTC</th>
//                 <th>ETH</th>
//               </tr>
//               <tr>
//                 <td>Buy</td>
//                 <td>${this.state.CoinbasePayLoad.BTCbidPrice}</td>
//                 <td>${this.state.CoinbasePayLoad.ETHbidPrice}</td>
//               </tr>
//               <tr>
//                 <td>Sell</td>
//                 <td>${this.state.CoinbasePayLoad.BTCaskPrice}</td>
//                 <td>${this.state.CoinbasePayLoad.ETHaskPrice}</td>
//               </tr>
//             </table>
//           </div>
//           </div>
//       <div style={{padding:'50px'}}>
//         <h1> For Bitcoin buyers, we recommend to buy Bitcoin from {this.giveRecommendationBuyBTC()}</h1>
//         <h1> For Bitcoin Sellers, we recommend to sell to {this.giveRecommendationSellBTC()} </h1>
//         <h1> For Ethereum buyers, we recommend to buy Bitcoin from {this.giveRecommendationBuyETH()} </h1>
//         <h1> For Ethereum Sellers, we recommend to sell to {this.giveRecommendationSellETH()}</h1>
//       </div>
//       </div>
//     )
//   }
// }
//}
