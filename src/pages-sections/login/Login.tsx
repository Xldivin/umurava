import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useState } from "react";
import LoginForm from './LoginForm';

function Login() {
  const [open, setOpen] = useState(false);
  const toggleForm = () => setOpen((open) => !open);
  return (
    <div>
        {open && <LoginForm 
        toggleForm = {toggleForm}
        /> }
        <Box sx={{display:"flex",ml:40, mt:20,zIndex: 'modal',justifyContent:"column"}}>
        <div>
        <Typography variant="h5" fontSize={30} maxWidth="500px" sx={{fontWeight: 'bold'}}>
            Outsource, Hire, Work with and Manage the Africa's Vetted Talents & Teams
        </Typography>
        <Typography fontSize={18} maxWidth='480px' sx={{mt:6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque nibh in dolor fermentum ullamcorper. Maecenas imperdiet est tellus, et dictum quam sodales sed. Cras in orci non turpis sagittis consectetur at id elit. 
        </Typography>
        </div>
        <div>
            <Box sx={{width: 437,height: 548,border: '1px solid black',ml:20}}>
              <Box sx={{ display: 'flex', alignContent: 'space-around', ml:15, mt:3, textDecoration: 'underline'}}>
              <Typography variant="h5" sx={{ml:2}}>
              SIGN IN AS A CLIENT
              </Typography>
              </Box>
              <Box sx={{ display: 'flex',flexDirection: 'column'}}>
              <Button variant="contained" startIcon={<GoogleIcon />} color='inherit'sx={{mt:5, width:{xs:300,sd:300,sm:350}, ml:{xs:2,sd:2,sm:5}, borderRadius: 28}}> 
                Sign in with gmail
              </Button>
              <Button variant="contained" startIcon={<AppleIcon />} color='inherit' sx={{mt:2, width:{xs:300,sd:300,sm:350}, ml:{xs:2,sd:2,sm:5}, borderRadius: 28}}> 
                Sign in with apple
              </Button>
              <Button variant="contained" startIcon={<FacebookIcon />} color='inherit' sx={{mt:2, width:{xs:300,sd:300,sm:350}, ml:{xs:2,sd:2,sm:5}, borderRadius: 28}}> 
                Sign in with facebook
              </Button>
              </Box>
              <Box>
              <Box sx={{borderBottom: 1, mt:7, width:150, ml:2, display:"inline"}}></Box>
              <Box sx={{ mt:7, ml:2, position: "relative", top: "8px", display:"inline"}}>or</Box>
              <Box sx={{borderBottom: 1, mt:7, width:150, ml:2, display:"inline"}}></Box>
              </Box>
              <Button variant="contained"color='inherit' sx={{mt:6, width:350, ml:5, borderRadius: 28}}
              onClick={() =>{
                toggleForm()
              }}
              > 
              Sign in with email address
              </Button>
              <Typography sx={{mt:5, ml:13,display:"inline"}}>Don't have an account? <Typography sx={{fontWeight: 'bold',display:"inline"}}>Login</Typography></Typography>
              <Typography sx={{ml:11, mt:5}}>2022 All rights reserved by umurava</Typography>
            </Box>
        </div>
        </Box>
    </div>
  )
}

export default Login