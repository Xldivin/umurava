import React from 'react'
import Box from '@mui/material/Box';
import Talent_Cards from 'pages-sections/client-application-fom/Sideflex2';
import Footer from 'pages-sections/login/Footer';
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

function search_talent() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ height: "130vh" }}>
      <Talent_Cards />
    </Box>
    </ThemeProvider>
  )
}

export default search_talent