"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

function ChatBox() {
    const onSend = () => {

    }
  return (
    <div className='h-[76vh] flex flex-col'>
        {/* Display Messages */}

        <section className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-end mt-2'>
                <div className='max-w-lg bg-primary px-4 py-2 text-white font-medium rounded-lg'>
                    User Msg
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='max-w-lg bg-gray-400 px-4 py-2 text-black font-medium rounded-lg'>
                    AI Message
                </div>
            </div>            
        </section>

        {/* User Input Text Box */}
        <section>
            <div className='border rounded-2xl p-4 mt-5 relative'>
                <Textarea placeholder='Create a Trip from San Francisco to Tokyo ...' 
                className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'/>
                <Button size={'icon'} className='absolute bottom-6 right-6' onClick={()=>onSend()}>
                    <Send className='h-4 w-4'/>
                </Button>
            </div>
        </section>

      
    </div>
  )
}

export default ChatBox
