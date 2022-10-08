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

function Education() {
    const [Age, setAge] = useState('');

    const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value as string)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{}}>
    <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
        <H3 sx={{ mt: 6, ml: 10 }}>Education</H3>
        <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ background: '#407BFF', height: "40px", mt: 4 }}
        >
            Add Education
        </Button>
    </Container>
    <form>
        <Container sx={{}}>
            <Container sx={{ display: "flex", }}>
                <TextField
                    sx={{ mt: 10, width: 400, ml: 10 }}
                    name="Country"
                    type="text"
                    size="small"
                    variant="outlined"
                    label="Country"
                    placeholder="Enter Country"
                />

                <TextField
                    sx={{ mt: 10, width: 400, ml: 10 }}
                    name="title"
                    type="text"
                    size="small"
                    variant="outlined"
                    label="University/College"
                    placeholder="Enter Institution"
                />
            </Container>
            <TextareaAutosize
                style={{ width: 850, marginLeft: "106px", marginTop: "20px" }}
                name="Degree"
                minRows={3}
                aria-label="Degree"
                placeholder="Enter Degree  here ..."
            />
            <Container sx={{ display: "flex",position:'relative',bottom:"50px" }}>
                <Box sx={{ }}>
                    <H3 sx={{position:'relative',top:"80px",left:"80px"}}>Start</H3>
                    <TextField
                        sx={{ mt: 10, width: 150, ml: 10 }}
                        select
                        onChange={Change}
                        label="Year"
                        placeholder="Select year"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                    <TextField
                        sx={{ mt: 10, width: 150, ml: 10 }}
                        label="Year"
                        select
                        onChange={Change}
                        placeholder="Select year"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                </Box>
            </Container>
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

export default Education