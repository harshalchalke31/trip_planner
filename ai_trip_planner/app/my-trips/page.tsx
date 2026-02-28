"use client"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useConvex } from 'convex/react'
import { ArrowBigRight, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useUserDetail } from '../Provider'
import { TripInfo } from '../create-new-trip/_components/ChatBox'
import Image from 'next/image'
import MyTripCard from './_components/MyTripCard'

export type Trip = {
  tripID:any,
  tripDetail:TripInfo,
  _id: string

}

function MyTrips() {
  const [myTrips, setMyTrips] = useState<Trip[]>([])

  const convex = useConvex()
  const { userDetail, setUserDetail } = useUserDetail()
  useEffect(() => {
    userDetail?._id && GetUserTrip()
  }, [userDetail?._id])
  const GetUserTrip = async () => {
    const result = await convex.query(api.tripDetail.GetUserTrips, {
      uid: userDetail?._id
    })
    setMyTrips(result)
    // console.log(result)
  }
  return (
    <div className='p-10, px-10 md:px-24 lg:px48'>
      <h2 className='mt-6 text-center font-bold text-3xl text-primary'>My Trips</h2>
      {myTrips?.length == 0 &&
        <div className='p-7 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6'>
          <h2>You don't have any trips to show. Create a trip plan!</h2>
          <Link href={'/create-new-trip'}>
            <Button className='rounded-full'><PlusIcon /> Create New Trip</Button>
          </Link>
        </div>}

      <div className='grid grid-cols-2 lg:grid-cols-3 mt-6 gap-5'>
        {myTrips.map((trip, index)=>(
          <MyTripCard trip={trip} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default MyTrips
