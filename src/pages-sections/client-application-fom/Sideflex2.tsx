import React from 'react'
import Box from '@mui/material/Box';
import Talent_Card from './Talent_Card';
import Grid from '@mui/material/Grid';
import { H3 } from "components/Typography";
import { TextField } from "@mui/material";

function Talent_Cards() {
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3} sx={{ background: "#407BFF" }}>

        </Grid>
        <Grid item xs={8}>
          <Box>
            <H3 sx={{ ml: { xs: -28, sd: -28, sm: -25, md: 2 }, position: "relative", top: 60 }}>Search Talent/Team</H3>
            <TextField
              sx={{ mt: 10, width: { xs: 280, sd: 300, sm: 700, md: 500 }, ml: { xs: -25, sd: -25, sm: -28, md:45 } }}
              name="budget"
              type="text"
              variant="outlined"
              label="Search"
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',mb:10 }}>
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