import React from 'react'
import  { Paragraph, H5 } from 'components/Typography';
import { FlexBox } from "components/flex-box";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import { DriveEtaOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Span } from 'components/Typography';
import { useState } from "react";
import LoginForm from './LoginForm';
import { blue,grey } from '../../theme/themeColors';

function Login() {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen((open) => !open);
  return (
    <div>
        {open && <LoginForm toggleForm = {toggleForm}/>}
        <FlexBox sx={{ml:40, mt:20,zIndex: 'modal'}}>
        <div>
        <Paragraph fontSize={30} maxWidth="500px" sx={{fontWeight: 'bold'}}>
            Outsource, Hire, Work with and Manage the Africa's Vetted Talents & Teams
        </Paragraph>
        <Paragraph fontSize={18} maxWidth='480px' sx={{mt:6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque nibh in dolor fermentum ullamcorper. Maecenas imperdiet est tellus, et dictum quam sodales sed. Cras in orci non turpis sagittis consectetur at id elit. 
        </Paragraph>
        </div>
        <div>
            <Box sx={{width: 437,height: 548,border: '1px solid black',ml:20}}>
              <Box sx={{ display: 'flex', alignContent: 'space-around', ml:15, mt:3, textDecoration: 'underline'}}>
              <H5 sx={{ml:2}}>
              SIGN IN AS A CLIENT
              </H5>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: 'column'}}>
              <Button variant="contained" startIcon={<GoogleIcon />} color='inherit'sx={{mt:5, width:350, ml:5, borderRadius: 28}}> 
                Sign in with gmail
              </Button>
              <Button variant="contained" startIcon={<AppleIcon />} color='inherit' sx={{mt:2, width:350, ml:5, borderRadius: 28}}> 
                Sign in with apple
              </Button>
              <Button variant="contained" startIcon={<FacebookIcon />} color='inherit' sx={{mt:2, width:350, ml:5, borderRadius: 28}}> 
                Sign in with facebook
              </Button>
              </Box>
              <FlexBox>
              <Span sx={{borderBottom: 1, mt:7, width:150, ml:2}}></Span>
              <Span sx={{ mt:7, ml:2, position: "relative", top: "8px"}}>or</Span>
              <Span sx={{borderBottom: 1, mt:7, width:150, ml:2}}></Span>
              </FlexBox>
              <Button variant="contained"color='inherit' sx={{mt:6, width:350, ml:5, borderRadius: 28}}
              onClick={() =>{
                toggleForm()
              }}
              > 
              Sign in with email address
              </Button>
              <Paragraph sx={{mt:5, ml:13}}>Don't have an account? <Span sx={{fontWeight: 'bold'}}>Login</Span></Paragraph>
              <Paragraph sx={{ml:11, mt:5}}>2022 All rights reserved by umurava</Paragraph>
            </Box>
        </div>
        </FlexBox>
    </div>
  )
}

export default Login