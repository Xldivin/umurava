import React from 'react'
import Personal_info from 'pages-sections/talent-apllication-form/Personal_info'
import Experience from 'pages-sections/talent-apllication-form/Experience';
import Box from '@mui/material/Box';
import Portofolio from 'pages-sections/talent-apllication-form/Portofolio';
import Education from 'pages-sections/talent-apllication-form/Education';
import Expertise from 'pages-sections/talent-apllication-form/Expertise';
import Tool from 'pages-sections/talent-apllication-form/Tool';
import Services from 'pages-sections/talent-apllication-form/Services';
import Container  from '@mui/material/Container';
import Header from 'pages-sections/login/Header';
import Footer from 'pages-sections/login/Footer';

function application_form() {
  return (
    <Box sx={{background:'#F2F2F2',width:"100%",height:4000,overflowY:'hidden'}}>
      <Header/>
        <Container sx={{width:1300,background:'#FFFFFF',height:3200,ml:18,position: "absolute", top:170,overflowX:'hidden'}}>
        <Personal_info />
        <Experience />
        <Portofolio />
        <Education />
        <Expertise />
        <Tool />
        <Services />
        </Container>
        <Box sx={{mt:427}}>
        <Footer/>
        </Box>
    </Box>
  )
}

export default application_form