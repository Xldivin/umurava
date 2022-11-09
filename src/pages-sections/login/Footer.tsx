import React from 'react';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material"
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { Typography } from "@mui/material";
import { H4 } from 'components/Typography';
import ListItemText from "@mui/material/List";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../../../public/assets/images/umurava/Logo.png";
import { Card as Cards } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ background: '#001A40', height: { xs: "235vh", sd: "235vh", sm: "77vh", md: "60vh" }, width: { xs: "55vh",sd:"61vh", sm: 768, lg: 1600 } }}>
      <Toolbar>
        <FlexBox sx={{ display: 'flex', flexDirection: { xs: "column", sd: "column", sm: "row", lg: "row" }, position: "relative", bottom: { xs: "0px", sd: "0px", sm: "0px", lg: "0px" }, left: { xs: "50px", sd: "70px", sm: "10px",md:"10px" } }} >
          <Box sx={{ ml: { xs:0,sd:0,sm:0, md: 11 }, color: "white",mr:{xs:5}, }}>
            <H4 sx={{width:{xs:300,sd:280,sm:130,md:260}}}>For Businesses & Organizations</H4><br/>
            <ListItemText sx={{cursor:"pointer"}}>Customized Talent Marketplace</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Hire & Outsource</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Freelance Team</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Build Remote Team</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Services Marketplace</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Consulting Projects Execution</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Talent Vetting System</ListItemText>
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
          <Box sx={{ ml:{xs:0,sd:0,sm:0,md: 10 }, color: "white",mt:{xs:5,sd:5,sm:0,md:0} }}>
            <H4 sx={{width:{xs:300,sd:300,sm:140,md:200}}}>Talent Specializations</H4><br/>
            <ListItemText sx={{cursor:"pointer"}}>Web & Software Development</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Graphics & Design</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Videography & Animation</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Sales & Marketing</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Finance & Accounting</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Research & Data</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Writing & Translation</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Project Management</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm:2,md: 10 }, color: "white",mt:{xs:5,sd:5,sm:0,md:0} }}>
            <H4 sx={{width:{xs:300,sd:0,sm:100,md:150}}}>Soutions</H4><br/>
            <ListItemText sx={{cursor:"pointer"}}>Research & Data</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Creative & Media</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>For Startups & SMEs</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>For Global Companies</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>For Enterprises</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm: 4, md: 15 }, color: "white",mt:{xs:5,sd:5,sm:0,md:0} }}>
            <H4 sx={{width:{xs:300,sd:280,sm:100,md:190}}}>For Talents</H4><br/>
            <ListItemText sx={{cursor:"pointer"}}>Join The Workforce</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Form the Team</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Find Jobs</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Community</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Upskilling & Training</ListItemText>
          </Box>
          <Box sx={{ ml: { xs:0,sd:0,sm: 4, md: 10 }, color: "white",mt:{xs:5,sd:5,sm:0,md:0} }}>
            <H4 sx={{width:{xs:300,sd:0,sm:100,md:280}}}>Company</H4><br/>
            <ListItemText sx={{cursor:"pointer"}}>About Us</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Why Umurava?</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Team</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Careers</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Our Impact</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Press & News</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Contact Us</ListItemText>
            <ListItemText sx={{cursor:"pointer"}}>Privacy Policy</ListItemText>
          </Box>
        </FlexBox>
        <FlexBox sx={{ mt: { xs: 70, sd: 24, sm: 58, lg: 60 }, display: { xs: 'none', sd: 'none', sm: 'flex', lg: 'flex' }, position: "relative", right: { sm: "450px", md: "840px" } }}>
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