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


function Body1() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{ml:30}}>
        <H3 sx={{ml:{xs:-28,sd:-28,sm:-25,md:10},position:"relative",top:60}}>Solo Freelancer1</H3>
        <form>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="category"
          size="small"
          type="text"
          variant="outlined"
          label="Project-category"
          placeholder="Enter your Project-category"
          />
         <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:350,md:400},ml:{xs:-26,sd:-26,sm:10,md:10}, height:100 }}
            name="description"
            multiline={true}
            rows={4}
            type="text"
            variant="outlined"
            label="Project description"
            placeholder="Enter your Project-description"
        />
        </Box>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="skills"
          size="small"
          type="text"
          variant="outlined"
          label="Skills"
          placeholder="Enter your Skills Required"
          />
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:10,md:10}}}
          name="experience"
          size="small"
          type="text"
          variant="outlined"
          label="experience"
          placeholder="Enter your experience required"
          />
        </Box>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="Budget"
          size="small"
          type="text"
          variant="outlined"
          label="Budget-Proposal"
          placeholder="Enter your Budget-Proposal"
          />
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:10,md:10}}}
          name="files"
          size="small"
          type="text"
          variant="outlined"
          label="Project Supporting Files"
          placeholder="Enter your Project Supporting Files"
          />
        </Box>
        <Box sx={{mt:10,display:"flex",flexDirection:{s:"column",sd:"column",sm:"row",md:"row"}}}>
          <Box sx={{ml:{xs:-25,sd:-25,sm:-28,md:10}}}>
          <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{width:{xs:280,sd:300,sm:300,md:400}}}/>}
        />
          </Box>
          <Box sx={{ml:{xs:-35,sd:-25,sm:10,md:10},mt:{xs:16,sd:10,sm:0,md:0}}}>
          <DesktopDatePicker
          label="End Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{width:{xs:280,sd:300,sm:300,md:400}}}/>}
        />
          </Box>
        </Box>
        <Box sx={{display:"flex",mb:10,mt:5,ml:{xs:-100,sd:-95,sm:-60,md:10}}}>
        <Button variant="contained" sx={{width:80, ml:90, mt:4, backgroundColor:"#EFEFFD", color:"#4B4DED"}}> 
        Back
        </Button>
        <Button variant="contained" sx={{width:80, ml:5, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF"}}> 
        Back
        </Button>
        </Box>
        </form>
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

export default Body1