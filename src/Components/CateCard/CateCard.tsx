"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'



const CateCard = ({
    title,
    images,
    category,
    _id,
} : {
    _id: string,
    title: string,
    images: string,
    category: string,
}) => {
    const router = useRouter()
    const {addToCart}= useCart()

    return (
        <Box
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            minWidth: {xs:'95%',sm:'30%'},
            width:  {
                    xs: '99%',
                    sm: '49%',
                    md : '32%'
                }
            
        }}>
            <Box 
            className='cursor auto'
               onClick={() => router.push(`/rental/${category}`)}
            sx={{
                width:{xs:'98%',sm:'100%',md:'100%'},
                height: {xs:'400px',sm:'450px',md:'500px'}
            }}>
                <img
                    src={images
                    
                    }
                    alt="Prdouct image"
                    className="img cover "/>
            </Box>
            
            <Box 
            sx={{
                px: .95,
                mt:1.5,
            }}>  <Typography
            className='limited cursor center text-center '

            onClick={() => router.push(`/rental/${category}`)}

                    sx={{
                    fontSize: {xs:'1.1em',sm:'1.35em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
        
               
              
              
            </Box>
        </Box>
    )
}

export default CateCard