import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, useUser } from '@clerk/nextjs'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
    const menuOptions = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Pricing',
            path:'/pricing'
        },
        {
            name:'Contact Us',
            path:'/contact-us'
        }
    ]

    const {user} = useUser()
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='flex gap-2 items-center'>
            <Image src={'logo.svg'} alt='logo' width={30} height={30}/>
            <h2 className='font-bold text-2xl' >AI Trip Planner</h2>
        </div>
        <div className='flex gap-8 items-center rounded-full py-2 px-6 bg-primary/10 space-x-3'>
            {menuOptions.map((menu,index) =>(
                <Link key={index} href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:bg-primary rounded-full px-2 py-2 hover:text-white'>{menu.name}</h2>
                </Link>
                
            ))}
        </div>
        {!user? <SignInButton mode='modal'>
            <Button className='rounded-full'>Get Started</Button>
        </SignInButton> :
        <Link href={'create-new-trip'}>
        <Button><PlusIcon /> Create New Trip</Button>
        </Link>}
        
      
    </div>
  )
}

export default Header
