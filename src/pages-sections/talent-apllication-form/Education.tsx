import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
<<<<<<< HEAD
import { TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
=======
import { Typography } from '@mui/material';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
>>>>>>> c731633 ((talent-vetting-dashboard))

function Education() {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
<<<<<<< HEAD
            <H3 sx={{position:'relative',top:"80px",left:{xs:"15px",sd:"15px",sm:"30px",md:"110px"}}}>Degree</H3>
=======
            <Typography variant="h3" sx={{position:'relative',top:"80px",left:{sm:"30px",md:"110px"}}}>Degree</Typography>
>>>>>>> c731633 ((talent-vetting-dashboard))
            <TextField
            sx={{ mt: 10, width:{sm:600,md:900}, ml:{xs:2,sd:2,sm:3,md:13}, height:100 }}
            name="Degree"
            type="file"
            placeholder="Enter Degree"
        />
            <Container sx={{position:'relative',bottom:"50px" }}>
<<<<<<< HEAD
            <Box sx={{mt:10,display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"},ml:{xs:0,sd:0,sm:0,md:10}}}>
          <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField  size="small" {...params} sx={{width:{xs:278,sd:324,sm:280,md:400}}}/>}
        />
          <DesktopDatePicker
          label="End Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" sx={{width:{xs:278,sd:324,sm:280,md:400},mt:{xs:8,sd:8,sm:0,md:0},ml:{xs:0,sd:0,sm:2,md:10}}}/>}
        />
        </Box>
=======
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
>>>>>>> c731633 ((talent-vetting-dashboard))
            </Container>
        </Container>
    </form>
    <Box sx={{ml:{sd:20,sm:50,md:120}, mt: 5, display: 'flex', justifyContent: 'space-around' }}>
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
    </LocalizationProvider>
  )
}

export default Education