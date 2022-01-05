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

const rows = [
  { id: 1, Crypto: 'Ethereum', Buy: 3, sell: 1002, Provider: "CoinBase"},
  { id: 2,  Crypto: 'Ethereum', Buy: 100, sell: 1002, Provider: "BlockChain"},
  { id: 3, Crypto: 'BitCoin', Buy: 100, sell: 1002, Provider: "CoinBase" },
  { id: 4, Crypto: 'BitCoin', Buy: 100, sell: 1002 , Provider: "BlockChain"}
];

export default function Grid(props) {
  console.log('PRICES FROM GRID - ', props.prices)
  
  const [prices, setPrices] = useState(null)
  const [gridRows, setGridRows] = useState([])

  useEffect(()=>{
    if(props.prices !== null) createRows(props.prices)
  })


  function createRows(priceObj){


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
