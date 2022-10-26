import React from 'react'
import { H3, H5 } from "components/Typography";
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import development from '../../../public/assets/images/umurava/Development-pana.png';
import growth from '../../../public/assets/images/umurava/Growth.png';
import { Typography } from '@mui/material';

function Client_offering2() {
  return (
    <Box>
      <H3 sx={{ mt: 5, ml: { xs: 5, sd: 5, sm: 18, md: 18 }, mb: 5 }}>What we provide</H3>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sd: "column", sm: "column", md: "row" }, ml: 18 }}>
        <Box sx={{ ml: { xs: -12, sd: -10, sm: 10, md: 10 }, border: 2, width: 300, borderRadius: 3, height: 310, borderColor: "#407BFF", }}>
          <ImageListItem sx={{ ml: "20px" }}>
            <Image src={development} />
          </ImageListItem>
          <H5 sx={{ ml: 13 }}>Solo Talent</H5>
          <Typography align="center" sx={{ width: 300 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
        <Box sx={{ ml: { xs: -12, sd: -10, sm: 10, md: 10 }, border: 2, width: 300, borderRadius: 3, height: 310, borderColor: "#407BFF", mt: { xs: 5, sd: 5, sm: 5, md: 0 } }}>
          <ImageListItem sx={{ ml: "20px" }}>
            <Image src={development} />
          </ImageListItem>
          <H5 sx={{ ml: 13 }}>Solo Talent</H5>
          <Typography align="center" sx={{ width: 300 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
        <Box sx={{ ml: { xs: -12, sd: -10, sm: 10, md: 10 }, border: 2, width: 300, borderRadius: 3, height: 310, borderColor: "#407BFF", mt: { xs: 5, sd: 5, sm: 5, md: 0 } }}>
          <ImageListItem sx={{ ml: "20px" }}>
            <Image src={development} />
          </ImageListItem>
          <H5 sx={{ ml: 13 }}>Solo Talent</H5>
          <Typography align="center" sx={{ width: 300 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh vel auctor a pellentesque.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 10, justifyContent: "space-around", flexDirection: { xs: "column", sd: "column", sm: "row", md: "row" } }}>
        <ImageListItem sx={{ sd: 300, sm: 300, md: 200 }}>
          <Image src={growth} />
        </ImageListItem>
        <Typography sx={{ width: { xs: 350, sd: 350, sm: 390, md: 390 }, mt: { sm: 10, md: 18 }, mr: 20, ml: { xs: "20px", sd: "15px" }, mb: 5 }}>
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