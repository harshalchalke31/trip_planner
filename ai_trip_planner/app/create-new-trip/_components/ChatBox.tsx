"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Dot, Loader, Loader2, LoaderIcon, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import DefaultStateBox from './DefaultStateBox'
import GroupSizeUI from './GroupSizeUI'
import BudgetUI from './BudgetUI'
import TripDurationUI from './TripDurationUI'
import FinalUI from './FinalUI'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useUserDetail } from '@/app/Provider'
import {v4 as uuidv4} from 'uuid'

export type Message ={
    role: string,
    content:string,
    ui?:string,
}

export type TripInfo ={
    budget:string,
    destination:string,
    duration: string,
    group_size: string,
    origin: string,
    hotels: any,
    itinerary: any,
}

function ChatBox() {

    // states for messages
    const [messages, setMessages] = useState<Message []>([])
    const [userInput, setUserInput] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [isFinal, setIsFinal] = useState(false)
    const [tripDetail, setTripDetail] = useState<TripInfo>()
    const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail)
    const {userDetail, setUserDetail} = useUserDetail()


    const onSend = async() => {
        if(!userInput?.trim()) return

        setUserInput('')
        setLoading(true)
        const newMessage:Message = {
            role:'user',
            content: userInput??"",
        }

        setMessages((prev:Message[])=>[...prev,newMessage])

        const result = await axios.post('/api/aimodel',{
            messages: [...messages,newMessage].map(({role,content}) => ({role,content})),
            isFinal: isFinal,
        })

        console.log("Trip details",result.data)

        !isFinal && setMessages((prev:Message[])=>[...prev,{
            role:'assistant',
            content:result?.data?.resp ?? JSON.stringify(result.data),
            ui:result?.data?.ui,
        }])

        if(isFinal){
            setTripDetail(result?.data?.trip_plan)
            const tripID = uuidv4()

            if(!userDetail?._id){
                setLoading(false)
                return
            }
            await SaveTripDetail({
                tripDetail:result?.data?.trip_plan,
                tripID:tripID,
                uid:userDetail._id
            })
        }
        setLoading(false)
    }

    const RenderGenerativeUI= (ui:string) => {
        if(ui=='budget'){
            return <BudgetUI onSelectOption={(v:string)=>{setUserInput(v); onSend()}} />
        }else if (ui=='groupSize') {
            return <GroupSizeUI onSelectOption={(v:string)=>{setUserInput(v); onSend()}} />
        }else if (ui=='tripDuration'){
            return <TripDurationUI onSelectOption={(v:string)=>{setUserInput(v); onSend()}} />
        }else if (ui=='final') {
            return <FinalUI viewTrip={()=>console.log()} disable={!tripDetail} />
        }
        return null
        }

    //use effect hooks
    useEffect(()=>{
        const lastMessage = messages[messages.length-1]
        if (lastMessage?.ui?.trim().toLowerCase() === 'final'){
            setIsFinal(true)
            setUserInput("OK")
            // onSend()
        }
    },[messages])

    useEffect(()=>{
        if (isFinal && userInput){
            onSend()
        }
    },[isFinal])

    return (
    <div className='h-[76vh] flex flex-col'>
        {messages?.length==0 &&
        <DefaultStateBox onSelectOption={(v:string)=>{setUserInput(v);onSend()}} />
        }

        {/* Display Messages */}

        <section className='flex-1 overflow-y-auto p-4'>
            {messages.map((msg:Message, index)=> (
                msg.role=='user' ?
                    <div className='flex justify-end mt-2' key={index}>
                        <div className='max-w-lg bg-primary px-4 py-2 text-white font-medium rounded-lg'>
                            {msg.content}
                        </div>
                    </div> :
                    <div className='flex justify-start mt-2' key={index}>
                        <div className='max-w-lg bg-gray-200 px-4 py-2 text-black font-medium rounded-lg'>
                            {msg.content}
                            {RenderGenerativeUI(msg.ui??"")}
                        </div>
                    </div>
            ))}

            {loading && <div className='flex justify-start mt-2'>
                <div className='max-w-lg bg-gray-400 px-4 py-2 text-black font-medium rounded-lg'>
                    <Loader className='animate-spin' />
                </div>
            </div>
            }

            
        </section>

        {/* User Input Text Box */}
        <section>
            <div className='border rounded-2xl p-4 mt-5 relative'>
                <Textarea placeholder='Create a Trip from San Francisco to Tokyo ...' 
                className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'
                onChange={(event) => setUserInput(event.target.value)}
                value={userInput}
                />
                <Button size={'icon'} className='absolute bottom-6 right-6' onClick={()=>onSend()}>
                    <Send className='h-4 w-4'/>
                </Button>
            </div>
        </section>

        
    </div>
    )
    }

export default ChatBox
