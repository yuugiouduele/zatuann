import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from 'styled-components';
import { Button, IconButton, Typography, createTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows=Data(300);

function Data(i){
  const data=[];  

  if(i%2==0){
    i/=2;
  }else if(i%3<2){
    i/=5;
  }else{
    i/=10
  }

  for(let d=0;d<i;d++){
    data[d]=createData('デモデータ',1*d,2*d,3*d,4*d);
  }
  return data;
}


export default function BrandTable() {
  return (
    <ThemeProvider theme={createTheme()}>
        <IconButton href="/Trade_HOME">
        <ArrowBackIosNewIcon />
        </IconButton>
        <Typography>
          銘柄情報
      </Typography>
    <TableContainer component={Paper} >
      <Table sx={{ Width: 400 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
          
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
              <Button href='/BrandBoard_HOME' >
                {row.name}
                </Button>
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}