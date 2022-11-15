import React from 'react'
import Box_Header from 'pages-sections/client-application-fom/Box-Header'
import Header_W from 'pages-sections/client-application-fom/Header-W'
import Body2 from 'pages-sections/client-application-fom/Body2'
import Footer from 'pages-sections/login/Footer';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";

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



function client_form() {

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
    <Box sx={{zIndex: 'modal', background: '#FFFFFF', width:{sm:768,md:1600},height:{sm:"245vh",md:1710},overflowX:{xs:"hidden",sm:"hidden",lg:"hidden"},overflowY:{xs:"hidden",sm:"hidden",lg:"hidden"}}}>
        <Header_W />
        <Box_Header />
        {/*<Body2 />*/}
        <Footer />
    </Box>
    </ThemeProvider>
  )
}

export default client_form