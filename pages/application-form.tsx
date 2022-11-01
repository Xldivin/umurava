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
    <Box sx={{background:'#F2F2F2',width:"100%",height:{xs:5530,sd:5550,sm:4500,md:4500},overflowY:'hidden',overflowX:'hidden'}}>
    <Header/>
    <Container sx={{width:{sm:735,md:1300},background:'#FFFFFF',height:{xs:3665,sd:3720,sm:3600,md:3500},ml:{sm:2,md:18},position: "absolute", top:170,overflowX:'hidden',overflowY:'hidden'}}>
        <Personal_info />
        <Experience />
        <Portofolio />
        <Education />
        <Expertise />
        <Tool />
        <Services />
    </Container>
    <Box sx={{mt:{xs:478,sd:482,sm:490,md:490},height:{xs:2660,sd:2600,sm:2000,md:2000}}}>
      <Footer/>
    </Box>
    </Box>
    </ThemeProvider>
  )
}

export default application_form