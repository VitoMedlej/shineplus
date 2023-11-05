"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import CateCard from '../CateCard/CateCard'



const collectionCars = [
    {title:'Small Touristic Cars',
    _id: 'foasfoasfjoi1j2412',
    list: [`kia Picanto`,`Hyundai Grand  I10`,'Nissan Micra',],
    category:'abc',
    price : '16$ per day',
    flip: true,
    img:`https://autophorie.de/wp-content/uploads/2017/02/kia-picanto-dritte-generation-gt-line.jpg`
},
]

const HomeProductCollection = ({products} : {products:IProduct[] | never[]}) => {
 const router = useRouter()
  return (
    <Box sx={{my:4}} className='center auto'>
           
           <Box className="flex justify-between auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
    className='sectionTitle   box'
    sx={{
 
    fontSize: {
        xs: '1.2em',
        sm: '1.4em'
    },
    padding:.5,
    fontWeight: '300'
}}>
 Browse Car By Collection
</Typography>

<Btn
onClick={()=>router.push('/collection/products')}
>
    Shop All
</Btn>
</Box>

              <Box sx={{mb:2,mt:4}} className='flex wrap gap1 justify-center'>
                  {collectionCars.map(i=>{

                      return <CateCard key={i?._id}  title={i?.title} _id={i?._id} 
                       images={i?.img}
                       list={i?.list}
                       flip={i?.flip ? true : false}
                       category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection