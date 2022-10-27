import React from 'react'
import Box from '@mui/material/Box';
import { H3 } from "components/Typography";
import { TextField } from "@mui/material";

function Body5() {
  return (
    <Box>
      <H3 sx={{ ml: { xs: -28, sd: -28, sm: -25, md: 40 }, position: "relative", top: 60 }}>Search Talent/Team</H3>
      <TextField
        sx={{ mt: 10, width: { xs: 280, sd: 300, sm: 700, md: 500 }, ml: { xs: -25, sd: -25, sm: -28, md: 65 } }}
        name="budget"
        type="text"
        variant="outlined"
        label="Search"
      />
      <Box sx={{ width: 100 }}>

      </Box>
    </Box>
  )
}

export default Body5