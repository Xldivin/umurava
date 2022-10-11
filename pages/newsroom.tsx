import React from 'react'
import Header from 'pages-sections/login/Header'
import HeaderNews from 'pages-sections/newsroom/HeaderNews'
import Body from 'pages-sections/newsroom/Body'
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
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

}

function newsroom() {
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
    // palette: {
    //   primary: {
    //     main: '#0971f1',
    //     darker: '#053e85',
    //   },
    //   neutral: {
    //     main: '#64748B',
    //     contrastText: '#fff',
    //   },
    // },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{overflowX:{xs:"hidden",sm:"hidden",lg:"hidden"},}}>
      <Header />
      <HeaderNews />
      <Body />
      <Footer />
    </Box>
    </ThemeProvider>
  )
}

export default newsroom