"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import CateCard from '../CateCard/CateCard'



export const collectionCars = [
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
              "https://ucarecdn.com/af616624-6479-474b-bc09-8830149722cb/Addasubheading7.png",
              "https://ucarecdn.com/d5810440-682a-44f9-9ae3-e4f9ef1e1c68/nissanmicrainside.jpg",
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
    cars :[
    
      {name:`Toyota Corolla`,img:['https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SQLSQWBGDNFDHIOFIGI63VNRHU.jpg',`https://ucarecdn.com/87fcfb07-3993-4eef-b678-864fb837b73c/toyotacorolla2023interior.jpg`]}
      ,{
        name:`Toyota Raize
        `,img:[`https://ucarecdn.com/ad94d368-5e50-4c75-ba67-8520b7baec7e/toyotaraize.jpg`,`https://ucarecdn.com/75500df4-d115-4425-a634-c8a817942b5e/Toyota_Raize_2023interior.webp`]
      }
      ,{
        name:`Toyota Veloz`,img:[`https://ucarecdn.com/7cf004bc-e12a-4f4d-94ad-07a23728a20f/2023_Toyota_Veloz.png`,`https://ucarecdn.com/939bf9bd-f16e-4fa5-b626-763f44520832/toyotavelozinterior.jpg`]
      }
      ,{
        name:`kia Cerato`,img:[`https://ucarecdn.com/bc4f38b8-c032-421c-b9d8-190599fa86bf/kiacerato.webp`,`https://ucarecdn.com/250aa0c2-3586-4792-bb20-f76b64024f98/kiaceratoinside.jpg`]
      }
      
      ,{
        name:`Hyundai Elantra`,img:[`https://ucarecdn.com/a36f1a6f-3145-42e6-b442-b5d162161668/2023Hyundai.webp`,`https://ucarecdn.com/84bcc4d1-77d8-45be-af69-49802faf61ce/elantrainterior.webp`]
      }
     
    ],
    img:`https://www.motortrend.com/uploads/2022/07/2023-Hyundai-Elantra-Hybrid-Limited-4.jpg?fit=around%7C875:492.1875`

  },
  {
    _id: 'asfasf142124', 
    title: "Business SUV Cars",
    price: "45$ Per Day",
    position: 'right',
    list: ["Nissan Xtrail", "Toyota Urban Cruiser", "Hyundai Tucson    ", `Renault Koleos `,"Chevrolet Captiva",`kia Sportage
    `],
    cars : [
      {
        name:`Toyota Urban Cruiser`,img:[`https://ucarecdn.com/5e96c807-ffeb-4a10-8e94-1bf5b19e4ada/toyotaurbancruiser.webp`,`https://ucarecdn.com/7e265fd9-7a15-4b73-b134-6f52c930d142/toyotaurbancruiserinterior.webp`]
      },
      {
        name:`Hyundai Tucson`,img:[`https://ucarecdn.com/661abb40-c540-4a9b-8104-18936bd18693/hyundaitucson.png`,`https://ucarecdn.com/b46cb6cd-0a43-4b9f-a5c6-52ec84634557/2023_hyundai_tucson_interior.jpg`]
      },
      {
        name:`Renault Koleos`,img:[`https://ucarecdn.com/17febde1-44dd-4717-b5a7-8ded1d897c66/renaultkelios.jpg`,`https://ucarecdn.com/f8334db9-a545-40cf-b4b8-c6dce6b0cc74/renaultkoleosinterior.webp`]
      },
      {
        name:`Chevrolet Captiva`,img:[`https://ucarecdn.com/a1e0caaa-15e7-46f1-9b8c-231ca09187f5/chevroletcaptiva.webp`,`https://ucarecdn.com/e9a7a80f-9dd7-49c4-b809-b1366895b203/chevroletcaptivainterior.jpeg`]
      },
      {
        name:`kia Sportage`,img:[`https://ucarecdn.com/31f7c168-1a17-4bdf-9b29-ca48e50a059a/kiasportage.jpeg`,`https://ucarecdn.com/9f6624e5-2400-4dde-83b2-8bc46646e652/kiasportageint.jpg`]
      },
      {
        name:`Nissan Xtrail`,img:[`https://ucarecdn.com/635e81c5-d581-4f76-a06c-fd5da9f68bb6/Nissan_X_Trail_2023.jpg`,`https://ucarecdn.com/fb0bcb4b-a408-4aaa-b93a-c72ea0f3effc/nissanxtrailinside.jpg`]
      },
    ],
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
    cars: [
      {
        name: "Hyundai Santa Fe",
        img: [
          "https://ucarecdn.com/d73dd459-c1db-4660-94ef-32e31c63a447/2023HyundaiSantaFe.webp",
          "https://ucarecdn.com/b3949dba-93a7-41ea-a91b-addb6fee3741/2023santafeinside.webp"
        ]
      },
      {
        name: "Kia Sorento",
        img: [
          "https://ucarecdn.com/aec8db56-fde3-4146-8b20-ebf66b52ba1a/kiasorentoinside.jpg",
          "https://ucarecdn.com/d424d573-01cf-4b10-a654-660d816b51f9/2023_Kia_Sorento.webp"
        ],
      },
      { 
        name: "BMW X3", 
        img: [
          "https://ucarecdn.com/8c4e4c5a-4daa-4bea-9b4a-4079c7443cfe/2022bmwx3.jpg",
          "https://ucarecdn.com/8d2ea081-fbee-426e-a901-10bb31aaa8a8/bmwx3interior.jpg"
        ]
      },
      {
        name: "Nissan Rogue", 
        img: [
          "https://ucarecdn.com/44923545-e03b-469e-8bc9-522a8755f312/nissanrogue.webp",
          "https://ucarecdn.com/23aa5788-3a7a-46b8-81b0-e40eb5d5597d/nissanrogueinterior.jpg"
        ]
      },
      {
        name: "Nissan Pathfinder",
        img: [
          "https://ucarecdn.com/38ed90eb-cb4a-4df5-b133-83f494f5e6a1/2023NissanPathfinder.webp",
          "https://ucarecdn.com/54453da3-053e-4a0d-a685-3e3d6332ea84/2022NissanPathfinderinterior.jpg"
        ]
      }
    ],
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
      cars: [
        {
          name: "BMW X5",
          img: [
            "https://ucarecdn.com/6d424141-38e4-48bc-b2ce-ff06045d9fbf/2021bmwx5.jpg",
            "https://ucarecdn.com/9cdf494b-3e63-4cf7-9935-441a7da3bdf7/2020bmwx5int.jpg"
          ]
        },
        {
          name: "BMW X6",
          img: [
            "https://ucarecdn.com/c7f51df4-dbab-4b92-a5ff-13564681b142/BMW_X62023.jpg",
            "https://ucarecdn.com/6431935b-9569-4c5b-908c-7d7c0da32d2c/bmwx6interior.jpg"
          ]},
        {
          name: "Audi Q7",
          img: [
            "https://ucarecdn.com/766a720f-f292-43f4-8741-31ce21dbd29d/2023AudiQ7.webp",
            "https://ucarecdn.com/e5272f6c-48b8-4367-8585-ccac315cf3ac/audiq7interior.jpg"
          ]},
        {
          name: "Mercedes G Class",
          img: [
            "https://ucarecdn.com/1775572e-d9b6-4db1-987c-0d12b1a53258/mercedesgclass.webp",
            "https://ucarecdn.com/925da57a-92de-4009-ad04-7d227cfcbc31/mercedesglclassinside.jpg"
          ]},
        {
          name: "Mercedes CLE Class",
          img: [
            "https://ucarecdn.com/402b7afc-ca7d-4138-8dba-4e03d3ba16e5/mercedeseclass.jpg",
            "https://ucarecdn.com/1ae17340-23a6-4d74-b4d0-dfe46d55f323/mercedeseclassinterior.jpg"
      ]},
        { name: "Chevrolet Tahoe", img: [`https://ucarecdn.com/c3c3b1cf-768c-4dbe-94a3-45a7dab6f658/2023ChevroletTahoe1.jpg`,`https://ucarecdn.com/07a60526-8191-48ae-9f81-a3761fe28ba8/chevrolettahoeinterior.jpg`] },
        // { name: "Cadillac Escalade", img: [] },
        { name: "GMC Yukon", img: [`https://ucarecdn.com/5a9a456d-ff5b-4329-a1de-4a9f2d589bb5/gmcyukon2023.jpg`,`https://ucarecdn.com/1c8f6252-3dc3-4918-8028-6099f25d41b8/gmcyukoninside.png`] },
        { name: "Range Rover Sport", img: [`https://ucarecdn.com/8b4fc7bf-75ab-4052-a70d-59d44bdb189e/2024rangeroversportsv.jpg`,`https://ucarecdn.com/6edac9e8-3154-41e9-9423-1cbe1c7ed6d4/rangeroversportinside.jpg`] },
        // { name: "Range Rover Vogue", img: [] },
        { name: "Range Rover Defender", img: [`https://ucarecdn.com/22465f0c-c5a1-4d9e-90b1-297440bdf98d/rangeroverdefinder.webp`,`https://ucarecdn.com/f1d83785-b338-42c3-a400-d9d5205777b1/ranferoverinterior.jpg`] },
        // { name: "Nissan Patrol", img: [] }
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
      cars: [
        {
          name: "Mercedes S Class",
          img: [
            "https://ucarecdn.com/7d5c8e5c-2f10-446b-a0db-042ee726c5ed/mercedessclass.jpg",
            "https://ucarecdn.com/af41a99a-47ba-42eb-9f38-63b08122d443/mercedesinside.jpg"
          ]
        },
        {
          name: "Audi A8",
          img: [
            "https://ucarecdn.com/8d439b1a-c4a5-4eb4-99fc-f193b1753efc/audia8.webp",
            "https://ucarecdn.com/20780102-535b-465b-9c12-5d919f9862c9/audia8inteior.jpg"
          ]},
        {
          name: "BMW 735",
          img: [
            "https://ucarecdn.com/6a82b9df-c273-49d1-b1e3-a9ec81e5b014/bmw735.jpg",
            "https://ucarecdn.com/a5915409-f0b6-4052-827e-96cbe332ed6e/bmw725interior.jpg"
          ] },
        {
          name: "Jaguar XJ",
          img: [
            "https://ucarecdn.com/dd32124d-4da2-4cbc-ac39-ded121821e23/jaguarxj.jpg",
            "https://ucarecdn.com/ae903156-bd16-4da4-aa05-fb5d0f35ce88/jaguarxjinterior.jpg"
      ]}
        
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
      cars: [
        {
          name: "Audi A6",
          img: [
            "https://ucarecdn.com/d7f925d9-9dd1-43b6-9a43-7e33c924a33b/audia61.jpg",
            "https://ucarecdn.com/5157a7b3-d0f0-4ad9-a619-5c920951e87e/audia6interior.jpg"
          ]
        },
        {
          name: "BMW 500",
          img: [
            "https://ucarecdn.com/21e7edea-b322-4f3c-8560-4a2ec0bf4e95/bmw500.jpg",
            "https://ucarecdn.com/cf60a8aa-6adb-4b94-9b72-51353b41cbbf/bmw500interior.jpg"
          ]}
        ,
        {
          name: "Mercedes C Class",
          img: [
            "https://ucarecdn.com/42a6c2c5-1641-45ea-a6ba-da08911800cf/Addasubheading8.png",
            "https://ucarecdn.com/2512cf27-7547-46f4-8e41-43e10cfb618e/mercedesbenzcclassinside.jpg"
          ]}
        ,
        {
          name: "Mercedes E Class",
          img: [
            "https://ucarecdn.com/402b7afc-ca7d-4138-8dba-4e03d3ba16e5/mercedeseclass.jpg",
            "https://ucarecdn.com/1ae17340-23a6-4d74-b4d0-dfe46d55f323/mercedeseclassinterior.jpg"
          ]}

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
      cars: [
        {
          name: "Hyundai H1",
          img: [
            "https://ucarecdn.com/c20018b3-74ec-4dbf-a5c2-5d4700e4e48e/hyundaih1.jpg",
            "https://ucarecdn.com/2ccdeb78-85fa-407a-b94a-34fd69f78a51/hyundaih1interior.jpg"
          ]
        },
        {
          name: "Mercedes V Class",
          img: [
            "https://ucarecdn.com/196f887d-d6ce-41ab-8c78-98c2d6a9bad4/mercedesvclass.jpg",
            "https://ucarecdn.com/ecd5379b-4ba0-40c7-890a-2a3965734051/mercedesvclassinterior.webp"
        ]  }
        
      ],
    
    img:`https://ucarecdn.com/d4747151-56df-4d24-964a-1604d5773caf/mercedesvclass.jpg`

  }
 ,
  {
    _id: 'asfasf2412fasfasf', 
    title: "Convertible Cars",
    price: "150$ Per Day",
    position: 'left',
    list: [
        "Chevrolet Camaro",
        "Mercedes E Class",`BMW 300`
    
      ],
      cars: [
        {
          name: "Chevrolet Camaro",
          img: [
            "https://ucarecdn.com/dc316972-2c5d-4845-8efb-589290f0d0b4/chevroletcamaroconvertible.jpg",
            "https://ucarecdn.com/e90517fc-d8a6-4951-bfec-bb99f1bb73c2/camaroinside.jpg"
          ]
        },
        {
          name: "Mercedes E Class",
          img: [
            "https://ucarecdn.com/81f8ddc4-357b-45e8-b89f-451e85c01d84/mercedeseclassconv.jpg",
            "https://ucarecdn.com/e786ea12-bb8d-40bb-970b-8e0991da5039/mercedesclassconv.jpg"
        ]  }
        ,{
          name: "BMW 300",
          img: [
            "https://ucarecdn.com/a96d4cc4-5b93-4665-9d80-86c86e5f6bb8/bmw300conv.webp",
            "https://ucarecdn.com/ed235f18-1f3f-4f8c-8510-d85c699e3306/bmw300interior.jpg"
        ]  }
        
        
      ],
    img:`https://vehicle-images.dealerinspire.com/f1f8-11000845/W1K1K5KB2PF196966/a2f6b7732fff62ce2ccf6f0b210fc26a.jpg`

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
      cars : [
        {
          name: 'Pullman 28-50 seaters',
          img: [`https://ucarecdn.com/34ddcb73-a1df-4521-beee-10b75a054709/3.png`]
        }
      ],
    img:`https://ucarecdn.com/34ddcb73-a1df-4521-beee-10b75a054709/3.png`

  },
  {
    _id: 'asfasf2412fasfasf', 
    title: " Wedding Services - Wedding Cars",
    price: "",
    position: 'right',
    list: [
     ` Jaguar XF`,
     ` Mercedes S Class`,
     `Jaguar XJ`,
     `Mercedes E Class`,
      `Chrysler`,
      `Mercedes Convertible`,
      `Classic Cars`,
      `Limousine`,
      `Wedding Planner` ],
      cars: [
   
        {
          name: "Mercedes S Class",
          img: ["https://ucarecdn.com/f059f46b-2264-4367-9bef-7c72a950acf0/mercedesbenz_sclass_s400_w222__1694079125_5fc2ae8b_progressive.jpg"]
        },
        {
          name: "Jaguar XF",
          img: ["https://ucarecdn.com/7b4d38bb-9b8c-48d1-b4fc-20735b69c465/jaguar_Xjl_Wedding_Cars_Hyderabad.jpg"]
        },
        { name: "Classic Cars", img: [`https://ucarecdn.com/ca5cc066-9e07-4b52-bd0b-8681421ac523/2940139855_30d639977f_o.jpg`] },
        { name: "Bentley Continental", img: ['https://ucarecdn.com/50f818c2-85a7-4a5c-b47b-72d17b7f8a29/puncarscombentleyluxuryweddingcarforrentinpunjabchandigarh4.jpg'] },
      ],
      flip:true,
    img:`https://ucarecdn.com/db79b3ac-bcf7-42da-b760-2f087c17f1f9/mercedesbenz_sclass_s400_w222__1694079125_5fc2ae8b_progressive.jpg`

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
onClick={()=>router.push('/rental/collection')}
>
    View All
</Btn>

</Box>

              <Box sx={{mb:2,mt:4}} className='flex wrap gap1 justify-center'>
                  {collectionCars.map(i=>{
                    if (!i ) return
                      return <CateCard key={i?._id}  title={i?.title} _id={i?._id} 
                       images={i?.img}
                       cars={i?.cars && i?.cars?.length > 0 ? true : false}
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