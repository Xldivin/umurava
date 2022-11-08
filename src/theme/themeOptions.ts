import { ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        neutral:{
            main: '#3f51b5'
        },
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#ffffff',
            paper: '#efe8e8',
        },
        error: {
            main: '#ce453b',
        },
    },
    typography: {
        h1: {
            fontWeight: 700,
        },
    },
    status: {
        danger: undefined
    }
};

export default themeOptions