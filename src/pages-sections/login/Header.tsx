import React from 'react'
import { AppBar, Toolbar } from "@mui/material"
import Box from '@mui/material/Box';
import CatchPokemonIcon from "@mui/icons-material/CatchingPokemon"

function Header() {
  return (
    <>
        <Box sx={{width:{xs:"100vh",sm:768,md:1000,lg:1600}, backgroundColor: 'info.main'}}>
        <Toolbar>

        </Toolbar>
    </Box>
    </>
  )
}

export default Header