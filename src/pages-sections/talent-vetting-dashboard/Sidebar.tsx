import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import process from '../../../public/assets/images/umurava/Process.png';
import group from '../../../public/assets/images/umurava/Group.png';
import group1 from '../../../public/assets/images/umurava/Group 1.png';
import group2 from '../../../public/assets/images/umurava/Group2.png';
import technical from '../../../public/assets/images/umurava/Technical interview.png';
import group3 from '../../../public/assets/images/umurava/Group3.png';
import group4 from '../../../public/assets/images/umurava/Group4.png';
import group5 from '../../../public/assets/images/umurava/Group5.png';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <Box sx={{ background: "#fff", borderRadius: '16px',ml:-3, position:{sm:"absolute",md:"fixed"}, width:365,height:879,display:{sm:"none",md:"block"}}}>
        <Box sx={{background:"#407BFF", width: 310, height:700,ml:4.5,mt:18, border:1,borderColor:"#407BFF",borderRadius:"16px",display:"flex"}}>
            <Typography variant="h3" sx={{color:"#fff",ml:4,mt:4}}>Vetting Process</Typography>
            <Box sx={{display:"flex"}}>
                <ImageListItem sx={{mt:9.5,ml:-21,color:"#fff"}}>
                    <Image
                    src={process}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Process</Typography>
            </Box>
            <Box sx={{display:"flex",mt:7,ml:-4.8}}>
                <ImageListItem sx={{mt:10,ml:-16}}>
                    <Image
                    src={group}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Register</Typography>
            </Box>
            <Box sx={{display:"flex",mt:14}}>
                <ImageListItem sx={{mt:10,ml:-16}}>
                    <Image
                    src={group1}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Communication Interview</Typography>
            </Box>
            <Box sx={{display:"flex",mt:21,ml:-15.5}}>
                <ImageListItem sx={{mt:10,ml:-12}}>
                    <Image
                    src={group2}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Umurava Test</Typography>
            </Box>
            <Box sx={{display:"flex",mt:28,ml:-1}}>
                <ImageListItem sx={{mt:10,ml:-16}}>
                    <Image
                    src={technical}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Techinical Interview</Typography>
            </Box>
            <Box sx={{display:"flex",mt:36,ml:-5}}>
                <ImageListItem sx={{mt:10,ml:-17}}>
                    <Image
                    src={group3}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Finalise Profile</Typography>
            </Box>
            <Box sx={{display:"flex",mt:44,ml:-1}}>
                <ImageListItem sx={{mt:10,ml:-17}}>
                    <Image
                    src={group4}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff"}}>Get Matched</Typography>
            </Box>
            <Box sx={{display:"flex",mt:54,ml:2}}>
                <ImageListItem sx={{mt:10,ml:-21}}>
                    <Image
                    src={group5}
                    />
                </ImageListItem>
                <Typography sx={{mt:10,ml:2,color:"#fff",fontWeight:'bold'}}>Workspace</Typography>
            </Box>
            <Box sx={{display:"flex",mt:80,ml:-10}}>
                <LogoutIcon sx={{color:"#ffff"}}/>
                <Typography sx={{ml:2,color:"#fff",fontWeight:'bold'}}>Logout</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar