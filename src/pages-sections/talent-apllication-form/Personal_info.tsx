import React from 'react'
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import { useFormik } from "formik";
import * as yup from "yup";
import { Typography } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Grid } from '@mui/material';
import {TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Button from '@mui/material/Button';

function application_form() {

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
      };
      
      const formSchema = yup.object().shape({
        first_name: yup.string().email("invalid email").required("Email is required"),
        last_name: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
        email: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
      });
    
      const handleFormSubmit = async (values: any) => {
        console.log(values);
        return values;
      };


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues,
        onSubmit: handleFormSubmit,
        validationSchema: formSchema,
    });
  return (
   
    <Container sx={{}}>
            <Container sx={{borderBottom: 4,borderColor: '#2B71F0' }}>
            <H3 sx={{mt:6,ml:10}}>Personal info</H3>
            </Container>
        <form onSubmit={handleSubmit}>
          <Container sx={{display:'flex',}}>
          <TextField
          sx={{mt:10,width:400,ml:10}}
          name="first_name"
          size="small"
          type="text"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          label="First-name"
          placeholder="Enter your first-name address"
          />
          <TextField
          sx={{mt:10,width:400,ml:10}}
          name="last_name"
          size="small"
          type="text"
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          label="Last-name"
          placeholder="Enter your last-name address"
          />
          </Container>
          <Container>
          <TextField
          sx={{mt:10,width:400,ml:10}}
          name="email"
          size="small"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          label="Email"
          placeholder="Enter your email address"
          />
          </Container>
        </form>
        <Box sx={{ml:120,mt:5, display:'flex',justifyContent:'space-around'}}>
          <Button
            type="submit"
            variant="contained"
            sx={{background: '#DBDBDB',color:'#000000'}}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{background: '#407BFF'}}
          >
            Save
          </Button>
        </Box>
    </Container>
  )
}

export default application_form