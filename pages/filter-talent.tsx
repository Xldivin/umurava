import React from 'react'
import Box from '@mui/material/Box';
import Talent_Cards from 'pages-sections/client-application-fom/Sideflex2';
import Footer from 'pages-sections/login/Footer';

function search_talent() {
  return (
    <Box sx={{background:"#F3F3F3",height:"125vh"}}>
    <Talent_Cards />
    <Footer />
    </Box>
  )
}

export default search_talent