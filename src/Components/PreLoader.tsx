"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()
  const textsArray = [
    {
      id: 1,
      title: `Exceptional Customer Service`,
      desc: text('Our dedicated team is here to assist you at every step of your rental journey. We prioritize your satisfaction and convenience.', 'مكملاتنا مصنوعة فقط من أرقى المكونات الطبيعية، مما يضمن لك الحصول على أفضل النتائج دون أي مواد كيميائية ضارة أو مواد إضافية.')
    },
    {
      id: 2,
      title: text('Flexible Rental Options', 'النقاء والفعالية'),
      desc: text(`Whether you need a car for a day, a week, or longer, we offer flexible rental durations to suit your schedule. You're in control of your rental experience with Al Halabi.`, 'نحن نختار مكوناتنا بعناية بسبب نقاوتها وفعاليتها، مما يضمن لك الحصول على أفضل النتائج من مكملاتنا.')
    },
    {
      id: 3,
      title: text('Competitive Pricing', 'صياغة خبيرة'),
      desc: text(`We offer affordable rates without compromising on the quality of our service. Enjoy the best value for your money when you choose Al Halabi.`, 'تم صياغة مكملاتنا بخبرة من قبل فريق من المحترفين ذوي الخبرة، مما يضمن لك الحصول على أفضل النتائج في كل مرة.')
    },
    {
      id: 4,
      title: text('Diverse Selection of Vehicles', 'قيمة عظيمة'),
      desc: text('Our extensive fleet includes business cars, SUVs, and family cars, ensuring you find the right vehicle for your specific needs.', 'تقدم مكملاتنا قيمة عظيمة للمال، حيث توفر لك أعلى جودة من المكونات بسعر معقول.')
    }
  ];
  

  return (
    <Box >
      <MainCarousel resImages={resImages}/>
    
    <Container sx={{maxWidth:'lg'}}>
    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pt:{xs:8,sm:10},pb:1,maxWidth:'800px',}}>
        Our Services
      </Typography>
      <Typography sx={{fontWeight:900,fontSize:'2.5em',maxWidth:'800px',fontStyle:'italic',textTransform:'uppercase'}}>
      WE OFFER A WIDE RANGE OF CAR SERVICES
      </Typography>
      <Box sx={{mt:6}} className='flex wrap justify-around'>
          {
            [
              {
                img:`https://th.bing.com/th/id/OIP.lliqZ00MjK10WAFmjC5JagHaE7?rs=1&pid=ImgDetMain`,
                title:`Car Wash`
              },
              {
                img: `https://th.bing.com/th/id/OIP.H8AKbby4ceYx6Kc4eZAWRgHaE8?rs=1&pid=ImgDetMain`,
                title:`Exterior Treatments`
              },
              {
                title:'Interior Detailing',
                img:'https://th.bing.com/th/id/OIP.53dYrQhPXt5aeuPMQlRn2QHaE8?rs=1&pid=ImgDetMain'
              }
              ,
              {
                title:`Additional Services`,
                img:`https://th.bing.com/th/id/OIP.RPOCIvraZNZN1flU2LVpMgHaE8?rs=1&pid=ImgDetMain`
              }
            ].map(i=>{
              return <Box className='relative cursor pointer'
              onClick={()=>router.push(`/services/${encodeURIComponent(i?.title.toLowerCase())}`)}
              key={i.title} sx={{my:1,minWidth:{sm:'auto',md:'250px'},height:'300px',width:{xs:'49%',sm:'48%',md:'24%'}}}>
                <Box sx={{height:'100%'}}>

                 <img src={i.img} alt="" className="img" />
                </Box>
                <Box sx={{bottom:'15%',color:'white',left:'10%',fontWeight:'700',textTransform:'uppercase',fontSize:'1.5em',textShadow:'1px 1px 3px #0000002e'}} className="absolute">
                  {i.title}
                </Box>
              </Box>
            })
          }
      </Box>
    </Container>


        <Grid sx={{py:16,maxWidth:'lg'}} className='auto' container>
            <Grid item sm={12} md={6}>
            <Container>

            <Typography 
                                
                                sx={{fontSize:{xs:'1.55em',sm:'2.1em',md:'2.65em',lg:'2.5em'},fontWeight:'900'}}>
                Join Our Maintenance
                  Program Join Today
                </Typography>
                <Typography 
                                className=''
                                sx={{fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                We are pleased to offer our esteemed clients an opportunity to join our premium maintenance program. Our program is designed to cater to your individual needs with a choice of weekly, bi-weekly, or monthly plans.
                </Typography>
                <Btn
                             
                                
                                className='bg white borderColor ' sx={{mt:3,mb:{xs:3,sm:0}}}>
                               VIEW ALL CARS

                                </Btn>
                                </Container>

            </Grid>
            <Grid item sm={12} md={6}>
              <Box>
                <img src="https://ucarecdn.com/3850c81c-5402-4bc0-9513-eeee979f3c3e/img1.PNG" alt="" className="img" />
              </Box>
            </Grid>
        </Grid>
   
   
          <Box className='relative' sx={{height:{xs:'900px',sm:'800px'}}}>
          <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.65}} className="absolute">

</Box>
            <Box sx={{height:{xs:'900px',sm:'800px'}}}>
              <img src="https://th.bing.com/th/id/R.a255b20553a97dd7b0bef0b05d8a1c62?rik=drpYYpUzkaBFUg&riu=http%3a%2f%2fwww.hdwallpaperslife.com%2fwp-content%2fuploads%2f2019%2f05%2fbmw_m5.jpg&ehk=oceHuCqD1GxxA1wWsDZI2o9u97DbiNOF5KXh1OBTa6Y%3d&risl=&pid=ImgRaw&r=0" alt="" className="img" />
            </Box>


            <Box 
                            className='auto center text-center'
                            sx={{
                              maxWidth: '95%',
    width: 'max-content',
                                top:'5%',
                                right:'50%',
                                // px:{xs:4,sm:5,md:6},
                                transform:'translateX(50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                  <Typography sx={{fontSize:'2em',pt:1,textTransform:'uppercase',fontWeight:900,color:'white'}}>
                                  a complete service experience
                                  </Typography>

                                  <Box sx={{mt:4,px:4,py:4,borderRadius:'4px',border:'1px solid white'}}>
                                  <Typography className='clr2' sx={{pb:1,fontSize:'1.8em',textTransform:'uppercase',fontWeight:600,color:'white'}}>
                                  Full Treatment Package:
                                  </Typography>
                                  <Typography sx={{py:2,fontSize:'1.2em',whiteSpace:'pre-wrap',pt:1,textTransform:'uppercase',fontWeight:700,color:'white'}}>
                                  {`Compact: $200
Sedan: $225
SUV: $250`}
                                    </Typography>
                                  <Typography sx={{color:'white',whiteSpace:'pre-wrap'}}>
                              {`  ✓ Car Wash
✓ Engine Bay Treatment
✓ Headlights Restoration
✓ Full Interior Detailing
✓ Paint Correction with Ceramic Protection (1 Year Warranty)
✓ Rain Repellent Full Windows
✓ Door Edge Guard
✓ AC Bacteria Treatment (One Shot and Foam)`}
                                  </Typography>
                                  <Btn className='' sx={{mt:'1em',mx:'auto'}}>
                                    BOOK NOW
                                  </Btn>
                                  </Box>
                                </Box>
          </Box>



                              <Container sx={{maxWidth:'lg'}}>
                                    {
                                      [].map(i=>{
                                        return <Box sx={{height:{xs:'48%',sm:'32%'},width:{xs:'48%',sm:'32%'}}}>
                                              <img src="" alt="" className="img" />
                                        </Box>
                                      })
                                    }
                              </Container>


  </Box>
  )
}

export default PreLoader