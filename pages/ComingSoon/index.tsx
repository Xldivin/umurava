import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import Landing from "pages-sections/landing/Landing";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sd: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

function ComingSoon() {
    const theme = createTheme({
        breakpoints:{
            values:{
                xs: 0,
                sd: 400,
                sm: 600,
                md: 900,
                lg: 1300,
                xl: 1536,
            }
        },
        status: {
            danger: '#e53e3e',
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{overflowX:{xs:"hidden",sm:"hidden",lg:"hidden"}}}>
                <Landing />
            </Box>
        </ThemeProvider>
    )
}
export default ComingSoon