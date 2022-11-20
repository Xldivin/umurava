// import React from 'react'
// import Box from '@mui/material/Box';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { grey } from '@mui/material/colors';
// import { H5 } from "components/Typography";
// import Slider from '@mui/material/Slider';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
//
// function SideBar() {
//     const [capital, setCapital] = React.useState("");
//     const [position, setPosition] = React.useState("");
//     const [skill, setSkill] = React.useState("");
//     const [language, setLanguage] = React.useState("");
//
//     const handleCapital = (event: SelectChangeEvent) => {
//       setCapital(event.target.value);
//     };
//     const handlePosition = (event: SelectChangeEvent) => {
//       setPosition(event.target.value);
//     };
//     const handleSkill = (event: SelectChangeEvent) => {
//       setSkill(event.target.value);
//     };
//     const capitals = [
//         'Kigali',
//         'Otawa',
//         'Nairobi',
//         'Kampala',
//         'Bujumbura',
//         'Cape-town',
//         'Abuja',
//         'Bangui',
//         'Maputo',
//         'Dodoma',
//       ];
//       const positions = [
//         'Frontend-Developer',
//         'Backend-Developer',
//         'UI/UX-Designer',
//         'Mobile-Developer',
//         'Devops-Developer',
//         'Blockchain-Developer',
//       ];
//       const skills = [
//         'React Js',
//         'Node Js',
//         'Adobe Xd',
//         'Figma',
//       ];
//       const languages = [
//         'English',
//         'French',
//         'Swahili',
//         'Kinyarwanda',
//       ];
//       function valuetext(value: number) {
//         return `${value}`;
//       }
//
//       const money = [
//         {
//           value: 0,
//           label: 'Min: 5$/hr',
//         },
//         {
//           value: 100,
//           label: '100$/hr',
//         },
//       ];
//     const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//   return (
//     <Box sx={{ background: "#407BFF", maxHeight: "150vh", border: 1, borderColor:"#407BFF", borderRadius: '16px',ml:-3, position:{sm:"absolute",md:"fixed"}, width:400,height:879,display:{sm:"none",md:"block"}}}>
//     <Box sx={{ display: "flex", flexDirection: "column",position:"relative" }}>
//       <H5 sx={{ ml: 10, color: "#ffffff" }}>Work-model</H5>
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="On-site" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Remote" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Hybrid" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <H5 sx={{ ml: 10, color: "#ffffff",mt:2, }}>Hourly rate</H5>
//       <Slider
//         orientation="horizontal"
//         getAriaValueText={valuetext}
//         defaultValue={30}
//         marks={money}
//         sx={{
//           color: '#000',
//           width: 300,
//           ml:7,
//           position:"relative",
//           height: 4,
//           '& .MuiSlider-thumb': {
//             width: 10,
//             height: 10,
//             color: '#fff',
//             transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
//             '&:before': {
//               color: '#fff',
//             },
//             '&:hover, &.Mui-focusVisible': {
//               boxShadow: `0px 0px 0px 0px`,
//             },
//             '&.Mui-active': {
//               width: 20,
//               height: 20,
//             },
//           },
//           '& .MuiSlider-rail': {
//             opacity: 0.70,
//             color: '#fff'
//           },
//           '& .MuiSlider-markLabel': {
//             color: '#fff',
//             ml: "5px",
//             mr: 5
//           },
//         }}
//       />
//       <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Capital</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select-label"
//         value={capital}
//         size="small"
//         label="Capital"
//         onChange={handleCapital}
//         sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
//       >
//         {capitals.map((capital) => (
//           <MenuItem
//             key={capital}
//             value={capital}
//           >
//             {capital}
//           </MenuItem>
//         ))}
//       </Select>
//       <H5 sx={{ ml: 10, color: "#ffffff", mt: "15px" }}>Availability</H5>
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Full-Time" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Part-Time" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Position</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select-label"
//         value={position}
//         size="small"
//         label="Capital"
//         onChange={handlePosition}
//         sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
//       >
//         {positions.map((position) => (
//           <MenuItem
//             key={position}
//             value={position}
//           >
//             {position}
//           </MenuItem>
//         ))}
//       </Select>
//       <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Skills</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select-label"
//         value={skill}
//         size="small"
//         label="Capital"
//         onChange={handleSkill}
//         sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
//       >
//         {skills.map((skill) => (
//           <MenuItem
//             key={skill}
//             value={skill}
//           >
//             {skill}
//           </MenuItem>
//         ))}
//       </Select>
//       <H5 sx={{ ml: 10, color: "#ffffff", mt: "15px" }}>Expertise</H5>
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Junior" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Intermediate" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <FormControlLabel control={<Checkbox {...label} sx={{
//         color: grey[100], '&.Mui-checked': { color: grey[100], },
//       }} />} label="Senior" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
//       <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Language</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select-label"
//         value={language}
//         size="small"
//         label="Capital"
//         onChange={handleSkill}
//         sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
//       >
//         {languages.map((language) => (
//           <MenuItem
//             key={language}
//             value={language}
//           >
//             {language}
//           </MenuItem>
//         ))}
//       </Select>
//     </Box>
//   </Box>
//   )
// }
//
// export default SideBar

export default {}