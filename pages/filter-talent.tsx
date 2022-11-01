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

function search_talent() {
  return (
    <Box sx={{ background: "#F3F3F3", height: "125vh" }}>
      <Talent_Cards />
    </Box>
  )
}

export default search_talent