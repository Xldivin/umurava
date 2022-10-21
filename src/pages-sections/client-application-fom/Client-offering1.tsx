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
        <Box  sx={{display:{xs:"none",sd:"none",sm:"flex",md:"flex"}, ml:{sm:1,md:20}, mt:5}}>
        <Paragraph sx={{color:"#ffffff",width:20}}>Platform</Paragraph>
        <Paragraph sx={{ml:8,color:"#ffffff",width:80,}}>Solutions</Paragraph>
        <Paragraph sx={{ml:2,color:"#ffffff",width:120}}>How it works</Paragraph>
        <Paragraph sx={{ml:2,color:"#ffffff",width:80}}>Industries</Paragraph>
        <Paragraph sx={{ml:2,color:"#ffffff",width:80}}>About us</Paragraph>
        </Box>
        <Box  sx={{display:{xs:"none",sd:"none",sm:"flex",md:"flex"},mr:15, mt:5}}>
        <Paragraph sx={{color:"#ffffff"}}>Login</Paragraph>
        <Button sx={{ml:2,borderRadius:'16px', background:"#1CBF73", pl:"20px",pr:"20px",color:"#ffffff",width:{sm:"210px",md:"230px"},position:"relative",bottom:"5px"}}>find quality talents</Button>
        </Box>
        </Box>
        <Box  sx={{display:"flex",mt:17,ml:{sm:-5,md:15},justifyContent:"space-between",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
            <Box sx={{ml:{xs:5,sd:5,sm:10,md:10}}}>
            <H3 sx={{mb:5,width:270,color:"#ffffff",position:"relative"}}>Get on-demand and vetted talents and teams</H3>
            <Paragraph sx={{width:{xs:310,sd:350,sm:390,md:390},mb:5,color:"#ffffff"}}>We are building a  large workforce hub of African vetted Freelance Developers, Designers, Marketers, Videographers, Finance specialists, Researchers, Data Analysts, Transcribers & Translators, and many more that deliver high quality services and deliver projects successfully  in their respective areas of expertise. 
            </Paragraph>
            <Button sx={{ borderRadius:'16px', background:"#1CBF73", pl:"25px",pr:"25px",color:"#ffffff"}}>View Talents</Button>
            </Box>
            <Box sx={{mr:30,mt:{xs:5,sd:5,sm:-2,md:-2},ml:{xs:8,sd:8,sm:0,md:0}}}>
                <ImageListItem sx={{width:{xs:250,sd:300,sm:300,md:500}}}>
                    <Image src={meeting}/>
                </ImageListItem>
            </Box>
        </Box>
    </Box>
  )
}

export default Client_landing