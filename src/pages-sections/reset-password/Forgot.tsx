import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import {TextField} from "@mui/material";
import Button from '@mui/material/Button';
import Router from 'next/router'
import Typography from '@mui/material/Typography';

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
  email: "",
};

const formSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("Email is required"),
});

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    const reset_token = "token values"
    localStorage.setItem("token",reset_token)
    localStorage.setItem("email",values.email)
    Router.push('/confirm_email')
    return values;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <Box  sx={{mt:30,width:{xs:300,sm:500},bgcolor:"white", zIndex:5, mb:20,ml:{xs:8,sd:8,sm:15,md:70}}}>
      <form onSubmit={handleSubmit}>
        <Typography textAlign="center" mb={1}>
          Forgot password
        </Typography>
        <TextField
        sx={{
          mb:4.5,
          display:"block",
          fontSize:"14px",
          fontWeight:"600",
          textAlign:"center"
        }}
        >
          Enter your email to reset your password
        </TextField>

        <TextField
          sx={{mb:1.5,width:{xs:200,sm:300},ml:{xs:5,sm:14}}}
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="Enter your email address"
          error={!!touched.email && !!errors.email}
          helperText={!!touched.email && !!errors.email}
        />
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            display:"flex"
          }}
        >
          <Button
            variant="outlined"
            sx={{ mb: "1.65rem", borderRadius: "1rem",borderColor: 'info.main', mr: "1rem"}}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            color="info"
            variant="contained"
            sx={{ mb: "1.65rem", borderRadius: "1rem", background: '#001A40'}}
          >
            Continue
          </Button>
        </Box>
      </form>
      <Box my="1.25rem">
        <Box>Go back to</Box>
        <Link href={"/login"}>
          <a>
            <Typography variant="h6" ml={1} borderBottom="1px solid" borderColor="grey.900">
                Login
            </Typography>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default Reset;
