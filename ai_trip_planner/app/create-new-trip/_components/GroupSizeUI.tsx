import React from 'react'

export const SelectGroupSize = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler exploring",
    people: "1",
    icon: "🎒", // solo backpacker vibe
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    people: "2",
    icon: "🚲", // tandem bike symbolism
  },
  {
    id: 3,
    title: "Family",
    desc: "A group having fun-loving adventures",
    people: "3 to 5 people",
    icon: "🚗", // small group road trip
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seekers",
    people: "5 to 10 people",
    icon: "🚌", // bigger group trip
  },
]


function GroupSizeUI({onSelectOption}:any) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-2'>
      {SelectGroupSize.map((item,index)=>(
        <div key={index} className='p-3 rounded-2xl bg-white hover:bg-blue-200 cursor-pointer'
        onClick={()=>onSelectOption(item.title+":"+item.people)}>
            <h2>{item.icon}</h2>
            <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default GroupSizeUI
