import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import { Typography } from "@mui/material";
import draw3 from '../../../public/assets/images/umurava/draw3.png';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

function Body5() {
    return (
        <Box>
            <Box>
                <Sidebar />
                <Box sx={{ ml: 50, display: "flex" }}>
                    <Box>
                        <Typography variant="h3" sx={{ ml: 2, mt: 5 }}>Technical Interview</Typography>
                        <Box sx={{ width: 770, height: 180, background: "#fff", mt: 5, border: 1, borderColor: "#fff", borderRadius: "16px", ml: -5 }}>
                            <Typography variant="h3" sx={{ color: "#407BFF", ml: 5, mt: 2 }}>Technical Interview</Typography>
                            <Typography sx={{ ml: 5, mt: 2, width: 600, fontSize: 15, fontWeight: 'bold' }}>The next Step is the technical interview Part where you have a live session with experts in your functional domain, Our experts provide live exercises, and Through them they evaiuate your problem-solving abilities, the depth or your experience, communication ability and your creativity</Typography>
                        </Box>
                        <Box sx={{ display: "flex", ml: -5 }}>
                            <Box sx={{ width: 350, height: 430, background: "#fff", mt: 5, border: 1, borderColor: "#fff", borderRadius: "16px" }}>
                            <Box sx={{ ml: 8.5 , border: 2, width: 200, height: 110, borderColor: "#407BFF",mt:5}}>
                               <Typography sx={{ width: 200, pb: 2, pl: 2, pr: 2,mt:5,fontSize:15,fontWeight:'bold'}}>Technical Skills</Typography>
                               <Box sx={{width: 25,height: 25,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"5px 5px 0px 0px",mt:-11.5,ml:1}}></Box>
                            </Box>
                            <Box sx={{ ml: 8.5 , border: 2, width: 200, height: 110, borderColor: "#407BFF",mt:5}}>
                               <Typography sx={{ width: 200, pb: 2, pl: 2, pr: 2,mt:5,fontSize:15,fontWeight:'bold'}}>Problem-Solving Abilities</Typography>
                               <Box sx={{width: 25,height: 25,background:"#407BFF",border:1,borderColor:"#407BFF",borderRadius:"5px 5px 0px 0px",mt:-14,ml:1}}></Box>
                            </Box>
                            </Box>
                            <Box sx={{ width: 350, height: 430, background: "#fff", ml: 5, mt: 5, border: 1, borderColor: "#fff", borderRadius: "16px" }}>
                                <Typography sx={{width:340,mt:7,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>This is a 3 hour technical interview with our experts to evaluate depth of your experience and your skills This interview also tests your speed<br/> <br/> Below is a link to your interview </Typography>
                                <Typography sx={{width:340,mt:5,fontSize:18,pl:2,pr:2,fontWeight:'bold'}}>Meeting Link: </Typography>
                                <Link href="https://meet.google.com/srx-kipw-ubk" underline="none" sx={{ml:2,fontSize:18,color:"#407BFF"}}>https://meet.google.com/srx-kipw-ubk</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: 400, height: 600, background: "#fff", ml: 3, mt: 14, border: 1, borderColor: "#fff", borderRadius: "16px" }}>
                        <ImageListItem sx={{ ml: 8, mt: 8 }}>
                            <Image src={draw3} />
                        </ImageListItem>
                        <Typography variant="h3" sx={{ ml: 18, mt: 5, color: "#407BFF" }}>Next Step</Typography>
                        <Typography align='center' sx={{ width: 400, mt: 5, fontSize: 18, pl: 2, pr: 2, fontWeight: 'bold' }}>After passing your technical test, The nextStep is a technical interview with our Expertsin your domain, this interview will containa section where you perform tasks live.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Body5