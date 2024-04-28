import { AppBar, Box, Button,Grid, IconButton, Paper, Toolbar ,Stack} from "@mui/material"
import BasicTable from "./BasicTable"
import BasicPie from "../Chart/BasicPie"
import BarsDataset from "./BalanceChart"



export function BalanceSheet(){
    return(
        <Grid  >
            
            <Button
            href="/Chart_HOME"
            type="button"
            color="primary"
            >
                戻る
            </Button>
            {/*仮置き*/}
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
            >
            <Toolbar>
            <IconButton
            type="button"
            color="inherit"
            >
                FX
            </IconButton>
            </Toolbar>
            </AppBar>
            </Box>
            <Box display='flex' >
            <Paper sx={{
            display: 'flex',
            flexDirection:'row',
            p:2,
            margin:10,
            width:1700}}
           >
            
            <BasicTable />
            <Box display='flex' sx={{p:3}} >
            <Stack >
            <BasicPie/>
            <BarsDataset />
            </Stack>
            </Box>
            </Paper>
            </Box>
            </Grid>
    )
}