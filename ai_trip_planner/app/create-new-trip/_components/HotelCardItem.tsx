"use client"
import React, { useEffect, useState } from 'react'
import { Hotel } from './ChatBox'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import axios from 'axios'

type Props ={
    hotel: Hotel
}

function HotelCardItem({hotel}: Props) {

  const [photoUrl, setPhotoUrl] = useState<string>()

  useEffect(()=>{
    hotel&&GetGooglePlaceDetail()
  },[hotel])

  const GetGooglePlaceDetail = async() =>{
    const result = await axios.post('/api/google_place_detail',{
      placeName: hotel?.hotel_name
    })
    if (result?.data?.e){
      return
    }
    setPhotoUrl(result?.data)
  }

  return (
    <div className='flex flex-col gap-1'>
        <Image src={photoUrl?photoUrl:'/placeholder.png'} alt='place-image' width={1200} height={675}
        className='rounded-xl shadow object-cover mb-2 w-full h-auto'/>
        <h2 className='font-semibold text-lg'>{hotel.hotel_name}</h2>
        <h2 className='text-gray-500'>{hotel.hotel_address}</h2>
        <div className='flex justify-between items-center'>
        <p className='flex gap-2 text-green-600'><Wallet />{hotel.price_per_night}</p>
        <p className='flex gap-2 text-yellow-600'><Star />{hotel.rating}</p>
        </div>
        <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel.hotel_name} target='_blank'>
        <Button variant={'outline'} className='mt1 w-full'>View<ExternalLink /></Button>
        </Link>
        {/* <p className='line-clamp-2 text-gray-500'>{hotel.description}</p> */}
    </div>
  )
}

export default HotelCardItem
