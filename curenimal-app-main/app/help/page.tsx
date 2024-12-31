"use client";
import React from 'react'
import Cards from '../components/cards'
import { useState, useRef } from 'react'


const page: React.FC = () => {
 
  
  // setting variable and its updater funtion for FirstAid data
  const [showFirstAid, setShowFirstAid] = useState(false);

  //Event handler function to handle the click event on the button
  const handleFirstAid = () => {
    setShowFirstAid(true)
  }

    
  return (
    <div>
     <div className='bg-base-100 lg:w-100 '>
        <h1 className='pt-2 pb-2 font-mono font-black text-3xl align-center md:text-3xl text-accent text-center'>YOU CAN'T BUY LOVE,</h1>
        <h1 className='font-semibold font-mono text-3xl align-center text-accent text-center'>BUT YOU CAN <b className='text-red-900 text-3xl'>RESCUE</b> IT!</h1>
        <div className='flex justify-center pt-8'>
       
        </div>
        <div>
            <h1 className='pt-5 pl-10 pb-10 font-mono font-black text-2xl text-neutral'>
                Who are you helping today?</h1>
        </div>
        <div className='z-80'>
            <Cards onButtonClicked={handleFirstAid} />
        </div>
        <div className='mt-20 flex justify-center text-neutral mb-10'>
          <footer>@ Coded and Designed by Sukriti Rajora</footer>
        </div>
        </div>
  
</div>

  )
}

export default page
