import React from 'react'
import Container  from '@mui/material/Container';
import {TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import photo from '../../../public/assets/images/umurava/photo.png';
import { useFormik } from "formik";
import * as yup from "yup";


function Body2() {
  const initialValues = {
    first_name: "",
    last_name: "",
    descrption: "",
    category: "",
    summary: "",
    project: "",
    skills: "",
    experience: "",
  };
  const formSchema = yup.object().shape({
    first_name: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    last_name: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    descrption: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    category: yup.string().min(2,"Minimum of 2 characters").required("This field is required"),
    summary: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    project: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    skills: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
    experience: yup.string().min(3,"Minimum of 3 characters").required("This field is required"),
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
    <Box sx={{ml:30,}}>
        <H3 sx={{ml:{xs:-28,sd:-28,sm:-25,md:10},position:"relative",top:60}}>Freelance Team</H3>
        <form onSubmit={handleSubmit}>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:-28,md:10}}}
          name="first_name"
          size="small"
          type="text"
          variant="outlined"
          label="First-name"
          onBlur={handleBlur}
          value={values.first_name}
          onChange={handleChange}
          error={!!touched.first_name && !!errors.first_name}
          helperText={touched.first_name && errors.first_name}
          placeholder="Enter your first-name"
          />
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:10,md:10}}}
          name="last_name"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.last_name}
          onChange={handleChange}
          error={!!touched.last_name && !!errors.last_name}
          helperText={touched.last_name && errors.last_name}
          label="Last_name"
          placeholder="Enter your last-name"
          />
        </Box>
        <Box sx={{display:"flex",flexDirection:{xs:"column",sd:"column",sm:"row",md:"row"}}}>
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:-28,md:10}}}
          name="descrption"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.descrption}
          onChange={handleChange}
          error={!!touched.descrption && !!errors.descrption}
          helperText={touched.descrption && errors.descrption}
          label="Client Descrption"
          placeholder="Enter your Client Descrption"
          />
        <TextField
          sx={{mt:10,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:10,md:10}}}
          name="category"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.category}
          onChange={handleChange}
          error={!!touched.category && !!errors.category}
          helperText={touched.category && errors.category}
          label="Service Category"
          placeholder="Enter your Service Category"
          />
        </Box>
        <Box>
        <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:-28,md:10}, height:100 }}
            name="summary"
            multiline={true}
            rows={5}
            type="text"
            variant="outlined"
            onBlur={handleBlur}
            value={values.summary}
            onChange={handleChange}
            error={!!touched.summary && !!errors.summary}
            helperText={touched.summary && errors.summary}
            label="Project Summary"
            placeholder="Project Summary"
        />
        <TextField
            sx={{ mt: 10, width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:10,md:10}, height:100 }}
            name="project"
            multiline={true}
            rows={5}
            type="text"
            variant="outlined"
            onBlur={handleBlur}
            value={values.project}
            onChange={handleChange}
            error={!!touched.project && !!errors.project}
            helperText={touched.project && errors.project}
            label="Project_Description"
            placeholder="Project_Description"
        />
        </Box>
        <Box>
        <TextField
          sx={{mt:15,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:-28,md:10}}}
          name="skills"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.skills}
          onChange={handleChange}
          error={!!touched.skills && !!errors.skills}
          helperText={touched.skills && errors.skills}
          label="Skills Required"
          placeholder="Enter Skills Required"
          />
        <TextField
          sx={{mt:15,width:{xs:300,sd:350,sm:300,md:400},ml:{xs:-26,sd:-26,sm:10,md:10}}}
          name="experience"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.experience}
          onChange={handleChange}
          error={!!touched.experience && !!errors.experience}
          helperText={touched.experience && errors.experience}
          label="Experience Required"
          placeholder="Enter experience required"
          />
        </Box>
        <Box sx={{display:"flex",mb:10,mt:5,ml:{xs:-100,sd:-95,sm:-60,md:10}}}>
        <Button variant="contained" sx={{width:80, ml:90, mt:4, backgroundColor:"#EFEFFD", color:"#4B4DED"}}> 
        Back
        </Button>
        <Button variant="contained" type="submit" sx={{width:80, ml:5, mt:4, backgroundColor:"#2B71F0", color:"#FFFFFF"}}> 
        Submit
        </Button>
        </Box>
        </form>
        <Box sx={{ml:{sm:50,md:130},display:{xs:"none",sd:"none",sm:"block",md:"block"}}}>
            <ImageListItem >
            <Image
                src={photo}
                width={80}
                height={80}
            />
            </ImageListItem>
        </Box>
    </Box>
  )
}

export default Body2