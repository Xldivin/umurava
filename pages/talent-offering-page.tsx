import React from 'react'
import Box from '@mui/material/Box';
import Client_landing from 'pages-sections/client-application-fom/Client-offering1';
import Client_offering2 from 'pages-sections/client-application-fom/Client-offering2';
import Footer from 'pages-sections/login/Footer';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import Box1 from 'pages-sections/login/Box1';

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



function talent_offering_page() {
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
    <Box sx={{overflowX:{xs:"hidden",sd:"hidden",sm:"hidden",md:"hidden"},}}>
      {/*<Client_landing />*/}
      {/*<Client_offering2 />*/}
      <Box1 />
      <Footer />
    </Box>
    </ThemeProvider>
  )
}

export default talent_offering_page