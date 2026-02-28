"use client"
import React, { useEffect, useState } from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'
import { useTripDetail, useUserDetail } from '../Provider'
import GlobalMap from './_components/GlobalMap'
import { Button } from '@/components/ui/button'
import { Globe2, Plane } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function CreateNewTrip() {
  //@ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail()
  const [activeIndex, setActiveIndex] = useState(1)
  useEffect(() => {
    setTripDetailInfo(null)
  }, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-10'>
      {/* Chatbot Interface */}
      <div>
        <ChatBox />
      </div>
      {/* Map and itenary display */}
      <div className='col-span-2 relative'>
        {activeIndex == 0 ? <Itinerary /> : <GlobalMap />}
        <Tooltip>
          <TooltipTrigger asChild className='absolute top-2 left-2 rounded-xl hover:bg-primary/70'>
            <Button size={'icon-lg'}
              onClick={() => setActiveIndex(activeIndex == 0 ? 1 : 0)}>
              {activeIndex == 0 ? <Plane /> : <Globe2 />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch between Itinerary and Map.</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default CreateNewTrip
