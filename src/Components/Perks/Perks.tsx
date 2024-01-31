"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items = [
      {
        title: "Premium Car Wash",
        icon: "https://www.svgrepo.com/show/237130/car-wash.svg",
        description: "Experience a meticulous premium car wash service that leaves your vehicle sparkling inside and out.",
      },
      {
        title: "Expert Interior Detailing",
        icon: "https://www.svgrepo.com/show/286836/steering-wheel-car.svg",
        description: "Indulge in our expert interior detailing to rejuvenate your car's interior, ensuring a fresh and comfortable driving experience.",
      },
      {
        title: " Paint Correction",
        icon: "https://www.svgrepo.com/show/284377/paint-brush-art-and-design.svg",
        description: "Trust our professionals for paint correction, bringing back the shine and luster to your car's exterior with precision and care.",
      },
      {
        title: "Headlights Restoration",
        icon: "https://www.svgrepo.com/show/501880/light-bulb.svg",
        description: "Enhance visibility and aesthetics with our headlights restoration service, ensuring safety and a polished look.",
      },
   
    ];
  return (
    <Box sx={{pt:{xs:8,sm:12},mx:{xs:1,sm:1.5,md:2}}}>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex col text-center' sx={{
                    py:3,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">

                    <Typography className='clr2' sx={{pt:1,fontSize:{xs:'.89em',sm:'1.19em'},fontWeight:500}}  component={'h1'}>{i.title}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks