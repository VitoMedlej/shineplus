"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img : `https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`},
        {img:`https://images.unsplash.com/photo-1653813893853-be3e6ecfe061?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
     ])
     const redir = () => {
        router.push('/collection/products')
        console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
  const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
            maxHeight:{sm:'90vh',md:'700px',lg:'750px'},
            margin: '0 auto',
         
            height : {xs:'100vh',sm:'550px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

                            </Box>
                            <Box 
                            className='auto'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'650px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                
                                sx={{color:'white',fontSize:{xs:'2.65em',sm:'3.1em',md:'3.65em',lg:'4em'},fontWeight:900}}>
                             
                                Al Halabi For Business Cars And More 
                                </Typography>
                                <Typography 
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                    Hundreds of the best cars to rent today at Al Halabi! 

                                </Typography>
                                <Box className="flex">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='bg white borderColor' sx={{mt:3}}>
                               VIEW ALL CARS

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3