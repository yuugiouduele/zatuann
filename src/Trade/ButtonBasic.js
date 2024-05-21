import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, Stack } from '@mui/material';


function Buttons(){
    return(
        <Stack direction="row" spacing={2} sx={{m:2, p:2}}>
      <Button href='/TradeBrandInfo_HOME' sx={{width:300,height:300}}>株</Button>
      <Button href='/FXChart_HOME' sx={{width:300,height:300}}>FX</Button>
      <Button href='/CFDChart_HOME' sx={{width:300,height:300}}>CFD</Button>
      </Stack>
    )
}

export default function BasicButtonGroup() {
  return (
    <Box sx={{
        p:23,
        m:1,
    }}>
    <ButtonGroup variant="contained"   >
        <Stack >
    <Buttons />
    <Buttons/>
    <Buttons/>
    </Stack>
    </ButtonGroup>
    </Box>
  );
}
