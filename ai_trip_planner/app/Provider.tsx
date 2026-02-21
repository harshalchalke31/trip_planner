import Header from '@/app/_components/Header';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useContext, useEffect, useState } from 'react'

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const CreateUser = useMutation(api.user.CreateNewUser)
  const [userDetail, setUserDetail] = useState<Doc <"UserTable"> | null>(null)
  const { user } = useUser()

  useEffect(()=>{
    user&&CreateNewUser()
  },[user])

  const CreateNewUser = async() => {
    // Insert new user
    if (user) {
      const result = await CreateUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl,
      })
      setUserDetail(result)
    }
  }

  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <div>
          <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  return useContext(UserDetailContext)
}
