import { suggestions } from '@/app/_components/Hero'
import React from 'react'

function DefaultStateBox({onSelectOption}:any) {
  return (
    <div>
        <h2 className='font-bold text-3xl text-center'>Start your Trip by <strong className='text-primary'>Planning it here...</strong></h2>
        <div className='grid grid-cols-2 gap-5 mt-20 justify-center'>
            {suggestions.map((sugg,index)=>(
                <div key={index} 
                    onClick={()=>onSelectOption(sugg.title)}
                    className='flex items-center justify-center border border-primary gap-2 rounded-full p-3 cursor-pointer hover:bg-primary hover:text-white px-3'>
                    {sugg.icon}
                    <h2 className='text-sm'>{sugg.title}</h2>
                </div>    
            ))}
        </div>
    </div>
  )
}

export default DefaultStateBox
