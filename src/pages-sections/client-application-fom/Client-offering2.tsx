import React from 'react'
import { H3,H5 } from "components/Typography";
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import development from '../../../public/assets/images/umurava/Development-pana.png';
import growth from '../../../public/assets/images/umurava/Growth.png';
import { Typography } from '@mui/material';

function Client_offering2() {
  return (
    <Box>
        <H3 sx={{mt:5,ml:18,mb:5}}>What we provide</H3>
        <Box sx={{display:"flex",ml:18}}>
        <Box sx={{ml:10,border: 2,width:300,borderRadius: 3, height:300,borderColor:"#407BFF"}}>
        <ImageListItem sx={{ml:"20px"}}>
            <Image src={development}/>
        </ImageListItem>
        <H5 sx={{ml:13}}>Solo Talent</H5>
        <Typography align="center" sx={{width:300}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
        <Box sx={{ml:10,border: 2,width:300,borderRadius: 3, height:300,borderColor:"#407BFF"}}>
        <ImageListItem sx={{ml:"20px"}}>
            <Image src={development}/>
        </ImageListItem>
        <H5 sx={{ml:13}}>Solo Talent</H5>
        <Typography align="center" sx={{width:300}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
        <Box sx={{ml:10,border: 2,width:300,borderRadius: 3, height:300,borderColor:"#407BFF"}}>
        <ImageListItem sx={{ml:"20px"}}>
            <Image src={development}/>
        </ImageListItem>
        <H5 sx={{ml:13}}>Solo Talent</H5>
        <Typography align="center" sx={{width:300}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
        </Box>
        <Box sx={{display:"flex",mt:10,justifyContent:"space-around"}}>
          <ImageListItem>
            <Image src={growth} />
          </ImageListItem>
          <Typography sx={{width:390,mt:18,mr:20}}>
          UmuravaWork also provides the in-demand skills
          to the African young talents to prepare them  for 
          the future of  work and global jobs markets.
          Businesses and orgranisations get vetted and skilled 
          talents that boosts the companies production
          </Typography>
        </Box>
    </Box>
  )
}

export default Client_offering2