"use client"
import React, { useState, useEffect } from 'react';
import { auth, provider } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Signin = () => {

  //variable and its updater for user email
  const [value, setValue] = useState('');
  const router = useRouter();


  // function to handle signin
  const handleSignIn = () => {
    signInWithPopup(auth, provider) //imported above
      .then((data) => {
        if (data.user?.email) {
          localStorage.setItem('email', data.user.email); //store email in local storage
          setValue(data.user.email); //update the value to user email
          router.push('/lostFound'); // Redirect to the 'LostFound' page if authenticated
        } else {
          setValue('');
        }

         // Extract credentials and token information if needed
        const credentials = GoogleAuthProvider.credentialFromResult(data);

        // defined for potential use in future
        const token = credentials?.accessToken; //to access certain APIs 
        const user = data.user; // to display users info like profile pic
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };


  // useEffect to check if email is already in local storage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setValue(storedEmail); // Extract credentials and token information if needed
      router.push('/lostFound'); // Redirect to the 'LostFound' page if email is stored
    }
  }, [router]);


  const backgroundImageUrl = 'url("/assests/curenimalbg.png")';
  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
        <div className="hero-overlay bg-opacity-55"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className='btn btn-accent text-neutral-focus mr-5 w-full'>
                    {!value && <button onClick={handleSignIn} >Sign In With Google</button>}
                   </div>
                   <div className='mt-10'>
                      <Link href='/'>
                         <button className="btn btn-accent text-neutral-focus w-full">Home</button>
                     </Link>
                 </div>
                 </div>
             </div>
      </div>
    </div>
  );
};

export default Signin;
