// import React from 'react';
// import Box from '@mui/material/Box';
// import { Paragraph } from 'components/Typography';
// import Button from '@mui/material/Button';
// import { H3 } from "components/Typography";
// import ImageListItem from '@mui/material/ImageListItem';
// import Image from 'next/image';
// import meeting from '../../../public/assets/images/umurava/Meeting-amico.png';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from "react";
// import Navbar_Phone from './Navbar_Phone';
//
// function Client_landing() {
//   const [menu, setMenu] = useState(false);
//   const toggleNav = () => setMenu((menu) => !menu);
//   return (
//     <Box sx={{ background: "#407BFF", height: 800,zIndex: 'modal' }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Box sx={{ display: { xs: "none", sd: "none", sm: "flex", md: "flex" }, ml: { sm: 1, md: 20 }, mt: 5 }}>
//           <Paragraph sx={{ color: "#ffffff", width: 20, cursor: "pointer" }}>Platform</Paragraph>
//           <Paragraph sx={{ ml: 8, color: "#ffffff", width: 80, cursor: "pointer" }}>Solutions</Paragraph>
//           <Paragraph sx={{ ml: 2, color: "#ffffff", width: 120, cursor: "pointer" }}>How it works</Paragraph>
//           <Paragraph sx={{ ml: 2, color: "#ffffff", width: 80, cursor: "pointer" }}>Industries</Paragraph>
//           <Paragraph sx={{ ml: 2, color: "#ffffff", width: 80, cursor: "pointer" }}>About us</Paragraph>
//         </Box>
//         <Box sx={{ display: { xs: "none", sd: "none", sm: "flex", md: "flex" }, mr: 15, mt: 5 }}>
//           <Paragraph sx={{ color: "#ffffff", cursor: "pointer" }}>Login</Paragraph>
//           <Button sx={{ ml: 2, borderRadius: '16px', background: "#1CBF73", pl: "20px", pr: "20px", color: "#ffffff", width: { sm: "210px", md: "230px" }, position: "relative", bottom: "5px" }}>find quality talents</Button>
//         </Box>
//         {menu && <Navbar_Phone toggleNav = {toggleNav}/>}
//         <MenuIcon sx={{color:"#fff",display:{xs:"block",sd:"block",sm:"none",md:"none"},ml:{xs:42,sd:48}}}onClick={() =>{toggleNav()}}/>
//       </Box>
//       <Box sx={{ display: "flex", mt: 17, ml: { sm: -5, md: 15 }, justifyContent: "space-between", flexDirection: { xs: "column", sd: "column", sm: "row", md: "row" } }}>
//         <Box sx={{ ml: { xs: 5, sd: 5, sm: 10, md: 10 } }}>
//           <H3 sx={{ mb: 5, width:{sm:400,md:490}, color: "#ffffff", position: "relative",fontSize:30 }}>Get Africa’s Quality Talents and Teams, On-Demand</H3>
//           <Paragraph sx={{ width: { xs: 310, sd: 350, sm: 390, md: 390 }, mb: 5, color: "#ffffff" }}>We are developing Africa’s Quality Workforce and Talent Networks ready to get work done in the digital fields.
//           </Paragraph>
//           <Button sx={{ borderRadius: '16px', background: "#1CBF73", pl: "25px", pr: "25px", color: "#ffffff" }}>View Talents</Button>
//         </Box>
//         <Box sx={{ mr: 30, mt: { xs: 5, sd: 5, sm: -2, md: -2 }, ml: { xs: 8, sd: 8, sm: 0, md: 0 } }}>
//           <ImageListItem sx={{ width: { xs: 250, sd: 300, sm: 300, md: 500 } }}>
//             <Image src={meeting} />
//           </ImageListItem>
//         </Box>
//       </Box>
//     </Box>
//   )
// }
//
// export default Client_landing
//
// function toggleNav() {
//   throw new Error('Function not implemented.');
// }

export default {}