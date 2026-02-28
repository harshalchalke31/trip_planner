"use client"
import React, { useEffect, useState } from 'react'
import { Trip } from '../page'
import Image from 'next/image'
import { ArrowBigRight, Clock, Wallet } from 'lucide-react'
import axios from 'axios'
import Link from 'next/link'

type Props = {
    trip: Trip
}

function MyTripCard({ trip }: Props) {
    const [photoUrl, setPhotoUrl] = useState<string | null>(null)

    useEffect(() => {
        trip && GetGooglePlaceDetail()
    }, [trip])

    const GetGooglePlaceDetail = async () => {
        const result = await axios.post('/api/google_place_detail', {
            placeName: trip?.tripDetail?.destination
        })
        if (result?.data?.e) {
            return
        }
        setPhotoUrl(result?.data)
    }
    return (
        <Link href={'/view-trip/'+trip?.tripID} className='p-5 shadow rounded-2xl'>
            <Image src={photoUrl ? photoUrl : '/placeholder.png'} alt='placeholder' width={400} height={400} className='rounded-xl object-cover border shadow w-full h-[200px]' />
            <h2 className='flex gap-2 font-semibold text-xl mt-2'>{trip?.tripDetail?.origin} <ArrowBigRight /> {trip?.tripDetail?.destination}</h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
                <h2 className='flex items-center gap-2  text-blue-500'><Clock />{trip?.tripDetail?.duration} Days</h2>
                <h2 className='flex items-center gap-2 text-green-500'><Wallet />{trip?.tripDetail?.budget}</h2>
            </div>
        </Link>
    )
}

export default MyTripCard
