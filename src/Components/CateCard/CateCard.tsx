"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React, { useState } from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'
import { FaTumblrSquare } from 'react-icons/fa'



const CateCard = ({
    title,
    images,
    flip,
    list,
    price,position,
    _id,
} : {
    _id: string,
    title: string,
    list : string[],
    images: string,
    flip?:boolean,
    price : string,
    position ?: string,

}) => {
    const router = useRouter()
    const {addToCart}= useCart()
    const [hovered,setHover] = useState(false)

 
    return (
        <Box
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            maxWidth:{md:'400px'},
            minWidth: {xs:'95%',sm:'30%'},
            width:  {
                    xs: '99%',
                    sm: '49%',
                    md : '32%'
                }
            
        }}>
            <Box 
            className='cursor auto relative'
               onClick={() => router.push(`/rental/${encodeURIComponent(title) }`)}
            sx={{
                
                width:{xs:'98%',sm:'100%',md:'100%'},
                height: {xs:'400px',sm:'450px',md:'500px'}
            }}>
                <img
                style={{  
                    objectPosition : position ? position : 'initial', 
                    transform: flip? 'scaleX(-1)' : ''}}
                    src={images
                    
                    }
                    alt="Prdouct image"
                    className="img cover "/>
                    <Box className="absolute center auto flex trans2  items-center" sx={{pointerEvent:'none',opacity:hovered ? '.8' : '0',width:'100%',zIndex:132,height:'100%',background:'black',top:0,right:0}}>
                   <Box>

                    <Typography className='' sx={{fontSize:'1.5em',fontWeight:600,pb:1,height:'100%',color:'white',zIndex:24142}}>
                            {title}
                        </Typography>

                        {
                            list.map(i=>{
                                return    <Typography  sx={{color:'white'}}>
                                {i}</Typography>
                            })
                        }
                         <Typography  sx={{color:'white'}}>
                              OR similar<br/>
                        <br/>

                              Starting {price}
                              </Typography>
      
</Box>

                    </Box>
            </Box>
            
            <Box 
            sx={{
                px: .95,
                mt:1.5,
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

export default CateCard