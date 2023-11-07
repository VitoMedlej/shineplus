"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {Box, Typography} from '@mui/material';


const SwiperCarousel = ({selectedCars, delay} : {
    selectedCars: any,
    delay?: number
}) => {
    console.log('selectedCars2: ', selectedCars);

    return (
        <Box
            sx={{
            py: {
                xs: '.5em',
                sm: '2em'
            },
            width: '100%',
            maxWidth: 'lg',
            margin: '0em auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
  <Swiper
            pagination={{
                clickable: true,
              }}
             
              autoplay={{
                delay:  delay || 1000,
                disableOnInteraction: true,
              }}
              navigation={false}
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[FreeMode,Autoplay, Pagination]}
            breakpoints={{
                200 : {
                    slidesPerView:1,
                },
                540: {
                    slidesPerView: 1,
                  },
                  
                  1024: {
                    slidesPerView: 1,
                  },
                  1640: {
                    slidesPerView: 1,
                  },
                
               
        }}
        
        >

                {selectedCars?.cars  && selectedCars?.cars.map((i : any,idx:number) => {
                    console.log('i: ', i);
                    if (!i) 
                        return
                    return <SwiperSlide
                    
                        style={{
                            
                        marginRight: '0 !important'
                    }}
                        key={i._id}>
                        {/* <ProductCard
                        inStock={item?.inStock}
                            height={'400px'}
                            width='100%'
                            title={item.title}
                            images={item.images}
                            price={item.price}
                            _id={item._id}
                            category={item.category}/> */}
                    {/* <CarCard
           

                _id={i._id}
                title={i.title}
                price={i.price}

                cars={i} list={i.list} images={''}/> */}
                    <Typography className='center flex auto' sx={{pb:1,fontSize:'1.25em'}}>
                        {i?.name}
                    </Typography>
                <Box sx={{py:{xs:1}}} className="flex gap gap1 wrap">
         {i?.img.map((x:any)=>{ return  <Box 
            className='cursor auto relative'
            //    onClick={() => router.push(`/rental/${encodeURIComponent(title)}`)}
            sx={{
                
                width:{xs:'98%',sm:'500%',md:'48%'},
                height: {xs:'300px',sm:'450px',md:'400px'}
            }}>
                <img
                style={{  
                 }}
                    src={x
}
                    alt="Prdouct image"
                    className="img cover "/>
               
            </Box>})}
            </Box>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>

    );
};

export default SwiperCarousel