"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React, { useState } from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'
import { FaTumblrSquare } from 'react-icons/fa'



const CarCard = ({
    title,
    images,
    flip,
    list,
    cars,
    price,position,
    _id,
} : {
    _id: string,
    title: string,
    list : string[],
    images: string,
    cars: any,
    flip?:boolean,
    price : string,
    position ?: string,

}) => {
    console.log('cars: ', cars);
    const router = useRouter()
    const {addToCart}= useCart()
    const [hovered,setHover] = useState(false)

 
    return (
        <Box
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className='flex wrap row  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:8,
            maxWidth:{md:'400px'},
            minWidth: {xs:'95%',sm:'100%'},
            width: 
                     '98%',
                   
               
            
        }}>
           {cars && cars.img.map((i:any,idx:number) =>{
        
                if (!i) return
            return <Box 
            className='cursor auto relative'
            //    onClick={() => router.push(`/rental/${encodeURIComponent(title)}`)}
            sx={{
                
                width:{xs:'98%',sm:'500%',md:'48%'},
                height: {xs:'400px',sm:'450px',md:'500px'}
            }}>
                <img
                style={{  
                    objectPosition : position ? position : 'initial', 
                    transform: flip? 'scaleX(-1)' : ''}}
                    src={i
}
                    alt="Prdouct image"
                    className="img cover "/>
               
            </Box>})}
            
            <Box 
            sx={{
                px: .95,
                mt:1.5,
                flex:1,width:'100%'
            }}>  <Typography
            className='limited cursor center text-center '

            onClick={() => router.push(`/rental/${encodeURIComponent(title) }`)}


                    sx={{
                    fontSize: {xs:'1em',sm:'1.15em'},
                    fontWeight: '500'
                }}>
                    {title} - Starting {price}
                </Typography>
        
               
              
              
            </Box>
        </Box>
    )
}

export default CarCard


{/* <Box className="absolute center auto flex trans2  items-center" sx={{pointerEvent:'none',opacity:hovered ? '.8' : '0',width:'100%',zIndex:132,height:'100%',background:'black',top:0,right:0}}>
<Box>

 <Typography className='' sx={{fontSize:'1.5em',fontWeight:600,pb:1,height:'100%',color:'white',zIndex:24142}}>
         {car.name}
     </Typography>

  
 

</Box>

 </Box> */}