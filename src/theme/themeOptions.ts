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
            fontWeight: "bold",
            fontSize:30,
        },
        h2: {
            fontWeight: "bold",
            fontSize:28,
        },
        h3: {
            fontWeight: "bold",
            fontSize:25,
        },
        h4: {
            fontWeight: "bold",
            fontSize:23,
        },
        h5: {
            fontWeight: "bold",
            fontSize:20,
        },
        h6: {
            fontWeight: "bold",
            fontSize:18,
        },
    },
    status: {
        danger: undefined
    }
};

export default themeOptions