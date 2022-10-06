import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FlexBox } from "components/flex-box";
import { Box, } from "@mui/material";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import React from "react";
import {TextField } from "@mui/material";
import * as yup from "yup";
import Button from '@mui/material/Button';

const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

type WrapperProps = { passwordVisibility?: boolean };

export const Wrapper = styled<React.FC<WrapperProps & CardProps>>(
  ({ children, ...rest }) => (
    <Card {...rest}>{children}</Card>
  )
)<CardProps>(({ theme }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
}));

const Reset = () => {

  const initialValues = {
    password: "",
    confirm_password: "",
  };
  
  const formSchema = yup.object().shape({
    password: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
    confirm_password: yup.string().min(6, "Minimum of 6 characters").required("Password is Required"),
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
    <Box  sx={{mt:30,width:{xs:300,sm:500},bgcolor:"white", zIndex:5, mb:20,ml:{xs:5,sd:8,sm:15,md:70} }}>
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Pick a new password
        </H3>
        <Small
          mb={4.5}
          display="block"
          fontSize="14px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          Reset your password
        </Small>
          <TextField
          sx={{mb:1.5,width:{xs:200,sm:300},ml:{xs:5,sm:14}}}
          name="password"
          size="small"
          type="password"
          variant="outlined"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          label="Password"
          placeholder="Enter your email address"
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
          <TextField
          sx={{mb:1.5,width:{xs:200,sm:300},ml:{xs:5,sm:14}}}
          name="confirm_password"
          size="small"
          type="password"
          variant="outlined"
          onBlur={handleBlur}
          value={values.confirm_password}
          onChange={handleChange}
          label="Confirm-password"
          placeholder="Enter your email address"
          error={!!touched.confirm_password && !!errors.confirm_password}
          helperText={touched.confirm_password && errors.confirm_password}
        />
        <FlexBox
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{ mb: "1.65rem", borderRadius: "1rem", background: '#001A40'}}
          >
            Continue
          </Button>
        </FlexBox>
      </form>
    </Box>
  );
};


export default Reset;
