import React from 'react'
import Box from '@mui/material/Box';
import Talent_Card from './Talent_Card';
import Grid from '@mui/material/Grid';
import { TextField, Theme } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import { H3, H5 } from "components/Typography";
import Slider from '@mui/material/Slider';
import { useTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const capitals = [
  'Kigali',
  'Otawa',
  'Nairobi',
  'Kampala',
  'Bujumbura',
  'Cape-town',
  'Abuja',
  'Bangui',
  'Maputo',
  'Dodoma',
];
const positions = [
  'Frontend-Developer',
  'Backend-Developer',
  'UI/UX-Designer',
  'Mobile-Developer',
  'Devops-Developer',
  'Blockchain-Developer',
];
const skills = [
  'React Js',
  'Node Js',
  'Adobe Xd',
  'Figma',
];
const languages = [
  'English',
  'French',
  'Swahili',
  'Kinyarwanda',
];
function valuetext(value: number) {
  return `${value}`;
}

const money = [
  {
    value: 0,
    label: 'Min: 5$/hr',
  },
  {
    value: 100,
    label: '100$/hr',
  },
];

function Talent_Cards() {
  const [capital, setCapital] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [skill, setSkill] = React.useState("");
  const [language, setLanguage] = React.useState("");

  const handleCapital = (event: SelectChangeEvent) => {
    setCapital(event.target.value);
  };
  const handlePosition = (event: SelectChangeEvent) => {
    setPosition(event.target.value);
  };
  const handleSkill = (event: SelectChangeEvent) => {
    setSkill(event.target.value);
  };
  const cards = [
    {
      "id": 1,
      "Name": "Ihirwe Leny Pascal",
      "Nationality": "August 25,2022",
      "Hours": "Umurava",
      "Developer": "Backend Developer",
      "Experience": "Senior",
      "Skill1": "Angular Js",
      "Skill2": "Angular Js",
      "Skill3": "Angular Js",
      "Skill4": "Angular Js",
      "Skill5": "Angular Js",
      "Skill6": "Angular Js",
      "Experience_Date": "2 Years and 5 Months",
      "Salary_Per_hour": "12"
    },
    {
      "id": 2,
      "Name": "Ihirwe Leny Pascal",
      "Nationality": "August 25,2022",
      "Hours": "Umurava",
      "Developer": "Backend Developer",
      "Experience": "Senior",
      "Skill1": "Angular Js",
      "Skill2": "Angular Js",
      "Skill3": "Angular Js",
      "Skill4": "Angular Js",
      "Skill5": "Angular Js",
      "Skill6": "Angular Js",
      "Experience_Date": "2 Years and 5 Months",
      "Salary_Per_hour": "12"
    },
    {
      "id": 3,
      "Name": "Ihirwe Leny Pascal",
      "Nationality": "August 25,2022",
      "Hours": "Umurava",
      "Developer": "Backend Developer",
      "Experience": "Senior",
      "Skill1": "Angular Js",
      "Skill2": "Angular Js",
      "Skill3": "Angular Js",
      "Skill4": "Angular Js",
      "Skill5": "Angular Js",
      "Skill6": "Angular Js",
      "Experience_Date": "2 Years and 5 Months",
      "Salary_Per_hour": "12"
    },
    {
      "id": 4,
      "Name": "Ihirwe Leny Pascal",
      "Nationality": "August 25,2022",
      "Hours": "Umurava",
      "Developer": "Backend Developer",
      "Experience": "Senior",
      "Skill1": "Angular Js",
      "Skill2": "Angular Js",
      "Skill3": "Angular Js",
      "Skill4": "Angular Js",
      "Skill5": "Angular Js",
      "Skill6": "Angular Js",
      "Experience_Date": "2 Years and 5 Months",
      "Salary_Per_hour": "12"
    },
  ]
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container spacing={3}>
        <Grid item xs={3} sx={{ background: "#407BFF", maxHeight: "103vh" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <H5 sx={{ ml: 10, color: "#ffffff" }}>Work-model</H5>
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="On-site" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Remote" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Hybrid" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <H5 sx={{ ml: 10, color: "#ffffff",mt:2 }}>Hourly rate</H5>
            <Slider
              orientation="horizontal"
              getAriaValueText={valuetext}
              defaultValue={30}
              marks={money}
              sx={{
                color: '#000',
                width: 300,
                ml: 5,
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 10,
                  height: 10,
                  color: '#fff',
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    color: '#fff',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 0px`,
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.70,
                  color: '#fff'
                },
                '& .MuiSlider-markLabel': {
                  color: '#fff',
                  ml: "5px",
                  mr: 5
                },
              }}
            />
            <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Capital</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={capital}
              size="small"
              label="Capital"
              onChange={handleCapital}
              sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
            >
              {capitals.map((capital) => (
                <MenuItem
                  key={capital}
                  value={capital}
                >
                  {capital}
                </MenuItem>
              ))}
            </Select>
            <H5 sx={{ ml: 10, color: "#ffffff", mt: "15px" }}>Availability</H5>
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Full-Time" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Part-Time" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Position</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={position}
              size="small"
              label="Capital"
              onChange={handlePosition}
              sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
            >
              {positions.map((position) => (
                <MenuItem
                  key={position}
                  value={position}
                >
                  {position}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Skills</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={skill}
              size="small"
              label="Capital"
              onChange={handleSkill}
              sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
            >
              {skills.map((skill) => (
                <MenuItem
                  key={skill}
                  value={skill}
                >
                  {skill}
                </MenuItem>
              ))}
            </Select>
            <H5 sx={{ ml: 10, color: "#ffffff", mt: "15px" }}>Expertise</H5>
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Junior" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Intermediate" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <FormControlLabel control={<Checkbox {...label} sx={{
              color: grey[100], '&.Mui-checked': { color: grey[100], },
            }} />} label="Senior" sx={{ ml: 3, mt: 0, color: "#ffffff" }} />
            <InputLabel id="demo-simple-select-label" sx={{ ml: 6, color: "#fff",mt:2 }}>Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={language}
              size="small"
              label="Capital"
              onChange={handleSkill}
              sx={{ width: 250, ml: 5, backgroundColor: "#fff", }}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language}
                  value={language}
                >
                  {language}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <H3 sx={{ ml: { xs: -28, sd: -28, sm: -25, md: 2 }, position: "relative", top: 60 }}>Search Talent/Team</H3>
            <TextField
              sx={{ mt: 10, width: { xs: 280, sd: 300, sm: 700, md: 500 }, ml: { xs: -25, sd: -25, sm: -28, md: 45 } }}
              name="budget"
              type="text"
              variant="outlined"
              label="Search"
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', mb: 10 }}>
              {
                cards.map((card) => {
                  return <Talent_Card card={card} key={card.id} />
                })
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Talent_Cards