import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { H3 } from 'components/Typography';
import { Typography } from "@mui/material";
import draw from '../../../public/assets/images/umurava/draw.png';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';

function Body2() {
  return (
    <Box>
        <Box>
            <Sidebar/>
            <Box sx={{ml:50,display:"flex"}}>
                <Box>
                <H3 sx={{ml:2,mt:5}}>Register</H3>
                <Box sx={{width:770,height:180,background:"#fff",mt:5, border:1,borderColor:"#fff",borderRadius:"16px",ml:-5}}>
                    <H3 sx={{color:"#407BFF",ml:5,mt:2}}>Register</H3>
                    <Typography sx={{ml:5,mt:2,width:600,fontSize:15,fontWeight:'bold'}}>The first process of Umurava talet vetting process is the registration step where you fill a form with your personal information, experiences and other Information that proves that you’re a good fit</Typography>
                </Box>
                <Box sx={{display:"flex",ml:-5}}>
                </Box>
                </Box>
                <Box sx={{width:400,height:600, background:"#fff", ml:3,mt:14,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                    <ImageListItem sx={{ml:3,mt:8}}>
                        <Image src={draw}/>
                    </ImageListItem>
                    <H3 sx={{ml:18,mt:5,color:"#407BFF"}}>Next Step</H3>
                    <Typography align='center' sx={{width:400,mt:5,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>After completing the registration process You Will move to the next step which Involves a communication interview for Evaluating your soft skills and personal traits</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Body2