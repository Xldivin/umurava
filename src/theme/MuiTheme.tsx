import React from 'react'
import { CssBaseline } from "@mui/material";
import { FC, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themeOptions from './themeOptions';

type MuiThemeProps = {
    children?: ReactNode;
};

const MuiTheme: FC<MuiThemeProps>  = ({children}) => {
    const theme = createTheme(themeOptions)
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
        {children}
   </ThemeProvider>
  )
}

export default MuiTheme
