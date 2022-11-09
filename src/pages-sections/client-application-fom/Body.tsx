import React from 'react'
import { TextField } from "@mui/material";
import { H3 } from "components/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import photo from '../../../public/assets/images/umurava/photo.png';
import { useFormik } from "formik";
import * as yup from "yup";


function Body() {
  const initialValues = {
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email: "",
    client: "",
    project: "",
  };
  const formSchema = yup.object().shape({
    first_name: yup.string().min(3, "Minimum of 3 characters").required("This field is required"),
    last_name: yup.string().min(3, "Minimum of 3 characters").required("This field is required"),
    job_title: yup.string().min(3, "Minimum of 3 characters").required("This field is required"),
    company_name: yup.string().min(2, "Minimum of 2 characters").required("This field is required"),
    client: yup.string().min(3, "Minimum of 3 characters").required("This field is required"),
    project: yup.string().min(3, "Minimum of 3 characters").required("This field is required"),
    email: yup.string().email("invalid email").required("Email is required"),
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
    <Box sx={{ ml: 30, }}>
      <H3 sx={{ ml: { xs: -28, sd: -28, sm: -25, md: 10 }, position: "relative", top: 60 }}>Solo Freelancer</H3>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 300, md: 400 }, ml: { xs: -26, sd: -26, sm: -28, md: 10 } }}
          name="first_name"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.first_name}
          onChange={handleChange}
          error={!!touched.first_name && !!errors.first_name}
          helperText={touched.first_name && errors.first_name}
          label="First-name"
          placeholder="Enter your first-name"
        />
        <TextField
          sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 300, md: 400 }, ml: { xs: -26, sd: -26, sm: 10, md: 10 } }}
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
        <TextField
          sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 300, md: 400 }, ml: { xs: -26, sd: -26, sm: -28, md: 10 } }}
          name="job_title"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.job_title}
          onChange={handleChange}
          error={!!touched.job_title && !!errors.job_title}
          helperText={touched.job_title && errors.job_title}
          label="Job_Title"
          placeholder="Enter your job_title"
        />
        <TextField
          sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 300, md: 400 }, ml: { xs: -26, sd: -26, sm: 10, md: 10 } }}
          name="company_name"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.company_name}
          onChange={handleChange}
          error={!!touched.company_name && !!errors.company_name}
          helperText={touched.company_name && errors.company_name}
          label="Company_Name"
          placeholder="Enter your company_name"
        />
        <TextField
          sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 300, md: 400 }, ml: { xs: -26, sd: -26, sm: -28, md: 10 } }}
          name="email"
          size="small"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          label="Email"
          placeholder="Enter your Email address"
        />
        <Box>
          <TextField
            sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 350, md: 400 }, ml: { xs: -26, sd: -26, sm: -28, md: 10 }, height: 100 }}
            name="client"
            multiline={true}
            rows={5}
            type="text"
            variant="outlined"
            onBlur={handleBlur}
            value={values.client}
            onChange={handleChange}
            error={!!touched.client && !!errors.client}
            helperText={touched.client && errors.client}
            label="About_Client"
            placeholder="About_Client"
          />
          <TextField
            sx={{ mt: 10, width: { xs: 300, sd: 350, sm: 350, md: 400 }, ml: { xs: -26, sd: -26, sm: 2, md: 10 }, height: 100 }}
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
            label="Project_Summary"
            placeholder="Project_Summary"
          />
        </Box>
        <Box sx={{ display: "flex", mb: 10, mt: 5, ml: { xs: -100, sd: -95, sm: -60, md: 10 } }}>
          <Button type="submit" variant="contained" sx={{ width: 80, ml: 98, mt: 4, backgroundColor: "#2B71F0", color: "#FFFFFF" }}>
            Next
          </Button>
        </Box>
      </form>
      <Box sx={{ ml: { sm: 50, md: 130 }, display: { xs: "none", sd: "none", sm: "block", md: "block" } }}>
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

export default Body