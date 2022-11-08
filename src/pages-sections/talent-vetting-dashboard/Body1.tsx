import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { Typography } from "@mui/material";

function Body1() {
  return (
    <Box>
        <Box>
            <Sidebar/>
            <Box sx={{ml:50,display:"flex"}}>
                <Box>
                <Typography variant="h3" sx={{ml:2,mt:5}}>Dashboard</Typography>
                <Box sx={{width:770,height:180,background:"#fff",mt:5, border:1,borderColor:"#fff",borderRadius:"16px",ml:-5}}>
                    <Typography variant="h3" sx={{color:"#407BFF",ml:5,mt:2}}>Umurava Talent Vetting Process</Typography>
                    <Typography sx={{ml:5,mt:2,width:600,fontSize:18,fontWeight:'bold'}}>Each candidate at Umurava passes through a vetting process to measure
                    Your communication or soft skills and your technical skills to evaluate the
                    candidate’s professionalism and commitment to the work</Typography>
                </Box>
                <Box sx={{display:"flex",ml:-5}}>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1}}>Register</Typography>
                        <Typography sx={{width:230,fontSize:17,ml:2}}>Register on our platform to be on of our talents</Typography>
                        <Typography sx={{ml:28,mt:3,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>1</Typography>
                    </Box>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px",ml:"15px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1,width:250}}>Communication Interview</Typography>
                        <Typography sx={{width:240,fontSize:17,ml:2}}>Language and soft skills evaluation</Typography>
                        <Typography sx={{ml:28,mt:-1,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>2</Typography>
                    </Box>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px",ml:"15px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1}}>Technical Test</Typography>
                        <Typography sx={{width:230,fontSize:17,ml:2}}>Test project to evaluate your technical skills</Typography>
                        <Typography sx={{ml:28,mt:3,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>3</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex",ml:-5}}>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1}}>Technical Interview</Typography>
                        <Typography sx={{width:230,fontSize:17,ml:2}}>Live exercises with our Experts in your domain</Typography>
                        <Typography sx={{ml:28,mt:3,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>4</Typography>
                    </Box>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px",ml:"15px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1}}>Get Onboarded</Typography>
                        <Typography sx={{width:230,fontSize:17,ml:2}}>Finalise your profile with your information</Typography>
                        <Typography sx={{ml:28,mt:3,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>5</Typography>
                    </Box>
                    <Box sx={{width:250,height:173,background:"#fff",mt:5,border:1,borderColor:"#fff",borderRadius:"16px",ml:"15px"}}>
                        <Box sx={{width:250,height:18,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"16px 16px 0px 0px",mt:-1}}></Box>
                        <Typography variant="h3" sx={{color:"#407BFF",ml:2,mt:1}}>Get Matched</Typography>
                        <Typography sx={{width:230,fontSize:17,ml:2}}>Get matched to jobs, services & projects</Typography>
                        <Typography sx={{ml:28,mt:3,color:"#407BFF",fontSize:20,fontWeight:'bold'}}>6</Typography>
                    </Box>
                </Box>
                </Box>
                <Box sx={{width:400,height:600, background:"#fff", ml:3,mt:14,border:1,borderColor:"#fff",borderRadius:"16px"}}>
                    <Typography variant="h3" sx={{color:"#407BFF",width:350,ml:5,fontSize:25}}>Why joining Umurava as a Talent or Service Provider </Typography>
                    <Typography sx={{width:400,mt:7,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>Get Matched to decent and meaningful job opportunities sourced from various companies, organizations,etc.<br/> <br/> Get also  matched to the Education to Employment programs to fully  prepare you for the Future of Work and Global Digital Economy<br/> <br/> Get provided with freelance talents and workforce teams that will boost your business.<br/> <br/> Providing on-demand and vetted talents and teams for both services and Long-term projects.</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Body1