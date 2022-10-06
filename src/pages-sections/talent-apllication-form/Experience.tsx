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
                            sx={{ mt: 10, width: 400, ml: 10 }}
                            name="company"
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
                    <Container sx={{ display: "flex" }}>
                        <Box sx={{ dispaly: "flex" }}>
                            <H3 sx={{position:'relative',top:"80px",left:"80px"}}>Start</H3>
                            <TextField
                                sx={{ mt: 10, width: 150, ml: 10 }}
                                select
                                onChange={Change}
                                label="Month"
                                placeholder="Select month"
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
                        <Box>
                            <H3 sx={{position:'relative',top:"80px",left:"80px"}}>End</H3>
                            <TextField
                                sx={{ mt: 10, width: 150, ml: 10 }}
                                select
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
                                onChange={Change}
                                label="year"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </Box>
                    </Container>
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                    <FormControlLabel control={<Checkbox {...label} defaultChecked color="secondary" />}label="I'm currently working here" sx={{ml:15}} />
                    <TextareaAutosize
                        style={{ width: 850, marginLeft: "110px", marginTop: "20px" }}
                        name="Summary"
                        minRows={8}
                        aria-label="Summary"
                        placeholder="Describe your experience here ..."
                    />
                    </Box>
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

export default Experience