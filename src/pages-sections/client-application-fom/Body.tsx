import React from 'react'
import Container  from '@mui/material/Container';
import {TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import photo from '../../../public/assets/images/umurava/photo.png';


function Body() {
  return (
    <Box sx={{ml:30,}}>
        <H3 sx={{ml:{xs:-28,sd:-28,sm:-25,md:10},position:"relative",top:60}}>Solo Freelancer</H3>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="first_name"
          size="small"
          type="text"
          variant="outlined"
          label="First-name"
          placeholder="Enter your first-name"
          />
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:10,md:10}}}
          name="Last_name"
          size="small"
          type="text"
          variant="outlined"
          label="Last_name"
          placeholder="Enter your last-name"
          />
        </Box>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="job_title"
          size="small"
          type="text"
          variant="outlined"
          label="Job_Title"
          placeholder="Enter your job_title"
          />
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:10,md:10}}}
          name="Company_name"
          size="small"
          type="text"
          variant="outlined"
          label="Company_Name"
          placeholder="Enter your company_name"
          />
        </Box>
        <Box>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:300,md:400},ml:{xs:-25,sd:-25,sm:-28,md:10}}}
          name="Email"
          size="small"
          type="text"
          variant="outlined"
          label="Email"
          placeholder="Enter your Email address"
          />
        </Box>
        <Box>
        <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:350,md:400},ml:{xs:-26,sd:-26,sm:-28,md:10}, height:100 }}
            name="client"
            multiline={true}
            rows={5}
            type="text"
            variant="outlined"
            label="About_Client"
            placeholder="About_Client"
        />
        <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:350,md:400},ml:{xs:-26,sd:-26,sm:2,md:10}, height:100 }}
            name="Project"
            multiline={true}
            rows={5}
            type="text"
            variant="outlined"
            label="Project_Summary"
            placeholder="Project_Summary"
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
  )
}

export default Body