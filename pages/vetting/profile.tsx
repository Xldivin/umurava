import React from 'react'
import Body6 from 'pages-sections/talent-vetting-dashboard/Body6';
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

function profile() {
  return (
    <Box sx={{background:"#C7C7C7",height:"100vh"}}>
        <Body6 />
    </Box>
  )
}

export default profile