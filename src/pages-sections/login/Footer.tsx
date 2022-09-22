import React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material"
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { Typography } from "@mui/material";
import { H3 } from 'components/Typography';
import ListItemText from "@mui/material/List";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../../../public/assets/images/umurava/Logo.png";
import { Card as Cards } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ background: '#001A40', height: { xs: "200vh", sd: "210vh", sm: "72vh", lg: "60vh" }, width: { xs: "100vh", sm: 768, lg: 1600 } }}>
      <Toolbar>
        <FlexBox sx={{ display: 'flex', flexDirection: { xs: "column", sd: "column", sm: "row", lg: "row" }, position: "relative", bottom: { xs: "0px", sd: "0px", sm: "0px", lg: "0px" }, left: { xs: "50px", sd: "70px", sm: "0px", lg: "0px" } }} >
          <Box sx={{ ml: { xs:0,sd:0,sm:0, lg: 11 }, color: "white",mr:{xs:5} }}>
            <H3 sx={{width:{xs:300,sd:0,sm:0,lg:0}}}>For Businesses & Organizations</H3>
            <ListItemText>Customized Talent Marketplace</ListItemText>
            <ListItemText>Hire & Outsource</ListItemText>
            <ListItemText>Freelance Team</ListItemText>
            <ListItemText>Build Remote Team</ListItemText>
            <ListItemText>Services Marketplace</ListItemText>
            <ListItemText>Consulting Projects Execution</ListItemText>
            <ListItemText>Talent Vetting System</ListItemText>
            <FlexBox sx={{ display: { xs: 'none', sd: 'none', sm: 'flex', lg: 'flex' }, mt:{sm:2,lg:10} }}>
              <Typography color="white">
                <TwitterIcon/>
              </Typography>
              <Typography color="white" sx={{ml:2}}>
              <LinkedInIcon/>
              </Typography>
              <Typography color="white" sx={{ml:2}}>
              <InstagramIcon/>
              </Typography>
              <Typography color="white" sx={{ml:2}}>
              <FacebookIcon/>
              </Typography>
            </FlexBox>
          </Box>
          <Box sx={{ ml:{xs:0,sd:0,sm:0,lg: 5 }, color: "white", }}>
            <H3>Talent Specializations</H3>
            <ListItemText>Web & Software Development</ListItemText>
            <ListItemText>Graphics & Design</ListItemText>
            <ListItemText>Videography & Animation</ListItemText>
            <ListItemText>Sales & Marketing</ListItemText>
            <ListItemText>Finance & Accounting</ListItemText>
            <ListItemText>Research & Data</ListItemText>
            <ListItemText>Writing & Translation</ListItemText>
            <ListItemText>Project Management</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm:2,lg: 10 }, color: "white" }}>
            <H3>Soutions</H3>
            <ListItemText>Research & Data</ListItemText>
            <ListItemText>Creative & Media</ListItemText>
            <ListItemText>For Startups & SMEs</ListItemText>
            <ListItemText>For Global Companies</ListItemText>
            <ListItemText>For Enterprises</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm: 4, lg: 10 }, color: "white" }}>
            <H3>For Talents</H3>
            <ListItemText>Join The Workforce</ListItemText>
            <ListItemText>Form the Team</ListItemText>
            <ListItemText>Find Jobs</ListItemText>
            <ListItemText>Community</ListItemText>
            <ListItemText>Upskilling & Training</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm: 4, lg: 10 }, color: "white" }}>
            <H3>Company</H3>
            <ListItemText>About Us</ListItemText>
            <ListItemText>Why Umurava?</ListItemText>
            <ListItemText>Team</ListItemText>
            <ListItemText>Careers</ListItemText>
            <ListItemText>Our Impact</ListItemText>
            <ListItemText>Press & News</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Privacy Policy</ListItemText>
          </Box>
        </FlexBox>
        <FlexBox sx={{ mt: { xs: 70, sd: 24, sm: 58, lg: 60 }, display: { xs: 'none', sd: 'none', sm: 'flex', lg: 'flex' }, position: "relative", right: { sm: "450px", lg: "650px" } }}>
          <Typography color="white" p="0.25rem 1.25rem">
            Terms
          </Typography>
          <Typography color="white" p="0.25rem 1.25rem">
            Policy
          </Typography>
          <Typography color="white" p="0.25rem 1.25rem">
            Cookies
          </Typography>
        </FlexBox>
        <Cards sx={{backgroundImage:`url(${Logo.src})`}}>

        </Cards>
      </Toolbar>
    </Box>
  )
}
export default Footer