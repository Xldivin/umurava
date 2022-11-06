import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { H3 } from 'components/Typography';
import { Typography } from "@mui/material";
import draw1 from '../../../public/assets/images/umurava/draw1.png';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

function Body3() {
  return (
    <Box>
        <Box>
            <Sidebar/>
            <Box sx={{ml:50,display:"flex"}}>
                <Box>
                <H3 sx={{ml:2,mt:5}}>Interview</H3>
                <Box sx={{width:770,height:180,background:"#fff",mt:5, border:1,borderColor:"#fff",borderRadius:"16px",ml:-5}}>
                    <H3 sx={{color:"#407BFF",ml:5,mt:2}}>Communication interview</H3>
                    <Typography sx={{ml:5,mt:2,width:600,fontSize:15,fontWeight:'bold'}}>The second step is the communication interview which is done in order to Access or evaluate your communication and soft skills and personal traits To see if you’re a candidate who is passionate and fully engaged in your work</Typography>
                </Box>
                <Box sx={{display:"flex",ml:-5}}>
                    <Box sx={{width:350,height:430,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                    <Box sx={{ ml: 8.5 , border: 2, width: 200, height: 110, borderColor: "#407BFF",mt:5}}>
                        <Typography sx={{ width: 200, pb: 2, pl: 2, pr: 2,mt:5,fontSize:15,fontWeight:'bold'}}>Communication and Soft skills</Typography>
                        <Box sx={{width: 25,height: 25,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"5px 5px 0px 0px",mt:-14,ml:1}}></Box>
                    </Box>
                    <Box sx={{ ml: 8.5 , border: 2, width: 200, height: 110, borderColor: "#407BFF",mt:5}}>
                        <Typography sx={{ width: 200, pb: 2, pl: 2, pr: 2,mt:5,fontSize:15,fontWeight:'bold' }}>Strenghts, Weakness and personal traits</Typography>
                        <Box sx={{width: 25,height: 25,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"5px 5px 0px 0px",mt:-14,ml:1}}></Box>
                    </Box>
                    </Box>
                    <Box sx={{width:350,height:430,background:"#fff",ml:5,mt:5,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                        <Typography sx={{width:340,mt:10,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>This interview will be carried out in a period of 1 hour, Please be punctual and respect time.<br/> <br/> Below is a link to your interview </Typography>
                        <Typography sx={{width:340,mt:5,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>Meeting Link: </Typography>
                        <Link href="https://meet.google.com/srx-kipw-ubk" underline="none" sx={{ml:2,fontSize:18,color:"#407BFF"}}>https://meet.google.com/srx-kipw-ubk</Link>
                    </Box>
                </Box>
                </Box>
                <Box sx={{width:400,height:600, background:"#fff", ml:3,mt:14,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                    <ImageListItem sx={{ml:8,mt:8}}>
                        <Image src={draw1}/>
                    </ImageListItem>
                    <H3 sx={{ml:18,mt:5,color:"#407BFF"}}>Next Step</H3>
                    <Typography align='center' sx={{width:400,mt:5,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>After successfully passing communication interview you’ll be given a technical test That will be carried out in a specified Period of time and you’ll submit the test after completing it</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Body3