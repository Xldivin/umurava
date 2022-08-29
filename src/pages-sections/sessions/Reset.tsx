import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import BazarButton from "components/BazarButton";
import BazarTextField from "components/BazarTextField";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { Box, Divider } from "@mui/material";
import { H6 } from "components/Typography";
import Link from "next/link";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import SocialButtons from "./SocialButtons";
import { NextResponse, NextRequest } from 'next/server'
import Router from 'next/router'

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

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    // NextResponse.redirect("/confirm_email")
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
    <Wrapper elevation={3} >
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          Forgot password
        </H3>
        <Small
          mb={4.5}
          display="block"
          fontSize="14px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          Enter your email to reset your password
        </Small>

        <BazarTextField
          mb={1.5}
          fullWidth
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
          helperText={touched.email && errors.email}
        />
        <FlexBox
          justifyContent="center"
          alignItems="center"
        >
          <BazarButton
            color="primary"
            variant="outlined"
            sx={{ mb: "1.65rem", borderRadius: "1rem", mr: "1rem"}}
          >
            Cancel
          </BazarButton>
          <BazarButton
            type="submit"
            color="primary"
            variant="contained"
            sx={{ mb: "1.65rem", borderRadius: "1rem"}}
          >
            Continue
          </BazarButton>
        </FlexBox>
      </form>
      <FlexRowCenter my="1.25rem">
        <Box>Go back to</Box>
        <Link href={"/login"}>
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                Login
            </H6>
          </a>
        </Link>
      </FlexRowCenter>
    </Wrapper>
  );
};

const initialValues = {
  email: "",
};

const formSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("Email is required"),
});

export default Reset;
