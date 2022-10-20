import React from 'react'
import Box from '@mui/material/Box';
import Client_landing from 'pages-sections/client-application-fom/Client-offering1';
import Client_offering2 from 'pages-sections/client-application-fom/Client-offering2';
import Footer from 'pages-sections/login/Footer';


function talent_offering_page() {
  return (
    <Box>
      <Client_landing />
      <Client_offering2 />
      <Footer />
    </Box>
  )
}

export default talent_offering_page