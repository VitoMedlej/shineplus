"use client"
import React from 'react'
import {Box, Container,  Pagination, Typography} from "@mui/material"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { server } from "@/Utils/Server"
// import FilterSection from './CollectionPage/FilterSection/FilterSection'
import { IProduct } from '@/Types/Types'
// import BreadCrumb from './BreadCrumb/BreadCrumb'
import ProductCard from './ProductCard/ProductCard'
import SearchInput from './Navbar/SearchInput'

import { collectionCars } from './HomeProductCollection/HomeProductCollection'
import CarCard from './CarCard/CarCard'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

const Preloader2 = ({data,totalPages}:any) => {
   
    // const [pageNB,setPageNB] = useState(0)
    const router = useRouter()
    const [products,setProducts] = useState<any>()
    // useEffect(() => {
      
        // if (!products) {
            // setProducts(data)
        // }
      
    // }, [data])
    
    const {collection} = useParams() 
    console.log('category: ', collection);
    const searchParams = useSearchParams();
    const type =  searchParams.get('type')
    const subCategory   =  searchParams.get('subCategory')
 

    const selectedCars : any = collectionCars?.find(x=>  x?.title?.toLocaleLowerCase() === decodeURIComponent(collection.toLocaleLowerCase()) )    
    console.log('selectedCars: ', selectedCars);

  


    // const {type} = useSearchParams();




    const fetchData = async (val:number) => {
    const url =  `/api/get-cate?category=${collection ? collection : 'collection'}&subCategory=${subCategory ? encodeURIComponent(subCategory) : null}&page=${Number(val - 1) || 0}&type=${type ? type : null}`  ;
    const req = await fetch(`${server}${url}`,{cache:'no-store', next: { revalidate: 0 }})
    const res = await req.json()
        
            setProducts(res?.data?.products ? res?.data?.products : [])
            totalPages = res?.data?.totalPages;
            if (window) {
                window.scrollTo(0,0)
            }

      };
  
    // const handlePagination = async (val:number) => {
    //     // router.replace(`${server}/${category ?category : 'collection'}/products?page=${val ? val : 0}`)
    //     fetchData()
    // }
    // const [data,setData] = useState< {
    //     products: IProduct[] | never[] ; 
       
    // }>({
    //     products : [],
       
    //   })
  return (
    <Container sx={{mt:2}} disableGutters maxWidth='lg'>
    {/* <Box
        sx={{
        width: '100%',
        minHeight: '100px'
    }}>
    </Box> */}
    {/* <SearchInput/> */}
    
    <Typography sx={{fontWeight:700,fontSize:'3em',pt:8,pb:0}}  className='auto text-center align-center center  flex'>
    {selectedCars?.title}
        </Typography>
        <Typography sx={{fontWeight:300,fontSize:'1.25em',pt:0,pb:2}}  className='auto center  flex'>
    Starting {selectedCars?.price}

        </Typography>
    {/* <BreadCrumb></BreadCrumb> */}
   

    <Box className='flex wrap' sx={{
        px: 1
    }}>
        <HomeProductsCarousel selectedCars={selectedCars} Collectiontitle={''} delay={0}/>
        {/* {selectedCars && selectedCars?.cars.length > 0 ? selectedCars?.cars.map((i:any) => {
            return <CarCard
                key={i?._id}

                _id={i._id}
                title={i.title}
                price={i.price}

                cars={i} list={i.list} images={''}/>
        })
: <Typography sx={{fontSize:'1.1em',py:4,textAlign:'center'}}>
We could not find any cars, try another category.
</Typography>} */}
    </Box>
    <Pagination
        onChange={(e, val) => {
            fetchData(val)
    }}
        sx={{
        my: 3
    }}
        count={totalPages > 1 
        ? totalPages
        : 1}
        className='flex center '/>


</Container>
  )
}

export default Preloader2