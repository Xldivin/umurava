import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import {TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import photo from '../../../public/assets/images/umurava/photo.png';


function Body4() {
  return (
    <Box sx={{ml:30}}>
        <H3 sx={{ml:{xs:-28,sd:-28,sm:-25,md:60},position:"relative",top:60}}>Search Talent/Team</H3>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"column",md:"column"}}}>
        <TextField
          sx={{mt:10,width:{xs:280,sd:300,sm:700,md:750},ml:{xs:-25,sd:-25,sm:-28,md:25}}}
          name="budget"
          type="text"
          variant="outlined"
          label="Search"
          /> 
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <Button variant="contained" sx={{width:{xs:170,sd:180,sm:190,md:190}, ml:{xs:-20,sd:-20,sm:-25,md:30}, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF",height:70}}> 
        Solo Freelancer
        </Button>
        <Button variant="contained" sx={{width:{xs:170,sd:180,sm:190,md:190}, ml:{xs:-20,sd:-20,sm:5,md:10}, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF",height:70}}> 
        Solo Freelancer
        </Button>
        <Button variant="contained" sx={{width:{xs:170,sd:180,sm:190,md:190}, ml:{xs:-20,sd:-20,sm:5,md:10}, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF",height:70,mb:2}}> 
        Solo Freelancer
        </Button>
        </Box>
        <Box sx={{display:{xs:"none",sd:"none",sm:"flex",md:"flex"},flexDirection:{sm:"row",md:"row"}}}>
        <Button variant="contained" sx={{width:{xs:170,sd:180,sm:190,md:190}, ml:{xs:10,sd:2,sm:-25,md:30}, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF",height:70}}> 
        Solo Freelancer
        </Button>
        <Button variant="contained" sx={{width:{xs:170,sd:180,sm:190,md:190}, ml:{xs:10,sd:2,sm:5,md:10}, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF",height:70}}> 
        Solo Freelancer
        </Button>
        </Box>
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

export default Body4