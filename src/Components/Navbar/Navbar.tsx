"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {AiOutlinePhone} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import { Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'

import NavButtom from './NavButtom';
import {  useDrawerContext } from '@/context/Contexts';



export const categories = [
    'Small Cars',
    'Business Cars',
    'Luxury Business Cars',
    'SUVs',
    '2 Door Cars'
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    

    const router = useRouter()
    // const localCart = [1]
   
   

    return ( <>
     <Box
     id='navy'
    className='center auto     flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'black',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{
                transform:'translateY(1px)',
                boxShadow:'none',

                background:'black',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
               
            <Toolbar
     id='navy3'

    className='center relative  flex  w100  auto'

                sx={{
                
                    background:'black',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        sm: '1em'
    },
    height : {xs:'100px'},
    width:{xs:'150px',sm: '120px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/1520c0d1-bd9e-4be7-9f74-255a3e5bc352/Blacklogo.png`}
        alt="Al halabi  logo"/>
</Box>
</Link>
                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
                             
                             {/* <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'white',

                            // margin: '0.1em',
                        }}>
                            {text('العربية','English')}
                        </Btn> */}
                        <IconButton
                            onClick={() => router.push('/collection/products')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'white'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <AiOutlinePhone color='white'/>
                            {/* </Badge> */}
                            {/* <Typography>
                                Cart
                            </Typography> */}
                        </IconButton>
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'white',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='white'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'white'
                        }}>
                     
                            <AiOutlinePhone color='white'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
<NavButtom/>

  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
{/* 
                               <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'white',

                            // margin: '0.1em',
                        }}>
                            {text('English','Arabic')}
                        </Btn> */}
                        <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'white'
                        }}>

                                <AiOutlineCar color='white'/>
                          
                        </IconButton>
                        <IconButton
                        onClick={() => router.push('/collection/products')}
                            sx={{
                            color: 'white'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}
                                <AiOutlinePhone color='white'/>
                            {/* </Badge> */}
                          
                            </IconButton>



                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'white',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='white'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}