import React from 'react'
import ChatBox from './_components/ChatBox'

function CreateNewTrip() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10'>
      {/* Chatbot Interface */}
      <div>
        <ChatBox />
      </div>
      {/* Map and itenary display */}
      <div>
        Map
      </div>
    </div>
  )
}

export default CreateNewTrip
