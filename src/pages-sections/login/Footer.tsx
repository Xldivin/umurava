import React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material"
import { FlexBox,FlexRowCenter } from "components/flex-box";
import { Typography } from "@mui/material";
import { H3 } from 'components/Typography';
import  ListItemText  from "@mui/material/List";

function Footer() {
  return (
    <Box sx={{backgroundColor: 'primary.dark', height:{xs:"90vh",sd:"90vh",sm:"50vh",lg:"50vh"},width:{xs:"100vh",sm:768,lg:1600}}}>
      <Toolbar>
      <FlexBox sx={{display:'flex',flexDirection:{xs:"column",sd:"column",sm:"row",lg:"row"},position: "relative", bottom:{xs:"0px",sd:"0px",sm:"50px",lg:"90px"},left:{xs:"50px",sd:"70px",sm:"0px",lg:"0px"}}} >
        <Box sx={{ml:{xs:10,sm:20,lg:60}, color:"grey.600"}}>
          <H3>Lorem</H3>
          <ListItemText>loremm</ListItemText>
          <ListItemText>loremm</ListItemText>
        </Box>
        <Box sx={{ml:10, color:"grey.600"}}>
          <H3>Lorem</H3>
          <ListItemText>loremm</ListItemText>
          <ListItemText>loremm</ListItemText>
        </Box>
        <Box sx={{ml:10, color:"grey.600"}}>
          <H3>Lorem</H3>
          <ListItemText>loremm</ListItemText>
          <ListItemText>loremm</ListItemText>
        </Box>
        <Box sx={{ml:10, color:"grey.600"}}>
          <H3>Lorem</H3>
          <ListItemText>loremm</ListItemText>
          <ListItemText>loremm</ListItemText>
        </Box>
      </FlexBox>
      <FlexBox sx={{mt:{xs:70,sd:24,sm:34,lg:50}, display:{xs:'none',sd:'none',sm:'flex',lg:'flex'}, position: "relative", right:{sm:"420px",lg:"300px"}}}>
        <Typography color="grey.600" p="0.25rem 1.25rem">
            Terms
        </Typography>
        <Typography color="grey.600" p="0.25rem 1.25rem">
            Policy
        </Typography>
        <Typography color="grey.600" p="0.25rem 1.25rem">
            Cookies
        </Typography>
      </FlexBox>
    </Toolbar>
    </Box>
  )
}
export default Footer