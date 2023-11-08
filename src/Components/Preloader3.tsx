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
        {img:`https://ucarecdn.com/c582441b-9ce1-459f-b4a6-b6c92a26da66/2103880.jpg`},
        {img : `https://ucarecdn.com/674fcd0e-3990-403d-84de-ef8f6b6351b9/peakpx2.jpg`},
        {img:`https://ucarecdn.com/4af6db3a-3c96-45b7-b247-3a4971f2f8f8/1600x9002605155mercedeshdimageforwallpaper.jpg`},
        {img:`https://ucarecdn.com/4990a185-a2ea-43fb-ac9b-c8b7a00fe0d5/download.jfif`}
     ])
     const redir = () => {
        router.push('/rental/collection')
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