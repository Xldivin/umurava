import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Customer from '../../../public/assets/images/umurava/Customer.png';
import Outsource from '../../../public/assets/images/umurava/Outsource.png';
import Search from '../../../public/assets/images/umurava/Search.png';
import Image from 'next/image';
import Router from 'next/router';


function Box_Header() {
  return (
    <>
      <Box sx={{ width: { xs: 350, sd: 400, sm: 700, md: 1260 }, background: '#FFFFFF', mt: 5, height: { xs: 420, sd: 300, sm: 200, md: 200 }, ml: { xs: 2, sd: 2, sm: 5, md: 20 }, zIndex: 'tooltip', borderRadius: 3, boxShadow: 2 }}>
        <Typography align="center" sx={{ ml: { sm: -6, md: 11 }, mt: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Eu eu elementum amet ultricies venenatis<br /> volutpat ornare est vitae.</Typography>
        <Button variant="contained" sx={{ width: { xs: 170, sd: 180, sm: 190, md: 190 }, height: 70, ml: { xs: 10, sd: 2, sm: 5, md: 45 }, mt: 4, backgroundColor: "#1CBF73", color: "#FFFFFF", p: "10px" }} startIcon={<Image src={Customer} width={60} height={60} />} onClick={() => { Router.push('/solo-freelancer1') }}>
          Solo Freelancer
        </Button>
        <Button variant="contained" sx={{ width: { xs: 170, sd: 180, sm: 190, md: 190 }, height: 70, ml: { xs: 10, sd: 2, sm: 5, md: 2 }, mt: 4, backgroundColor: "#1CBF73", color: "#FFFFFF", p: "10px" }} startIcon={<Image src={Outsource} width={55} height={55} />} onClick={() => { Router.push('/freelance-team') }}>
          Freelance Team
        </Button>
        <Button variant="contained" sx={{ width: { xs: 170, sd: 180, sm: 190, md: 190 }, height: 70, ml: { xs: 10, sd: 13, sm: 2, md: 2 }, mt: 4, backgroundColor: "#1CBF73", color: "#FFFFFF", p: "10px" }} startIcon={<Image src={Search} width={80} height={80} />} onClick={() => { Router.push('/client-search') }}>
          Search Your Talent/Team
        </Button>
      </Box>
    </>
  )
}

export default Box_Header