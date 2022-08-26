import React from 'react';
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material"
import { FlexBox, FlexBetween,FlexRowCenter } from "components/flex-box";
import { Link as Scroll } from "react-scroll";
import {  Button, IconButton, Typography, useMediaQuery } from "@mui/material";
import { H3 } from 'components/Typography';
import  ListItemText  from "@mui/material/List";

function Footer() {
  return (
    <Toolbar sx={{backgroundColor: 'secondary.dark', height: "40vh",}}>
      <FlexRowCenter sx={{position: "relative", bottom: "90px",}} >
        <Box sx={{ml:60, color:"grey.600"}}>
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
      </FlexRowCenter>
      <FlexBox sx={{mt:34, position: "relative", right:"300px"}}>
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
  )
}

export default Footer