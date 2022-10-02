import { FlexRowCenter } from "components/flex-box";
import Header from 'pages-sections/login/Header'
import Reset from "pages-sections/reset-password/Reset";
import Footer from 'pages-sections/login/Footer'
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import { Box } from "@mui/material";

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

const ResetPage = () => {
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
    <Box sx={{overflowX:{xs:"hidden",sm:"hidden",lg:"hidden"},}}>
      <Header />
      <Reset />
      <Footer />
    </Box>
    </ThemeProvider>
  );
};

export default ResetPage;