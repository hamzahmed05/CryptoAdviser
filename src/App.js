import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Button from "@mui/material/Button"
import OutlinedCard from "./OutlinedCard"
import DataGrid from './DataGrid'
import { red, lightBlue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import axios from 'axios'



const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
  },
});

function App() {  
  const [thePrices, setThePrices] = useState(null)


  useEffect(()=>{ 
    fetch()
  },[]);

  const fetch = async () => {
    let prices = {}
       
    let Data = await axios.get("https://brum9013jb.execute-api.eu-central-1.amazonaws.com/default/getBlockchain")
    prices.coinBaseBTCaskPrice = Data.data.body.coinBaseBTCaskPrice
    prices.coinBaseBTCbidPrice = Data.data.body.coinBaseBTCbidPrice
    prices.coinBaseETHbidPrice = Data.data.body.coinBaseETHbidPrice
    prices.coinBaseETHaskPrice = Data.data.body.coinBaseETHaskPrice

    prices.ETHbidPrice = Data.data.body.ETHbidPrice
    prices.ETHaskPrice = Data.data.body.ETHaskPrice
    prices.BTCbidPrice = Data.data.body.BTCbidPrice
    prices.BTCaskPrice = Data.data.body.BTCaskPrice

    setThePrices(prices)


  }



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <AppBar color = "primary"> CryptoAdviser </AppBar>
          <div style={{display:'flex', justifyContent: "space-around"}}>
            <h2 style={{float: "left"}}> BTC</h2>
            <h2 style={{float: "right"}}> ETH </h2>
          </div>
          <div className = "rowC"> 
            <OutlinedCard theme = {theme} crypto='btc'/>
            <OutlinedCard crypto = 'eth' />
          </div>
          <DataGrid prices={thePrices} style ={{justifyContent: "center"}} />
    </div>
    </ThemeProvider>
  );
}
export default App;
