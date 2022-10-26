import React from 'react'
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import hexagon from '../../../public/assets/images/umurava/hexagon.png';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Rectangle from '../../../public/assets/images/umurava/Rectangle.png';
import PlaceIcon from '@mui/icons-material/Place';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { H4 } from "components/Typography";

function Talent_Card() {
  return (
    <Box sx={{ width: 320, height: 390, background: "#ffffff", ml: 40, mt: 5 }}>
      <Box sx={{ display: "flex" }}>
        <ImageListItem sx={{ ml: 2, mt: 2 }}>
          <Image
            src={Rectangle}
            width={100}
            height={120}
          >
          </Image>
        </ImageListItem>
        <Box>
          <Typography sx={{ ml: 2, mt: 2 }}>Ihirwe leny pascal</Typography>
          <Box sx={{ display: "flex", mt: "5px" }}>
            <PlaceIcon sx={{ ml: 2 }} />
            <Typography sx={{ ml: 1 }}>Rwanda</Typography>
          </Box>
          <Box sx={{ display: "flex", mt: "5px" }}>
            <WatchLaterIcon sx={{ ml: 2 }} />
            <Typography sx={{ ml: 1 }}>20 hrs/Week</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ ml: 2, mt: 2, border: 1.5, borderRadius: '10px', width: 80, pl: 1, height: 30, pt: "3px", borderColor: "#407BFF" }}>Matching</Typography>
            <Typography sx={{ ml: 2, mt: 2, border: 1.5, borderRadius: '10px', width: 80, pl: 1, height: 30, pt: "3px", borderColor: "#407BFF" }}>Available</Typography>
          </Box>
        </Box>
      </Box>
      <H4 sx={{ml:2}}>Backend Developer</H4>
      <Box sx={{display:"flex"}}>
      <ImageListItem sx={{ ml: 2 }}>
          <Image
            src={hexagon}
          >
          </Image>
        </ImageListItem>
        <Typography>Senior</Typography>
      </Box>
      <Typography sx={{ml:2,mt:"5px",mb:"5px"}}>Skills</Typography>
      <Box sx={{ml:2}}>
        <Button sx={{backgroundColor: "#F3F3F3",ml:1}}>Javascript</Button>
        <Button sx={{backgroundColor: "#F3F3F3",ml:1}}>Angular js</Button>
        <Button sx={{backgroundColor: "#F3F3F3",ml:1}}>Angular js</Button>
      </Box>
      <Box sx={{ml:2,mb:"10px"}}>
        <Button sx={{backgroundColor: "#F3F3F3",mt:2,ml:1}}>Javascript</Button>
        <Button sx={{backgroundColor: "#F3F3F3",mt:2,ml:1}}>Angular js</Button>
        <Button sx={{backgroundColor: "#F3F3F3",mt:2,ml:1}}>Angular js</Button>
      </Box>
      <Typography sx={{ml:2,mb:"5px"}}>Experience</Typography>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography sx={{ml:2}}>2 years and 5 months</Typography>
      <Typography sx={{fontWeight: 1000,mr:5,fontSize:35,position:"relative",top:-15}}>
        $12
      </Typography>
      </Box>
    </Box>
  )
}

export default Talent_Card