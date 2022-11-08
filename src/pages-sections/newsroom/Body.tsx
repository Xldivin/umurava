import React from 'react';
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import umurava from '../../../public/assets/images/umurava/umurava1.png';
import Card from './Card';
import Card2 from './Card2';
import Typography from '@mui/material/Typography';



function Body() {
  const cards = [
    {
      "id":1,
      "Header":"Umurava Propels environmental business solutions forward with second impact accelerotar class",
      "date":"August 25,2022",
      "paragraph":"Umurava partnerships with RDB to build next generation of techies"
    },
    {
      "id":2,
      "Header":"Umurava Propels environmental business solutions forward with second impact accelerotar class",
      "date":"August 25,2022",
      "paragraph":"Umurava partnerships with RDB to build next generation of techies"
    },
    {
      "id":3,
      "Header":"Umurava Propels environmental business solutions forward with second impact accelerotar class",
      "date":"August 25,2022",
      "paragraph":"Umurava partnerships with RDB to build next generation of techies"
    },
    {
      "id":4,
      "Header":"Umurava Propels environmental business solutions forward with second impact accelerotar class",
      "date":"August 25,2022",
      "paragraph":"Umurava partnerships with RDB to build next generation of techies"
    },
    {
      "id":5,
      "Header":"Umurava Propels environmental business solutions forward with second impact accelerotar class",
      "date":"August 25,2022",
      "paragraph":"Umurava partnerships with RDB to build next generation of techies"
    },
  ]
  return (
    <div>
        <Typography variant="h3" sx={{ml:{xs:5,sm:10,lg:30},mt:5,fontSize:{xs:20,sm:25,lg:35},}}>Latest News</Typography>
        <div>
            <Box sx={{width:{xs:340,sm:600,lg:1300}, height:{xs:1000,sm:800,lg:650}, border: '1px solid black', ml:{xs:3,sd:5,sm:10,lg:20},mt:5,borderRadius: '16px',backgroundImage:`url(${umurava.src})`,backgroundSize:'1560px',backgroundRepeat:"no-repeat",}}>
                <Typography variant="h5" sx={{mt:55,ml:2,color:'#FFFFFF',fontSize:40}}>Umurava Propels environmental business solutions
                forward with second impact accelerotar class</Typography>
                <Typography variant="h3" sx={{ml:2,color:'#C0C0C0'}}>August 25,2022</Typography>
            </Box>
        </div>
        <Container sx={{mt:10,ml:{sd:2,sm:17,lg:28},mb:{xs:3,sm:0,lg:0}, display:'grid', gridTemplateColumns: {sm:'repeat(1,1fr)',lg:'repeat(2, 1fr)'}}}>
          {
            cards.map((card) =>{
              return <Card card={card} key={card.id} />
            })
          }
        </Container>
        <Typography variant='h3' sx={{ml:{xs:5,sm:10,lg:30},mt:8, fontSize:35, display: {xs:'block',sd:'block',sm:'block',lg:'block'}}}>More From The Newsroom</Typography>
        <Container sx= {{mt:10,ml:{sm:1,lg:28},mb:{xs:2,sm:3,lg:3}, display: {xs:'block',sd:'block',sm:'grid',lg:'grid'}, gridTemplateColumns:{sm:'repeat(2,1fr)',lg:'repeat(3, 1fr)'}}}>
          {
            cards.map((card) =>{
            return <Card2 card={card} key={card.id} />
            })
          }
        </Container>
    </div>
  )
}

export default Body