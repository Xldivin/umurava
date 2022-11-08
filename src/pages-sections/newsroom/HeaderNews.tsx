import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import Box from '@mui/material/Box';
import { TextField,IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

function HeaderNews() {
  return (
    <div>
    <Box sx={{width:{xs:"100vh",sm:768,lg:1600},height:80, backgroundColor: 'grey.300'}}>
        <Toolbar>
            <Typography  variant='h3' sx={{ml:{sm:2,lg:10},mt:{xs:2,sm:3,lg:3},fontSize:{sm:20,lg:25},display:{xs:'none',sm:'block',lg:'block'}}}>Newsroom</Typography>
            <TextField
                    size="small"
                    name="Search Newsroom"
                    label="Search Newsroom"
                    autoComplete="on"
                    variant="outlined"
                    sx={{
                      width:{xs:250,sm:300,lg:300},
                      borderRadius: 28,
                      mt:{xs:3,sm:3,lg:3},
                      ml:{xs:5,sm:10,lg:80},
                      fontSize:20,
                    }}
                    InputProps={{
                      endAdornment: (
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                      )
                    }}
             />
             <Typography  variant='h3' sx={{ml:{xs:5,sm:5,lg:10},mt:3,display:{xs:'none',sm:'block',lg:'block'}}}>Popular Topics <ArrowDropDownIcon /></Typography>
        </Toolbar>
    </Box>
    </div>
  )
}

export default HeaderNews