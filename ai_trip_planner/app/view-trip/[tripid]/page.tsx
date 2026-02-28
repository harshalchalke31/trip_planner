"use client"
import GlobalMap from '@/app/create-new-trip/_components/GlobalMap'
import Itinerary from '@/app/create-new-trip/_components/Itinerary'
import { Trip } from '@/app/my-trips/page'
import { useTripDetail, useUserDetail } from '@/app/Provider'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ViewTrip() {
    const {tripid} = useParams()
    const {userDetail, setUserDetail} = useUserDetail()
    const convex = useConvex()
    const [tripData, setTripData] = useState<Trip>()
    //@ts-ignore
    const {tripDetailInfo, setTripDetailInfo} = useTripDetail()
    useEffect(()=>{
        userDetail?._id&&GetTrip()
    },[userDetail?._id])
    const GetTrip = async() =>{
        const result = await convex.query(api.tripDetail.GetTripById,{
            uid:userDetail?._id,
            tripid:tripid+''
        })
        setTripData(result?.tripDetail)
        setTripDetailInfo(result?.tripDetail)
    }
  return (
    <div className='grid grid-cols-5 gap-5 p-10'>
      <div className='col-span-3'>
        <Itinerary />
      </div>
      <div className='col-span-2'>
        <GlobalMap />
      </div>
    </div>
  )
}

export default ViewTrip
