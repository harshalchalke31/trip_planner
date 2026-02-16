"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Dot, Loader, Loader2, LoaderIcon, Send } from 'lucide-react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import DefaultStateBox from './DefaultStateBox'
import GroupSizeUI from './GroupSizeUI'
import BudgetUI from './BudgetUI'
import TripDurationUI from './TripDurationUI'
import FinalUI from './FinalUI'

type UItype = "" | "budget" | "groupSize" | "tripDuration" | "final"
type Message ={
    role: "user" | "assistant",
    content:string,
    ui?:UItype,
}

function ChatBox() {

    // states for messages
    const [messages, setMessages] = useState<Message []>([])
    const [userInput, setUserInput] = useState<string>("")
    const [loading, setLoading] = useState(false)

    // fix stale payload
    const messageRef = useRef<Message[]>([])
    useEffect(()=>{
        messageRef.current = messages
    },[messages])

    const bottomRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:'smooth'})
    },[messages, loading])

    const RenderGenerativeUI= (ui:string, onPick: (v:string)=> void) => {
        switch(ui){
            case "budget":
                return <BudgetUI onSelectOption={onPick} />
            case "groupSize":
                return <GroupSizeUI onSelectOption={onPick} />
            case "tripDuration":
                return <TripDurationUI onSelectOption={onPick} />
            case "final":
                return <FinalUI viewTrip={()=> console.log()} />
            default:
                return null
        }
    }
    
    const normalizeUI = (ui:any): UItype => {
        const v = String(ui ?? "").trim()
        if (v==="budget" || v==="groupSize" || v==="tripDuration" || v==="final") return v
        return ""

    }

    const onSend = async(text?:string) => {
        // to prevent double send or concurrency issues
        if (loading) return

        const content = (text ?? userInput).trim()
        if (!content) return

        // clear input immediately after display
        setUserInput('')
        setLoading(true)

        // build next state in a single consistent snapshot
        const userMessage: Message = {role:'user', content:content}

        // update messages
        setMessages((prev) => [...prev, userMessage])

        try{
            // build payload from prev messages + new message
            // do we do not rely on stale messages due to closure
            const payload = [...messageRef.current, userMessage]

            const result = await axios.post('/api/aimodel',
                {messages: payload},
                {timeout: 45000}
            )
            console.log("aimodel response data:", result.data)


            //parse response text and build assistant message
            const resp = String(result?.data?.resp ?? "")
            const ui = normalizeUI(result?.data?.ui)

            const assistantMessage: Message = {
                role:'assistant',
                content: resp || "No Response",
                ui:ui,
            }

            //update messages
            setMessages((prev) => [...prev, assistantMessage])
            
        }catch(e: any){

            const msg = e?.code === 'ECONNABORTED' ? "AI request timeout. Try again!" : "Something went wrong with AI model. Check API key and logs."

            setMessages((prev) => [
                ...prev,
                {
                    role:"assistant",
                    content:msg,
                    ui:"",
                },
            ])

            console.log(e)

        }finally{
            setLoading(false)
        }
    }

    // safer pick handler used by ui components
    const onPickOption = (v:string) => {
        // send value directly
        onSend(v)
    }

    const lastAssistantIndex = useMemo(()=>{
        for (let i = messages.length -1; i>=0; i--){
            if (messages[i].role==='assistant') return i
        }
        return -1
    },[messages])


  return (
    <div className='h-[76vh] flex flex-col'>
        {messages?.length===0 &&
        <DefaultStateBox onSelectOption={(v:string)=>{onSend(v)}} />
        }

        {/* Display Messages */}

        <section className='flex-1 overflow-y-auto p-4'>
            {messages.map((msg:Message, index)=> {
                const isUser = msg.role === 'user'
                const isLastAssistantMsg = msg.role === 'assistant' && index === lastAssistantIndex
                return isUser ? (
                    <div className='flex justify-end mt-2' key={index}>
                        <div className='max-w-lg bg-primary px-4 py-2 text-white font-medium rounded-lg'>
                            {msg.content}
                        </div>
                    </div> ): (
                    <div className='flex justify-start mt-2' key={index}>
                        <div className='max-w-lg bg-gray-200 px-4 py-2 text-black font-medium rounded-lg'>
                            {msg.content}
                            {/* Only show generative UI for latest assistant message */}
                            {isLastAssistantMsg && RenderGenerativeUI(msg.ui??"", onPickOption)}
                        </div>
                    </div>
                    )
            })}

            {loading && 
                (<div className='flex justify-start mt-2'>
                    <div className='max-w-lg bg-gray-400 px-4 py-2 text-black font-medium rounded-lg'>
                        <Loader className='animate-spin' />
                    </div>
                </div>)
            }

            <div ref={bottomRef}/>
        </section>

        {/* User Input Text Box */}
        <section>
            <div className='border rounded-2xl p-4 mt-5 relative'>
                <Textarea placeholder='Create a Trip from San Francisco to Tokyo ...' 
                className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'
                onChange={(event) => setUserInput(event.target.value)}
                value={userInput}
                onKeyDown={(e)=>{
                    if (e.key==='Enter' && !e.shiftKey){
                        e.preventDefault()
                        onSend()
                    }
                }}
                disabled={loading}
                />
                <Button size={'icon'} className='absolute bottom-6 right-6' onClick={()=>onSend()} disabled={loading} aria-label='Send'>
                    <Send className='h-4 w-4'/>
                </Button>
            </div>
        </section>

      
    </div>
  )
}

export default ChatBox
