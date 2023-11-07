"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items =  [
      {
        title:'Four Seats',
        icon:`https://cdn-icons-png.flaticon.com/512/6165/6165835.png`,
      },
      {
        title: "AirBags",
        icon: "https://cdn-icons-png.flaticon.com/512/2384/2384971.png",
      },
      {
        title: "WIFI",
        icon: "https://cdn-icons-png.flaticon.com/512/4305/4305650.png",
      },
      {
        title: "Air Condition",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6w7FUtOfKnpxxPmLYy4BPJXpQH-hEh9RE_PYy_CY&s",
      },
      {
        title: "Baby Car Seat",
        icon: "https://cdn-icons-png.flaticon.com/512/3366/3366746.png",
      },
     
    ]
  return (
    <Box sx={{py:4,mx:{xs:1,sm:1.5,md:2}}}>
       <Divider/>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex row' sx={{
                    py:3,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'50px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">

                    <Typography className='' sx={{fontSize:{xs:'.89em',sm:'1.19em'},fontWeight:500}}  component={'h1'}>{i.title}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>
        <Divider/>

    </Box>
  )
}

export default Perks