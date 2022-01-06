import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import OutlinedCard from './OutlinedCard';
import { red, lightBlue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import globalpricesRef from './OutlinedCard'
import { create } from '@mui/material/styles/createTransitions';


const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
  },
});



const columns = [
  { field: 'Crypto', headerName: 'Crypto', width: 150 },
  {
    field: 'Buy',
    headerName: 'Buy price',
    width: 150,
    editable: true,
  },
  {
    field: 'sell',
    headerName: 'Sell Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Provider',
    headerName: 'Provider',
    width: 110,
    editable: true,
  }
  
];


export default function Grid(props) {
  console.log('PRICES FROM GRID - ', props.prices)
  
  const [prices, setPrices] = useState(null)
  const [gridRows, setGridRows] = useState([])
  const count = 1

  useEffect(()=>{
    if(props.prices !== null) createRows(props.prices)
  })


  function createRows(priceObj){
    // console.log(priceObj.coinBaseBTCaskPrice)
    const rows = [
      { id: 1, Crypto: 'Ethereum', Buy: priceObj.coinBaseETHbidPrice, sell: priceObj.coinBaseETHaskPrice, Provider: "CoinBase"},
      { id: 2,  Crypto: 'Ethereum', Buy: priceObj.ETHbidPrice, sell: priceObj.ETHaskPrice, Provider: "BlockChain"},
      { id: 3, Crypto: 'BitCoin', Buy: priceObj.coinBaseBTCbidPrice, sell: priceObj.coinBaseBTCaskPrice, Provider: "CoinBase" },
      { id: 4, Crypto: 'BitCoin', Buy: priceObj.BTCbidPrice, sell: priceObj.BTCaskPrice , Provider: "BlockChain"}
    ];
    setGridRows(rows)

  }

  return (
    <ThemeProvider theme={theme}>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid sx={{
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
        color: 'primary.secondary',
        },
    }}
            rows={gridRows}
            columns={columns}
            color = 'white'
        />
        </div>
    </ThemeProvider>
  );
}
