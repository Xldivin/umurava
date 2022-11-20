import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import amico from '../../../public/assets/images/umurava/amico.png';
import Image from 'next/image';
import { Typography } from '@mui/material';

function Portofolio() {
  return (
<Box sx={{}}>
    <Container sx={{ borderBottom: 4, borderColor: '#2B71F0', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ mt: 6, ml:{xs:0,sd:0,sm:10,md:10} }}>Portofolio Items</Typography>
        <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{ background: '#407BFF', height: "40px", mt: 4 }}
        >
            Add Experience
        </Button>
    </Container>
    <Container sx={{ml:{sm:3,md:40}}}>
        <ImageListItem>
            <Image
            src={amico}
            width={600}
            height={500}
            />
        </ImageListItem>   
    </Container>
</Box>
  )
}

export default Portofolio