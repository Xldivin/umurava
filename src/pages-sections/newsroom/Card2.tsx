import React from 'react'
import { Card as Cards } from '@mui/material';
import umurava1 from '../../../public/assets/images/umurava/umurava.png';
import Box from '@mui/material/Box';
import { H3, Small,H5 } from "components/Typography";
import  { Paragraph } from 'components/Typography';
import { FlexBox,FlexRowCenter } from "components/flex-box";

function Card2({card}:any) {
  return (
    <>
      <Cards sx={{width:{sm:320,lg:380},display:{xs:'none',sd:'none',sm:'block',lg:'block'}, height:450, mt:5, border: '1px solid black',borderRadius: '16px', backgroundColor:"#F0F0F0",backgroundImage:`url(${umurava1.src})`,backgroundSize:'500px',backgroundRepeat:"no-repeat", }}>
        <H5 sx={{fontSize:20,mt:35,ml:2}}>{card.Header}</H5>
        <H3 sx={{mt:2,ml:2,color:'#C0C0C0'}}>{card.date}</H3>
      </Cards>
      <FlexRowCenter sx={{display:{xs:'flex',sd:'flex',sm:'none',lg:'none'}}}>
        <Cards sx={{width:100,height:70,mt:2, backgroundImage:`url(${umurava1.src})`,backgroundSize:'200px',backgroundRepeat:"no-repeat"}}></Cards>
        <H3 sx={{mt:2,ml:2,fontSize:10}}>{card.paragraph}</H3>
      </FlexRowCenter>
    </>
  )
}

export default Card2