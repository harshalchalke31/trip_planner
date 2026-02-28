"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import {
    Globe2, Send,
    Compass,
    Landmark,
    MapPin,
} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const suggestions = [
    {
        title: 'Create New Trip',
        icon: <Globe2 className='text-blue-400 h-5 w-5' />
    },
    {
        title: "Discover hidden gems",
        icon: <Compass className="text-blue-400 h-5 w-5" />
    },
    {
        title: "Explore historical places",
        icon: <Landmark className="text-amber-400 h-5 w-5" />
    },
    {
        title: "Find popular attractions",
        icon: <MapPin className="text-green-400 h-5 w-5" />
    },

]

const techstack = [
    {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Google ADK",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    },
    { name: "Clerk", src: "/clerk.jpeg" },
    { name: "Convex", src: "/convex.png" },
    {
        name: "Mapbox",
        src: "/mapbox.png",
    },
]

function Hero() {

    const { user } = useUser()
    const router = useRouter()
    const onSend = () => {
        if (!user) {
            router.push('/sign-in')
            return;
        }
        // Otherwise navigate to create trip page
        router.push('/create-new-trip')
    }
    return (
        <div className='mt-24 flex w-full justify-center '>
            {/* Content */}
            <div className='max-w-4xl w-full text-center space-y-6'>
                <h1 className='font-bold text-xl md:text-5xl'>Hey, I am your Personal <span className='text-primary'>Trip Planner.</span></h1>
                <p>Tell me where you want to go! I'll list hotels, flights and plan your entire itenary.</p>
                {/* Input box */}
                <div className='border rounded-2xl p-4 mt-5 relative'>
                    <Textarea placeholder='Create a Trip from San Francisco to Tokyo ...'
                        className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none' />
                    <Button size={'icon'} className='absolute bottom-6 right-6' onClick={() => onSend()}>
                        <Send className='h-4 w-4' />
                    </Button>
                </div>
                {/* Suggestions list */}
                <div className='flex gap-5 mt-5 justify-center'>
                    {suggestions.map((sugg, index) => (
                        <div key={index} className='flex items-center gap-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white px-3'>
                            {sugg.icon}
                            <h2 className='text-sm'>{sugg.title}</h2>
                        </div>
                    ))}
                </div>
                <div>
                    {/* Tech stack */}
                    <h2 className='text-xl md:text-2xl font-bold mt-8'>Technology Stack</h2>
                    <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
                        {techstack.map((tech) => (
                            <div key={tech.name} className='border shadow rounded-2xl p-4 flex flex-col items-center gap-3'>
                                <div className=' p-3 flex items-center justify-center h-16 w-16'>
                                    <Image width={40} height={40} src={tech.src} alt={tech.name} className='rounded-xl shadow max-h-10 max-w-10' />
                                </div>
                                <p className='text-sm font-medium'>{tech.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Hero
