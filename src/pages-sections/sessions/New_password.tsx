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

const Newpass = () => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
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
          Enter new password
        </H3>
        <Small
          mb={4.5}
          display="block"
          fontSize="14px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          Enter your new password and confirm password
        </Small>

        <BazarTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="New password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        <BazarTextField
          mb={2}
          fullWidth
          size="small"
          name="cpassword"
          label="Confirm password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.cpassword}
          placeholder="*********"
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.cpassword && !!errors.cpassword}
          helperText={touched.cpassword && errors.cpassword}
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
  password: "",
  cpassword:"",

};

const formSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  cpassword: yup.string().required("Confirm Password is required"),
});

export default Newpass;
