"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'
import Perks from '../Perks/Perks'
const ProductCollection = ({sx,delay,Collectiontitle,selectedCars,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    selectedCars: any[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    
    const router = useRouter()

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'4em',
            mb:'3em',
            ...sx,
        }}>
            <Box className="flex justify-between" sx={{width:'100%'}}>

            <Typography
                className='sectionTitle   box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                padding:.5,
                fontWeight: '500'
            }}>
              {Collectiontitle}
            </Typography>
            
            <Btn
            onClick={()=>router.push('/')}>
                View All
            </Btn>
            </Box>
            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                selectedCars={selectedCars}/>
            </Box>
            <Box>
                <Perks/>
            </Box>

   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection