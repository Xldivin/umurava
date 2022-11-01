import React from 'react'
import  { Paragraph, H5 } from 'components/Typography';
import { FlexBox } from "components/flex-box";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Span } from 'components/Typography';
import { useState } from "react";
import Router from 'next/router'

function Register() {
  return (
    <div>
        <Box sx={{ml:{xs:2,sd:4,sm:10,md:40}, mt:20,zIndex:'modal',display:"flex",flexDirection:{xs:"column",sd:"column",sm:"column",md:"row"}}}>
        <div>
        <Paragraph fontSize={30} sx={{fontWeight: 'bold',width:{xs:"350px",sd:"400px",sm:"480px"}}}>
            Outsource, Hire, Work with and Manage the Africa's Vetted Talents & Teams
        </Paragraph>
      <Paragraph fontSize={18} sx={{mt:6,width:{xs:"350px",sd:"400px",sm:"480px"}}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque nibh in dolor fermentum ullamcorper. Maecenas imperdiet est tellus, et dictum quam sodales sed. Cras in orci non turpis sagittis consectetur at id elit. 
      </Paragraph>
        </div>
        <div>
            <Box sx={{width:{xs:350,sd:350,sm:438},height: 350,border: '1px solid black',ml:{xs:0,sd:0,sm:0,md:20}}}>
              <Box sx={{ display: 'flex', alignContent: 'space-around', ml:15, mt:3, textDecoration: 'underline',}}>
              <H5 sx={{ml:{xs:0,sd:0,sm:8},fontWeight: 'bold'}}>
              SIGN UP
              </H5>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: 'column'}}>
              <Button variant="contained" color='inherit' sx={{mt:2, width:{xs:300,sd:300,sm:350}, ml:{xs:2,sd:2,sm:5}, borderRadius: 28}} onClick={() =>{ Router.push('/register/signup')}}> 
                Sign up as a talent
              </Button>
              <Button variant="contained" color='inherit' sx={{mt:2, width:{xs:300,sd:300,sm:350}, ml:{xs:2,sd:2,sm:5}, borderRadius: 28}}> 
                Find a Talent
              </Button>
              </Box>
              <Paragraph sx={{mt:5, ml:{xs:7,sd:7,sm:13}}}>Already have an account <Span sx={{fontWeight: 'bold'}} onClick={() =>{ Router.push('/login2')}}>Login here</Span></Paragraph>
              <Paragraph sx={{ ml:{xs:7,sd:7,sm:13}, mt:5}}>© 2022 All rights reserved by umurava</Paragraph>
            </Box>
        </div>
        </Box>
    </div>
  )
}

export default Register