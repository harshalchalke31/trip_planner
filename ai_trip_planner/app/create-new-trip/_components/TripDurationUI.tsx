import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function TripDurationUI({onSelectOption}:any) {
    
    const [days,setDays] = useState<number>(1)
    const dec = () => setDays((d) => Math.max(1, d-1))
    const inc = () => setDays((d) => d+1)

    return (
    <div className='mt-3 bg-white rounded-2xl p-4 border border-border'>
        <h2 className='text-center font-semibold text-base'>How many days do you want Days?</h2>

        <div className='mt-4 flex items-center justify-center gap-6'>
            <Button variant='outline' className='h-10 w-10 rounded-full p-0' onClick={dec} aria-label='decrease days'>
                -
            </Button>
            <div className='text-lg font-semibold'>{days} Days</div>
            <Button variant='outline' className='h-10 w-10 rounded-full p-0' onClick={inc} aria-label='increase days'>
                +
            </Button>
        </div>
        <div className='mt-4 flex justify-center'>
            <Button className='rounded-xl px-6' onClick={()=> onSelectOption(`${days} Days`)}>Confirm</Button>
        </div>
      
    </div>
  )
}

export default TripDurationUI
