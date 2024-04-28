import { Button, createTheme } from "@mui/material"
import BasicButtonGroup from "./ButtonBasic"
import { ThemeProvider } from "styled-components"
import { green, } from "@mui/material/colors";

const theme=createTheme({
    palette:{
        primary:{
            main:green[500],
        }
    }
});

export function TradePage(){
    return(
        
            <ThemeProvider theme={theme}>
            <Button
            href="/Chart_HOME"
            type="button"
            color="primary"
            >
                戻る
            </Button>
        <BasicButtonGroup/>
        </ThemeProvider>
    )
}