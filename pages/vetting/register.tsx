import React from 'react'
import Body2 from 'pages-sections/talent-vetting-dashboard/Body2';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import Box from '@mui/material/Box';

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

function register() {
  return (
    <Box sx={{background:"#C7C7C7",height:"100vh"}}>
    <Body2 />
    </Box>
  )
}

export default register
