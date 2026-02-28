import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, useUser } from '@clerk/nextjs'
import { Plane, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


function Header() {
    const menuOptions = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'My Trips',
            path: '/my-trips'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        },
        {
            name: 'Developer',
            path: 'https://harshalchalke31.github.io/harshalchalke31/'
        },
    ]

    const { user } = useUser()
    const path = usePathname()

    return (
        <div className='flex justify-between items-center p-4'>
            <div className='flex gap-2 items-center'>
                <Image src={'logo.svg'} alt='logo' width={30} height={30} />
                <h2 className='font-bold text-2xl' >AI Trip Planner</h2>
            </div>
            <div className='flex gap-8 items-center rounded-full py-2 px-6 bg-primary/10 space-x-3'>
                {menuOptions.map((menu, index) => (
                    <Link key={index} href={menu.path}>
                        <h2 className='text-lg hover:scale-105 transition-all hover:bg-primary rounded-full px-2 py-0 hover:text-white'>{menu.name}</h2>
                    </Link>

                ))}
            </div>
            {!user ? <SignInButton mode='modal'>
                <Button className='rounded-full'>Get Started</Button>
            </SignInButton> :
                path=='/create-new-trip'?
                <Link href={'/my-trips'}>
                    <Button className='rounded-full'><Plane/>My Trips</Button>
                </Link>
                :
                <Link href={'/create-new-trip'}>
                    <Button className='rounded-full'><PlusIcon /> Create New Trip</Button>
                </Link>}


        </div>
    )
}

export default Header
