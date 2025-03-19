"use client"
import {  Container,Box, Grid, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Btn from '@/Components/Btn/Btn'
import {CiLocationOn} from 'react-icons/ci'
import Perks from '../Perks/Perks';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";




const Index = () => {
 
  const form :any = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
      const [Phone, setPhone] = useState('')
const [FullName, setFullName] = useState('')
const [Message, setMessage] = useState('')
let message = `Hello my name is ${FullName}. My phone number is ${Phone}. I am interested in your services.`;

let url = `https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=${encodeURIComponent(message)}`;
  const sendMessage = async(e : any) => {


    e.preventDefault();
    if (!form.current) 
    return;
  
  if ( !FullName || !Phone || !Message ) {
    setStatus(400)
    return;
  }
  window.open(url);

//     const req = await emailjs.sendForm(`service_i9h8mw5`, 'template_hml9w5k', form.current, 'YUsR8yA3kMr0Gmz1j')
//     const res = await req
//     console.log('res: ', res);
//     setStatus(res ? res?.status : 400)
//     if (res?.status && form?.current) {
//       form?.current?.reset()
//       setFullName('')
//     setPhone('')
//     setMessage('')
// }
};

  return (
    <>
 

 <Perks/>

  
    <Grid id='contactsection' container maxWidth='lg'  className='auto'  sx={{pt:20,pb:5}}>
    <Box className='flex auto w100'>
       
                {/* <Divider></Divider> */}
        </Box>
      
   
        <Grid sx={{mb:{xs:5,sm:0}}} item xs={12} sm={6} md={5} >
    <Container >
        <Typography component='h1' className='clr2' sx={{fontSize:{xs:'1.75em'},my:3,fontWeight:'800'}}>
        Contact Information:
        </Typography>
  
  <a className='flex auto  items-center align-center gap gap1 black' href='https://wa.me/+96103545717' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
    +961 03 545 717
        </Typography>
  </a>

  <a className='flex auto  items-center align-center gap gap1 black' href='https://www.instagram.com/shineplus_carspa/' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
    Instagram
        </Typography>
  </a>

  <a className='flex auto  items-center align-center gap gap1 black' href='https://www.facebook.com/shinepluscarspa/' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
    Facebook
        </Typography>
  </a>
  <a className='flex auto  items-center align-center gap gap1 black' href='' target='_blank' rel='noopener'>
  <CiLocationOn/>
        <Typography sx={{my:2,fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
        Lebanon - Dekwaneh
        </Typography>
  </a>
  

    </Container>
        </Grid> 

        <Grid sx={{mt:{xs:2,sm:0}}} className='auto col center flex' item xs={12} sm={8} md={5.5}>
          <Typography component='h1' sx={{color:'green',fontWeight:'500',textAlign:'center'}} className='p'>{status === 200 ? 'Message Sent Successfully!' : ""}</Typography>
            <Box ref={form} onSubmit={(e : any)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          margin : '0 auto',
          maxWidth:'sm',
          px:'1em',
            
         }} className='flex space-between wrap'>
          <Typography component='p' sx={{width:'100%',fontWeight:'600',fontSize:'1.12em'}} className='h1'>Leave us a message</Typography>
               <TextField 
              
              value={FullName}

              onChange={(e)=>setFullName(e?.target?.value)} 
              name={'FullName'} sx={{width:'99%',py:1}} variant='outlined' placeholder='Full Name'/>
           {/* <DatePicker name='StartDate' selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
           {/* <DatePicker  name='EndDate' selected={endDate} onChange={(date:Date) => setEndDate(date)} /> */}
            {/* <DatePicker
  label="Controlled picker"
  value={date1}
  onChange={(newValue) => setDate2(`${newValue}`)}
/>

<DatePicker
  label="Controlled picker"
  value={date2}
  onChange={(newValue) => setDate2(`${newValue}`)}
/> */}
             
              {/* <TextField name={'CarName'} onChange={(e)=>setEmail(e?.target?.value)} variant='outlined' sx={{width:'99%',py:1}} type='text' placeholder='Car Type'/> */}
              <TextField name={'Phone'} 
              value={Phone}
            type='number'
              onChange={(e)=>setPhone(e?.target?.value)} 
              variant='outlined' sx={{width:'99%',py:1,}} placeholder='Phone Number'/>
              <TextField 
              value={Message}
              onChange={(e)=>setMessage(e?.target?.value)} 
              
              name={'Message'} multiline={true} variant='outlined' rows={4}  sx={{width:'99%',py:2}} placeholder='Message'/>
              <Btn
submit
   
>
                <Typography>
                    Send Message
                </Typography>
              </Btn>
            </Box>
        </Grid>
       
    </Grid>


   
    </>
  )
}

export default Index