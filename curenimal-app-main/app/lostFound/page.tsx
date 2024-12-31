"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from '@/app/components/ImageUpload'

const LostFound = () => {

    const backgroundImageUrl = 'url("/assests/curenimalbg.png")';

    const router = useRouter();


    //useEffect hook to check the presence of the email id in local storage
    useEffect(() => {
        const storeEmail = localStorage.getItem('email')
        if(!storeEmail) {

            //redirect is email not present
            router.push('/FirebaseLogin')
        }
    }, [])
  return (
    <div  className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
    <div className='hero-overlay bg-gradient-to-b from-neutral from-5%'>
       <h1 className='pt-2 pb-2 font-mono font-black text-3xl align-center text-base-100 text-center'>LOST AND FOUND</h1>
       <h1 className='font-semibold font-mono text-xl align-center text-primary text-center '>Report pictures of lost, found or up for adoption pets. <br/> Make sure to enter your contact details to help the helper reach you.</h1>
       <div className='flex justify-center pt-8'>
      
       </div>
       <div>
           <h1 className='pt-5 pl-10 pb-5 font-mono font-black text-2xl text-base-100'>
               Who are you helping today?</h1>
       </div>
       <div>
       <ImageUpload/>

       </div>
       </div>
       </div>
  )
}

export default LostFound