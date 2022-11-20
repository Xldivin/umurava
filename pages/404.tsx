import { Button } from "@mui/material";
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
import Link from "next/link";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import React from "react";
import notfound from '../../../public/assets/images/umurava/404.png';
import { Typography } from "@mui/material";

const Error404 = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    router.back();
  };

  return (
    <Box
     sx={{
      display:"flex",
      flexDirection:"column",
      minHeight:"100vh",
      justifyContent:"center",
      alignItems:"center",
      px:2,
     }}
    >
      <Typography>404</Typography>
      <Box sx={{display:"flex"}}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: "0.5rem" }}
          onClick={handleGoBack}
        >
          Go Back
        </Button>
        <Link href="/" passHref>
          <Button variant="contained" color="primary" sx={{ m: "0.5rem" }}>
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Error404;
