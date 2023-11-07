"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import CateCard from '../CateCard/CateCard'



const collectionCars = [
    {title:'Small Touristic Cars',
    _id: 'foasfoasfjoi1j2412',
    list: [`kia Picanto`,`Hyundai Grand  I10`,'Nissan Micra'],
    cars : [
        {
            name: "Hyundai Grand I10",
            img: [
              "https://ucarecdn.com/0c640502-00bc-4d38-9fb0-b87596b4876a/2023hyundaigrandi10niosfacelift05removebgpreview.png",
              "https://ucarecdn.com/ac3b65f6-7e1b-4f61-b368-e54dc6ece617/92hyundaii10inside.webp"
            ]
          },
          {
            name: "Kia Picanto",
            img: [
              "https://ucarecdn.com/94667a60-5f11-4088-9192-c1c6659610ee/161701d577f8f98cdbaa1f98cfd1317a1.jpg",
              "https://ucarecdn.com/6c893cb4-81ae-4cda-b980-dba2e7bcee35/kiapicantointerior.jpg"
            ]
          },
          {
            name: "Nissan Micra",
            img: [
              "https://ucarecdn.com/d5810440-682a-44f9-9ae3-e4f9ef1e1c68/nissanmicrainside.jpg",
              "https://ucarecdn.com/af616624-6479-474b-bc09-8830149722cb/Addasubheading7.png"
            ]
          }

    ],
    position: 'right',
  
    price : '16$ per day',
    flip: true,
    img:`https://autophorie.de/wp-content/uploads/2017/02/kia-picanto-dritte-generation-gt-line.jpg`
},


{
    _id: 'KFOPASKOFP1420I214', 
    title: "Medium Economic Cars",
    price: "20$ Per Day",
    position: 'left',
    list: ["Kia Rio", "Nissan Sunny", "Toyota Yaris", "Suzuki Ciaz"],
    cars: [
        { name: "Kia Rio", img: [`https://ucarecdn.com/07cec2ba-1445-453d-97c0-61b7fca608c7/KiaRio2023.jpg`,`https://ucarecdn.com/9534be0b-ab4e-45c5-8b97-30ca29810797/2023_kia_rio_inside1.jpg`] },
        { name: "Nissan Sunny", img: [`https://ucarecdn.com/04f09149-69cf-4a21-93e5-df2858103353/nissansunny1.jpg`,`https://ucarecdn.com/93656c84-8043-4890-8240-61a972f63247/nissansunnyinside1.jpg`] },
        { name: "Toyota Yaris", img: [`https://ucarecdn.com/932c7def-17d4-4ba2-9bce-729e96a98ccf/toyotayaris.webp`,`https://ucarecdn.com/9d15b31e-419e-4022-8eaa-122f120d952d/toyotayarisinside1.jpg`] },
        { name: "Suzuki Ciaz", img: [`https://ucarecdn.com/ae0c135e-ee8d-403f-a299-b752c96706ac/SuzukiCiaz202321.jpg`,`https://ucarecdn.com/d23c62da-c24d-49b8-ac6c-8415e605a884/ciasinterior.jpg`] },
      ],
    img:`https://www.armanirentacar.com/wp-content/uploads/2019/07/Sunny.jpg`

  },
  
{
    _id: 'asfasf142124', 
    title: "Compact Family Cars",
    price: "25$ Per Day",
    position: 'left',
    list: ["Hyundai Elantra", "Toyota Corolla", "Toyota Raize", `kia Cerato `,"Toyota Veloz"],
    
    img:`https://www.motortrend.com/uploads/2022/07/2023-Hyundai-Elantra-Hybrid-Limited-4.jpg?fit=around%7C875:492.1875`

  },
  {
    _id: 'asfasf142124', 
    title: "Business SUV Cars",
    price: "45$ Per Day",
    position: 'right',
    list: ["Nissan Xtrail", "Toyota Urban Cruiser", "Hyundai Tucson    ", `Renault Koleos `,"Chevrolet Captiva",`kia Sportage
    `],
    flip:true,
    img:`https://topauto.co.za/wp-content/uploads/2023/04/2023-Toyota-Urban-Cruiser-Header.jpg`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: "Family SUV Cars",
    price: "60$ Per Day",
    position: 'left',
    list: [    "Hyundai Santa Fe",
    "Kia Sorento",
    "BMW X3",
    "Nissan Rogue",
    "Nissan Pathfinder"],

    img:`https://www.motortrend.com/uploads/2022/04/2023-Nissan-Pathfinder-Rock-Creek-22.jpg?fit=around%7C875:492.1875`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: "Luxury SUV Cars",
    price: "125$ Per Day",
    position: 'right',
    list: [
        "BMW X5",
        "BMW X6",
        "Audi Q7",
        "Mercedes G Class",
        "Mercedes CLE Class",
        "Chevrolet Tahoe",
        "Cadillac Escalade",
        "GMC Yukon",
        "Range Rover Sport",
        "Range Rover Vogue",
        "Range Rover Defender",
        "Nissan Patrol",
      ],
      flip:true,
    img:`https://ucarecdn.com/22465f0c-c5a1-4d9e-90b1-297440bdf98d/rangeroverdefinder.webp`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: " Luxury Business Cars",
    price: "175$ Per Day",
    position: 'center',
    list: [
        "Mercedes S Class",
        "Audi A8",
        "BMW 735",
        "Jaguar XJ",
       
      ],
      flip:true,
    img:`https://assets-global.website-files.com/5df711f1f373c87eede86c3b/63dd6e862daed811c46ad80a_2023%20Audi%20S8%20Dealer%20Header%201440x650.jpg`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: "Luxury Family Salon Cars",
    price: "125$ Per Day",
    position: 'right',
    list: [
        "Audi A6",
        "BMW 500",
        "Mercedes C Class",
        "Mercedes E Class",
       
      ],
      flip:true,
    img:`https://ucarecdn.com/c7016a96-fe53-4df1-8fda-f181261b3c9f/bmw500.jpg`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: "Luxury Van",
    price: "100$ Per Day",
    position: 'left',
    list: [
        " Hyundai H1",
        "Mercedes V Class",
      
       
      ],
    img:`https://ucarecdn.com/d4747151-56df-4d24-964a-1604d5773caf/mercedesvclass.jpg`

  }
 ,
  {
    _id: 'asfasf2412fasfasf', 
    title: " Convertible Cars",
    price: "150$ Per Day",
    position: 'left',
    list: [
        "  Chevrolet Camaro",
        "Mercedes E Class",`BMW 300`
      
       
      ],
    img:`https://ucarecdn.com/d4747151-56df-4d24-964a-1604d5773caf/mercedesvclass.jpg`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: "Pullman Bus",
    price: "200$ Per Day",
    position: 'left',
    list: [
       `Bus 28 Packs`,
       `Bus 32 Packs`,
       `Bus 36 Packs`,
       `Bus 50 Packs`,
      
       
      ],
    img:`https://ucarecdn.com/d4747151-56df-4d24-964a-1604d5773caf/mercedesvclass.jpg`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: " Wedding Services - Wedding Cars",
    price: "",
    position: 'left',
    list: [
     ` Jaguar XF`,
     ` Mercedes S Class`,
     `Jaguar XJ`,
     `Mercedes E Class`,
      `Chrysler`,
      `Mercedes Convertible`,
      `Classic Cars`,
      `Limousine`,
      
      `Wedding Planner`
      
       
      ],
    img:`https://ucarecdn.com/d4747151-56df-4d24-964a-1604d5773caf/mercedesvclass.jpg`

  }
  

 
  


 

  

  
  



  







]

const HomeProductCollection = ({products} : {products:IProduct[] | never[]}) => {
 const router = useRouter()
  return (
    <Box sx={{my:4}} className='center auto'>
           
           <Box className="flex justify-between auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
    className='sectionTitle   box'
    sx={{
 
    fontSize: {
        xs: '1.2em',
        sm: '1.4em'
    },
    padding:.5,
    fontWeight: '300'
}}>
 Browse Car By Collection
</Typography>

<Btn
onClick={()=>router.push('/collection/products')}
>
    Shop All
</Btn>
</Box>

              <Box sx={{mb:2,mt:4}} className='flex wrap gap1 justify-center'>
                  {collectionCars.map(i=>{

                      return <CateCard key={i?._id}  title={i?.title} _id={i?._id} 
                       images={i?.img}
                       price={i?.price}
                       position={i?.position}
                       list={i?.list}
                       flip={i?.flip ? true : false}
                     />
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection