import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import Slider from "./Splider";
import ErrorRadios from "./Ratio";
import HoverRating from "./Rating";
import VerticalToggleButtons from "./ToggleButton";
import CustomIcons from "./CustomIcon";
import SpeedDialTooltipOpen from "./DIalog";
import TextMobileStepper from "./Step";
import Types from "./Types";
import DataTable from "./Grid2";
import FormDialog from "./ModalButton";


export default function CFDChart(){
    return(
        <ThemeProvider theme={createTheme()}>
            <Box sx={{}}>
            <h1>物置</h1>
            <Slider/>
            <ErrorRadios/>
            <VerticalToggleButtons/>
            <CustomIcons/>
            <SpeedDialTooltipOpen/>
            <TextMobileStepper/>
            <DataTable/>
            <FormDialog/>
            <Types/>
            <HoverRating/>
            </Box>
        </ThemeProvider>
    )
}