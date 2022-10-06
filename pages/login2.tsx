import React from 'react'
import Login from 'pages-sections/login/Login'
import Header from 'pages-sections/login/Header'
import Box1 from 'pages-sections/login/Box1'
import Footer from 'pages-sections/login/Footer'
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

function login2() {
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
        <Header />
        <Login />
        <Box1 />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default login2