import React from 'react'
import Box from '@mui/material/Box';
import  { Paragraph } from 'components/Typography';
import Button from '@mui/material/Button';
import { H3,H5 } from "components/Typography";
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import meeting from '../../../public/assets/images/umurava/Meeting-amico.png';

function Client_landing() {
  return (
    <Box sx={{background:"#407BFF",height:800}}>
        <Box  sx={{display:"flex",justifyContent:"space-between"}}>
        <Box  sx={{display:"flex", ml:20, mt:5}}>
        <Paragraph sx={{color:"#ffffff"}}>Platform</Paragraph>
        <Paragraph sx={{ml:5,color:"#ffffff"}}>Solutions</Paragraph>
        <Paragraph sx={{ml:5,color:"#ffffff"}}>How it works</Paragraph>
        <Paragraph sx={{ml:5,color:"#ffffff"}}>Industries</Paragraph>
        <Paragraph sx={{ml:5,color:"#ffffff"}}>About us</Paragraph>
        </Box>
        <Box  sx={{display:"flex",mr:15, mt:5}}>
        <Paragraph sx={{mt:0.5,color:"#ffffff"}}>Login</Paragraph>
        <Button sx={{ml:2,borderRadius:'16px', background:"#1CBF73", pl:"20px",pr:"20px",color:"#ffffff"}}>Find Quality Talents</Button>
        </Box>
        </Box>
        <Box  sx={{display:"flex",mt:17,ml:15,justifyContent:"space-between"}}>
            <Box sx={{ml:10}}>
            <H3 sx={{mb:5,width:270,color:"#ffffff"}}>Get on-demand and vetted talents and teams</H3>
            <Paragraph sx={{width:390,mb:5,color:"#ffffff"}}>We are building a  large workforce hub of African vetted Freelance Developers, Designers, Marketers, Videographers, Finance specialists, Researchers, Data Analysts, Transcribers & Translators, and many more that deliver high quality services and deliver projects successfully  in their respective areas of expertise. 
            </Paragraph>
            <Button sx={{ borderRadius:'16px', background:"#1CBF73", pl:"25px",pr:"25px",color:"#ffffff"}}>View Talents</Button>
            </Box>
            <Box sx={{mr:30,mt:-5}}>
                <ImageListItem>
                    <Image src={meeting} />
                </ImageListItem>
            </Box>
        </Box>
    </Box>
  )
}

export default Client_landing