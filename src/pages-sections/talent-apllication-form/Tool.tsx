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

function Tool() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{ mt:5 }}>
    <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
        <H3 sx={{ mt: 6, ml: 10 }}>Tools</H3>
        <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ background: '#407BFF', height: "40px", mt: 4 }}
        >
            Add Tools
        </Button>
    </Container>
    <form>
        <Container sx={{}}>
            <TextareaAutosize
                style={{ width: 850, marginLeft: "106px", marginTop: "20px" }}
                name="Tool"
                minRows={3}
                aria-label="Tool"
                placeholder="Enter Tool  here ..."
            />
        </Container>
    </form>
    <Box sx={{ ml: 120, mt: 5, display: 'flex', justifyContent: 'space-around' }}>
        <Button
            type="submit"
            variant="contained"
            sx={{ background: '#DBDBDB', }}
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

export default Tool