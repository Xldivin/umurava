import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import {TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import photo from '../../../public/assets/images/umurava/photo.png';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



function Body3() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{ml:30,}}>
        <H3 sx={{ml:{xs:-28,sd:-28,sm:-25,md:10},position:"relative",top:60}}>Solo Freelancer2</H3>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-25,sm:-28,md:10}}}
          name="budget"
          size="small"
          type="text"
          variant="outlined"
          label="Budget-Proposal"
          placeholder="Budget-Proposal"
          />
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-25,sm:10,md:10}}}
          name="files"
          size="small"
          type="text"
          variant="outlined"
          label="Project-supporting files"
          placeholder="Project-supporting files"
          />
        </Box>
        <Box sx={{mt:10,display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"},ml:{xs:-26,sd:-25,sm:-28,md:10}}}>
          <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField  size="small" {...params} sx={{width:{xs:300,sd:350,sm:300,md:400}}}/>}
        />
          <DesktopDatePicker
          label="End Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" sx={{width:{xs:300,sd:350,sm:300,md:400},mt:{xs:8,sd:8,sm:0,md:0},ml:{xs:0,sd:0,sm:10}}}/>}
        />
        </Box>
        <Box sx={{display:"flex",mb:10,mt:5,ml:{xs:-100,sd:-95,sm:-60,md:10}}}>
        <Button variant="contained" sx={{width:80, ml:90, mt:4, backgroundColor:"#EFEFFD", color:"#4B4DED"}}> 
        Back
        </Button>
        <Button variant="contained" sx={{width:80, ml:5, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF"}}> 
        Back
        </Button>
        </Box>
        <Box sx={{ml:{sm:50,md:130},display:{xs:"none",sd:"none",sm:"block",md:"block"}}}>
            <ImageListItem >
            <Image
                src={photo}
                width={80}
                height={80}
            />
            </ImageListItem>
        </Box>
    </Box>
    </LocalizationProvider>
  )
}

export default Body3