"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import CateCard from '../CateCard/CateCard'



const collectionCars = [
    {title:'Family Cars',
    _id: 'foasfoasfjoi1j2412',
    category:'abc',
    img:`https://images.pexels.com/photos/5998732/pexels-photo-5998732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
},
    {
        title:'Luxury SUV',
        _id: 'foasfoasfjfasfoi1j2412',
        category:'abc2',
        img : `https://images.pexels.com/photos/14445439/pexels-photo-14445439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    },
    {
    title:'Luxury Business Cars',
    _id: 'foasfoasfjoi1124214j2412',
    category:'abc3',
    img : `https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=750`
}]

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
                       category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection