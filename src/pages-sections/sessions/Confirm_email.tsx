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

const Confirm = () => {

    const email = localStorage.getItem("email")
    console.log(email)
    if(!email){

    }

    const resend = function () {
    //    function to resend email
    }

    

  return (
    <Wrapper elevation={3} >
        <H3 textAlign="center" mb={1}>
          Confirm email
        </H3>
        <Small
          mb={4.5}
          display="block"
          fontSize="14px"
          fontWeight="600"
          color="grey.800"
          textAlign="center"
        >
          The reset password link was sent to <h4>{email}</h4>
          {/* <Link href={"/reset_password"}>
            <a>
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                    change email
                </H6>
            </a>
          </Link> */}
        </Small>
        <FlexBox
          justifyContent="center"
          alignItems="center"
        >
          <BazarButton
            href="/reset_password"
            color="primary"
            variant="outlined"
            sx={{ mb: "1.65rem", borderRadius: "1rem", mr: "1rem"}}
          >
            Change email
          </BazarButton>
          <BazarButton
            onClick={resend}
            color="primary"
            variant="contained"
            sx={{ mb: "1.65rem", borderRadius: "1rem"}}
          >
            Resend email
          </BazarButton>
        </FlexBox>
    </Wrapper>
  );
};


export default Confirm;
