import React, {useState, useEffect, useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import GiveRecs from "./giveRecs"



function OutlinedCard(props)  {

    const [prices, setPrices] = useState({})


    function giveRecommendationBuyBTC() {
        if(prices.BTCbidPrice < prices.coinBaseBTCbidPrice) {
          return "BlockChain"
        } 
        return "CoinBase"
        
    }
    function giveRecommendationSellBTC() {
      if(prices.BTCaskPrice > prices.coinBaseBTCaskPrice) {
        return "BlockChain"
      } else {
        return "CoinBase"
      }
    }
    function giveRecommendationBuyETH(){
      if(prices.ETHbidPrice < prices.coinBaseETHbidPrice) {
        return "BlockChain"
      } else {
        return "CoinBase"
      }
    }
    function giveRecommendationSellETH(){
      if(prices.ETHaskPrice > prices.coinBaseETHaskPrice) {
        return "BlockChain"
      } else {
        return "CoinBase"
      }
    }

    console.log("props ")
  return (
    <Card>
      <CardContent style={{backgroundColor: "#03a9f4"}}>
            <Typography variant="h3" component="div">
                Recommendation for {props.crypto =='eth'? 'Ethereum': 'Bitcoin'} 
            </Typography>
            <Typography variant="h4" component="div">
                Buy from: {props.crypto =='eth'? giveRecommendationBuyETH(): giveRecommendationBuyBTC()}
            </Typography>
            <Typography variant="h4" component="div">
                Sell to: {props.crypto =='eth'? giveRecommendationSellETH(): giveRecommendationSellBTC()}
            </Typography>   
      </CardContent>
    </Card>
  );
}

export default OutlinedCard;
