// import { H3 } from "components/Typography";
// import { Box, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import React, { FC, useCallback, useState } from "react";
// import * as yup from "yup";
// import Button from '@mui/material/Button';
// import { Span } from 'components/Typography';
// import  { Paragraph, H5 } from 'components/Typography';
// import { FormControlLabel } from '@mui/material';
// import { Checkbox } from '@mui/material';
// import Router from 'next/router'
//
// type SidenavProps = {
//   toggleForm?: () => void;
// };
// const SignupForm: FC<SidenavProps> = (props) => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };
//
//   const formSchema = yup.object().shape({
//     email: yup.string().email("invalid email").required("Email is required"),
//     password: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
//   });
//
//   const handleFormSubmit = async (values: any) => {
//     console.log(values);
//     return values;
//   };
//
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       onSubmit: handleFormSubmit,
//       validationSchema: formSchema,
//   });
//
//   const { toggleForm } = props;
//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//   return (
//     <Box sx={{border:1,width:{xs:350,sd:395,sm:500,md:500}, position: 'absolute', top:{xs:450,sd:450,sm:300,md:70},ml:{xs:2,sd:2,sm:20,md:70},mt:15, borderRadius:10,zIndex: 'tooltip',background: '#F2F2F2'}}>
//     <form onSubmit={handleSubmit}>
//       <H3 textAlign="center" mb={1}>
//         Sign up with email
//       </H3>
//       <TextField
//         size="small"
//         name="email"
//         type="email"
//         variant="outlined"
//         value={values.email}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         error={!!touched.email && !!errors.email}
//         helperText={touched.email && errors.email}
//         label="Email or Phone Number"
//         placeholder="exmple@mail.com"
//         sx={{
//           borderRadius: 28,
//           ml:{xs:3,sd:6,sm:9,md:10},
//           width:300
//         }}
//       />
//       <TextField
//         size="small"
//         name="password"
//         label="Password"
//         value={values.password}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         error={!!touched.password && !!errors.password}
//         helperText={touched.password && errors.password}
//         autoComplete="on"
//         variant="outlined"
//         sx={{
//           width:300,
//           borderRadius: 28,
//           mt:7,
//           ml:{xs:3,sd:6,sm:9,md:10},
//         }}
//       />
//     <Paragraph sx={{ml:{xs:27,sd:29,sm:25,md:33}}} onClick={() =>{ Router.push('/forgot-password')}}>
//       Forget Password?
//     </Paragraph>
//     </form>
//     <FormControlLabel control={<Checkbox {...label} color="primary" />}label="I accept general terms & conditions & privacy policy of Umurava" sx={{ml:2,mt:5}} />
//     <Box sx={{display:'flex' , flexDirection: 'column',ml:15}}>
//     <Button variant="contained" sx={{width:250,ml:{xs:-10,sd:-6,sm:2},borderRadius: 28,mt:4}}>
//         Sign Up
//     </Button>
//       <Button variant="contained" sx={{mt:5, width:250,ml:{xs:-10,sd:-6,sm:2},borderRadius: 28}} onClick={()=>{
//          toggleForm()
//       }}>
//         Cancel
//       </Button>
//     </Box>
//     <Paragraph sx={{mt:4, ml:{xs:8,sd:10,sm:18,md:18}}}>
//     Already have an accont?
//     <Span sx={{fontWeight: 'bold'}} onClick={() =>{ Router.push('/login2')}}>Login Here</Span>
//     </Paragraph>
//   </Box>
//   )
// }
// export default SignupForm
export default {}