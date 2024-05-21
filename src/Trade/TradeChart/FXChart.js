import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, IconButton, ThemeProvider, createTheme } from '@mui/material';
// @ts-ignore


const series = [{ data: [-2, -9, 12, 11, 6, -4] }];

export default function ColorSnap() {
  const [colorX, setColorX] = React.useState('piecewise');
  const [colorY, setColorY] = React.useState('None');

  return (
    <ThemeProvider theme={createTheme()}>
        <IconButton href="/Trade_HOME">
        <ArrowBackIosNewIcon />
        </IconButton>
       <Button href="/Monooki_HOME!">
        物置へ
        </Button>
    <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 600 }}>
        
      <Stack direction="row" spacing={1}>
        <TextField
          select
          sx={{ minWidth: 150 }}
          label="x-axis colorMap"
          value={colorX}
          onChange={(event) => setColorX(event.target.value)}
        >
          <MenuItem value="None">年足</MenuItem>
          <MenuItem value="piecewise">月足</MenuItem>
          <MenuItem value="continuous">週足</MenuItem>
          <MenuItem value="ordinal">日足</MenuItem>
        </TextField>
        <TextField
          select
          sx={{ minWidth: 150 }}
          label="y-axis colorMap"
          value={colorY}
          onChange={(event) => setColorY(event.target.value)}
        >
          <MenuItem value="None">None</MenuItem>
          <MenuItem value="piecewise">piecewise</MenuItem>
          <MenuItem value="continuous">continuous</MenuItem>
        </TextField>
      </Stack>

      <BarChart
        height={700}
        grid={{ horizontal: true }}
        series={series}
        margin={{
          top: 10,
          bottom: 20,
        }}
        yAxis={[
          {
            colorMap:
              (colorY === 'continuous' && {
                type: 'continuous',
                min: -10,
                max: 10,
                color: ['red', 'green'],
              }) ||
              (colorY === 'piecewise' && {
                type: 'piecewise',
                thresholds: [0],
                colors: ['red', 'green'],
              }) ||
              undefined,
          },
        ]}
        xAxis={[
          {
            scaleType: 'band',
            data: [
              new Date(2019, 1, 1),
              new Date(2020, 1, 1),
              new Date(2021, 1, 1),
              new Date(2022, 1, 1),
              new Date(2023, 1, 1),
              new Date(2024, 1, 1),
            ],
            valueFormatter: (value) => value.getFullYear().toString(),
            colorMap:
              (colorX === 'ordinal' && {
                type: 'ordinal',
                colors: [
                  '#ccebc5',
                  '#a8ddb5',
                  '#7bccc4',
                  '#4eb3d3',
                  '#2b8cbe',
                  '#08589e',
                ],
              }) ||
              (colorX === 'continuous' && {
                type: 'continuous',
                min: new Date(2019, 1, 1),
                max: new Date(2024, 1, 1),
                color: ['green', 'orange'],
              }) ||
              (colorX === 'piecewise' && {
                type: 'piecewise',
                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                colors: ['blue', 'red', 'blue'],
              }) ||
              undefined,
          },
        ]}
      />
      
    </Stack>
    </ThemeProvider>
  );
}
