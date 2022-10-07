import React from 'react'
import Personal_info from 'pages-sections/talent-apllication-form/Personal_info'
import Experience from 'pages-sections/talent-apllication-form/Experience';
import Box from '@mui/material/Box';
import Portofolio from 'pages-sections/talent-apllication-form/Portofolio';
import Education from 'pages-sections/talent-apllication-form/Education';
import Expertise from 'pages-sections/talent-apllication-form/Expertise';
import Tool from 'pages-sections/talent-apllication-form/Tool';
import Services from 'pages-sections/talent-apllication-form/Services';
import Container  from '@mui/material/Container';
import Header from 'pages-sections/login/Header';
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

function application_form() {
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
    <Box sx={{background:'#F2F2F2',width:"100%",height:4000,overflowY:'hidden'}}>
      <Header/>
        <Container sx={{width:1300,background:'#FFFFFF',height:3200,ml:18,position: "absolute", top:170,overflowX:'hidden'}}>
        <Personal_info />
        <Experience />
        <Portofolio />
        <Education />
        <Expertise />
        <Tool />
        <Services />
        </Container>
        <Box sx={{mt:427}}>
        <Footer/>
        </Box>
    </Box>
    </ThemeProvider>
  )
}

export default application_form