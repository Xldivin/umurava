import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { H3 } from "components/Typography";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Expertise() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{ mt:5 }}>
    <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
        <H3 sx={{ mt: 6, ml:{xs:0,sd:0,sm:10,md:10}}}>Expertise</H3>
        <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ background: '#407BFF', height: "40px", mt: 4 }}
        >
            Add Expertise
        </Button>
    </Container>
    <form>
        <Container sx={{}}>
        <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:600,md:900}, ml:{sm:0,md:13}, height:100 }}
            name="Expertise"
            multiline={true}
            rows={3}
            type="text"
            variant="outlined"
            label="Expertise"
            placeholder="Enter Expertise..."
        />
        </Container>
    </form>
    <Box sx={{ ml: 120, mt: 5, display: 'flex', justifyContent: 'space-around' }}>
        <Button
            type="submit"
            variant="contained"
            sx={{ background: '#DBDBDB',color:'#000000' }}
        >
            Cancel
        </Button>
        <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{ background: '#407BFF' }}
        >
            Save
        </Button>
    </Box>
</Box>
  )
}

export default Expertise