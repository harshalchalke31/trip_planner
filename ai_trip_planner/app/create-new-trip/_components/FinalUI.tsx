import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import React from 'react'

function FinalUI({viewTrip}: any ) {
    
    return (
    <div className='flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-lg'>
      <Globe2 className='text-primary text-3xl animate-bounce'></Globe2>
      <h2 className='mt-3 text-lg font-semibold text-primary'>Planning your dream trip...</h2>
      <p className='text-gray-500 text-sm text-center mt-1'>Gathering best destinations, activities, and travel details for you.</p>
      <Button disabled onClick={viewTrip} className='mt-2 w-full'>View Trip</Button>
    </div>
  )
}

export default FinalUI
