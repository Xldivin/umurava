import React from 'react'
import Box from '@mui/material/Box';
import Body5 from 'pages-sections/client-application-fom/Body5';
import Talent_Card from 'pages-sections/client-application-fom/Talent_Card';

function search_talent() {
  return (
    <Box sx={{background:"#F3F3F3",height:"100vh"}}>
    <Body5 />
    <Talent_Card />
    </Box>
  )
}

export default search_talent