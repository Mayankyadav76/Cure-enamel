"use client"
import Link from 'next/link';
import { useEffect } from 'react';



export default function Home() {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(
        function (registration) {
          console.log('Service Worker registration successful with scope: ', registration.scope);
        },
        function (err) {
          console.log('Service Worker registration failed: ', err);
        }
      );
    }
  }, []);

  
  const backgroundImageUrl = 'url("/assests/curenimalbg.png")';
  return (
  <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
    <div className="hero-overlay bg-opacity-55"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">CureNimal</h1>
        <p className="mb-5 text-white">Welcome to our compassionate community dedicated to the well-being of our furry friends! </p>
        <Link href="/help">
        <button className="btn btn-secondary text-base-100-focus mr-5">Help now</button>
        </Link>
        <Link href="/lostFound">
        <button className="btn btn-secondary text-base-100-focus ml-5">Lost and Found</button>
        </Link>
      </div>
    </div>
  </div>
    
  )
}
