import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function Education() {
    const [Age, setAge] = useState('');

    const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value as string)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{}}>
    <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h3" sx={{ mt: 6, ml:{xs:0,sd:0,sm:10,md:10} }}>Education</Typography>
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
            <Container sx={{ display: "flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"} }}>
                <TextField
                    sx={{ mt: 10, width:{sm:300,md:400}, ml:{sm:0,md:10} }}
                    name="Country"
                    size="small"
                    type="text"
                    variant="outlined"
                    label="Country"
                    placeholder="Enter Country"
                />

                <TextField
                    sx={{ mt: 10, width:{sm:300,md:400}, ml:{sm:2,md:10} }}
                    name="title"
                    size="small"
                    type="text"
                    variant="outlined"
                    label="University/College"
                    placeholder="Enter Institution"
                />
            </Container>
            <Typography variant="h3" sx={{position:'relative',top:"80px",left:{sm:"30px",md:"110px"}}}>Degree</Typography>
            <TextField
            sx={{ mt: 10, width:{sm:600,md:900}, ml:{sm:2,md:13}, height:100 }}
            name="Degree"
            type="file"
            placeholder="Enter Degree"
        />
            <Container sx={{position:'relative',bottom:"50px" }}>
            <Typography variant="h3" sx={{position:'relative',top:"70px",left:{sm:"10px",md:"80px"}}}>Start</Typography>
            <Typography variant="h3" sx={{position:'relative',top:"40px",left:{xs:"180px",sd:"200px",sm:"230px",md:"310px"}}}>End</Typography>
                <Box sx={{display: "flex" }}>
                    <TextField
                        sx={{ mt: 5, width: 150, ml:{md:10} }}
                        select
                        size="small"
                        onChange={Change}
                        label="Year"
                        placeholder="Select year"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                    <TextField
                        sx={{ mt: 5, width: 150, ml: 10 }}
                        label="Year"
                        size="small"
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