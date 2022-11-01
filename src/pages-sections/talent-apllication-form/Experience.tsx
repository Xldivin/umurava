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
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



function Experience() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{}}>
                <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
                    <H3 sx={{ mt: 6, ml: { xs: 0, sd: 0, sm: 10, md: 10 } }}>Experience</H3>
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
                        <Container sx={{ display: "flex", flexDirection: { xs: "column", sd: "column", sm: "row", md: "row" } }}>
                            <TextField
                                sx={{ mt: 10, width: { sm: 300, md: 400 }, ml: { sm: 0, md: 10 } }}
                                name="company"
                                size="small"
                                type="text"
                                variant="outlined"
                                label="Company"
                                placeholder="Enter The Company Name"
                            />

                            <TextField
                                sx={{ mt: { xs: 4, sd: 5, sm: 10, md: 10 }, width: { sm: 300, md: 400 }, ml: { sm: 2, md: 10 } }}
                                name="title"
                                size="small"
                                type="text"
                                variant="outlined"
                                label="Title"
                                placeholder="Enter The Position"
                            />
                        </Container>
                        <Box sx={{ mt: 10, display: "flex", flexDirection: { xs: "column", sd: "column", sm: "row", md: "row" }, ml: { xs: 2, sd: 2, sm: 3, md: 13 } }}>
                            <DesktopDatePicker
                                label="Start Date"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField size="small" {...params} sx={{ width: { xs: 278, sd: 324, sm: 280, md: 400 } }} />}
                            />
                            <DesktopDatePicker
                                label="End Date"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} size="small" sx={{ width: { xs: 278, sd: 324, sm: 280, md: 400 }, mt: { xs: 8, sd: 8, sm: 0, md: 0 }, ml: { xs: 0, sd: 0, sm: 2, md: 10 } }} />}
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", ml: { sm: 5, md: 0 } }}>
                            <FormControlLabel control={<Checkbox {...label} color="primary" />} label="I'm currently working here" sx={{ ml: { xs: 1, sd: 2, sm: 0, md: 15 }, mt: { xs: 3, sd: 3, sm: 0, md: 0 } }} />
                            <Box sx={{ width: 80 }}>
                                <TextField
                                    sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 600, md: 900 }, ml: { xs: 2, sd: 2, sm: -2, md: 13 }, height: 100 }}
                                    name="Experience"
                                    multiline={true}
                                    rows={3}
                                    type="text"
                                    variant="outlined"
                                    label="Experience"
                                    placeholder="Enter Experience ..."
                                />
                            </Box>
                        </Box>
                    </Container>
                </form>
                <Box sx={{ ml: { sd: 20, sm: 50, md: 120 }, mt: 5, display: 'flex', justifyContent: 'space-around' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ background: '#DBDBDB', color: '#000000' }}
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
        </LocalizationProvider>
    )
}

export default Experience