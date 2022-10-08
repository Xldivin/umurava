import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { H3 } from "components/Typography";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function Experience() {
    const [Age, setAge] = useState('');

    const Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value as string)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box sx={{}}>
            <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
                <H3 sx={{ mt: 6, ml: 10 }}>Experience</H3>
                <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    sx={{ background: '#407BFF', height: "40px", mt: 4 }}
                >
                    Add Experience
                </Button>
            </Container>
            <form>
                <Container sx={{}}>
                    <Container sx={{ display: "flex", }}>
                        <TextField
                            sx={{ mt: 10, width: 400, ml:{sm:0,md:10} }}
                            name="company"
                            size="small"
                            type="text"
                            variant="outlined"
                            label="Company"
                            placeholder="Enter The Company Name"
                        />

                        <TextField
                            sx={{ mt: 10, width: 400, ml: 10 }}
                            name="title"
                            size="small"
                            type="text"
                            variant="outlined"
                            label="Title"
                            placeholder="Enter The Position"
                        />
                    </Container>
                    <Container sx={{ display: "flex",flexDirection:{sm:"column",md:"row"} }}>
                    <H3 sx={{position:'relative',top:"50px",left:{sm:"0px",md:"128px"}}}>Start</H3>
                        <Box sx={{ dispaly: "flex" }}>
                            <TextField
                                sx={{ mt: 10, width:150, ml:{sm:0,md:10} }}
                                select
                                size="small"
                                onChange={Change}
                                label="Month"
                                placeholder="Select month"
                            >
                                <MenuItem value={10}>hellllo</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                            <TextField
                                sx={{ mt: 10, width:150, ml:{sm:10,md:10} }}
                                label="Year"
                                select
                                size="small"
                                onChange={Change}
                                placeholder="Select year"
                            >
                                <MenuItem value={10}>hello</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Box>
                        <H3 sx={{position:'relative',top:"50px",left:{sm:"0px",md:"120px"}}}>End</H3>
                        <Box sx={{ dispaly: "flex" }}>
                            <TextField
                                sx={{ mt: 10, width: 150, ml:{sm:0,md:10} }}
                                select
                                size="small"
                                onChange={Change}
                                label="Month"
                                placeholder="Select month"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                            <TextField
                                sx={{ mt: 10, width: 150, ml: 10, height: 38 }}
                                placeholder="Select year"
                                select
                                size="small"
                                onChange={Change}
                                label="year"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Box>
                    </Container>
                    <Box sx={{display:"flex", flexDirection:"column",ml:{sm:5,md:0}}}>
                    <FormControlLabel control={<Checkbox {...label} color="primary" />}label="I'm currently working here" sx={{ml:{sm:0,md:15}}} />
                    <Box sx={{width:80}}>
                    <TextareaAutosize
                        style={{ width: 850, marginLeft: "110px", marginTop: "20px" }}
                        name="Summary"
                        minRows={8}
                        aria-label="Summary"
                        placeholder="Describe your experience here ..."
                    />
                    </Box>
                    </Box>
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

export default Experience