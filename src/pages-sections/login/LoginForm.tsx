import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import BazarButton from "components/BazarButton";
import BazarTextField from "components/BazarTextField";
import { H3, Small } from "components/Typography";
import { Box, BoxProps, TextField, TextFieldProps } from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import Button from '@mui/material/Button';
import Login from "./Login";
import  { Paragraph, H5 } from 'components/Typography';
function LoginForm() {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen((open) => !open);

  return (
    <Box sx={{border:1,width:500, position: 'absolute', top:70,ml:70,mt:15, borderRadius:10,backgroundColor:"grey.500",  zIndex: 'tooltip'}}>
    <form>
      <H3 textAlign="center" mb={1}>
        Login with email
      </H3>

      <TextField
        name="email"
        type="email"
        variant="outlined"
        label="Email or Phone Number"
        placeholder="exmple@mail.com"
        sx={{
          borderRadius: 28,
          ml:10,
          width:300
        }}
      />
      <TextField
        size="small"
        name="password"
        label="Password"
        autoComplete="on"
        variant="outlined"
        sx={{
          width:300,
          borderRadius: 28,
          mt:7,
          ml:10
        }}
      />
    </form>
    <Box sx={{display:'flex' , flexDirection: 'column',ml:15}}>
    <Button variant="contained" sx={{width:250, ml:2, borderRadius: 28, mt:4}}> 
        Submit
      </Button>
      <Button variant="contained" sx={{mt:5, width:250, ml:2, borderRadius: 28}} onClick={()=>{
         toggleSidenav()
      }}> 
        Cancel
      </Button>
    </Box>
    <Paragraph sx={{mt:4, ml:25}}>
      Forget Password?
    </Paragraph>
  </Box>
  )
}

export default LoginForm