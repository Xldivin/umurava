import React from 'react'
import { H3,H5 } from "components/Typography";
import umurava1 from '../../../public/assets/images/umurava/umurava.png';
import Container  from '@mui/material/Container';
import { Card as Cards } from '@mui/material';

function Card({card}:any) {
  return (
    <>
        <Cards sx={{width:{xs:350,sm:450,lg:450}, height:450, mt:5, border: '1px solid black',borderRadius: '16px', backgroundColor:"#F0F0F0",backgroundImage:`url(${umurava1.src})`,backgroundSize:'500px',backgroundRepeat:"no-repeat" }}>
          <H5 sx={{fontSize:20,mt:35,ml:2}}>{card.Header}</H5>
          <H3 sx={{mt:2,ml:2,color:'#C0C0C0'}}>{card.date}</H3>
        </Cards>
    </>
  )
}

export default Card