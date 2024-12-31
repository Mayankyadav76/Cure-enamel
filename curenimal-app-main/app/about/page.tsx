import React from 'react'

const page = () => {

    const backgroundImageUrl = 'url("/assests/curenimalbg.png")';

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: backgroundImageUrl }}>
         <div className="hero-overlay bg-gradient-to-b from-neutral from-10%"></div>
         <div className='justify-center items-center lg:w-1/2 w-90 lg:mt-[-100px] '>
         <h2 className='lg:text-3xl text-xl text-base-100 font-bold mb-5 text-center uppercase'>🐶🐱🐰 Curenimal 🐰🐱🐶 </h2>
        <p className='lg:text-lg text-md  font-bold text-center text-base-100 lg:ml-0 lg:mr-0 ml-3 mr-3'>Welcome to our compassionate community dedicated to the well-being of our furry friends! 🐾 <br />
        At Curenimal, we believe that every animal deserves love, care, and a helping hand. Our mission is to provide swift and certified treatment to stray and pet animals, ensuring they receive the care they deserve. <br />
        </p>
        <br />
        <p className='text-xl font-bold lg:m;-0 ml-5 text-base-100 '>How do we help:</p>
        <ol className='lg:ml-0 lg:mr-0 mr-5 ml-5 text-base-100'>
            <li>
            Report Missing or Found Pets: Be a hero for a pet in need by reporting missing or found animals through our platform. Your contribution could be the key to a happy reunion or a new forever home.
            </li>
            <li>
            Adopt, Don't Shop: Explore our adoption section and give a deserving animal a second chance at a loving home. Adopting not only changes their lives but also enriches yours.
            </li>
             <li>
            Spread the Word: Help us build a caring community. Share our platform, stories, and the importance of responsible pet ownership. Together, we can create a world where every animal is valued and protected.
            </li>
        </ol>
        <p className='text-lg font-bold lg:ml-0 text-base-100 lg:mr-0 ml-5 mr-5 mt-3'>Thank you for being a part of Curenimal. Together, let's make a difference in the lives of our beloved pets and the animals who need us most.</p>
         </div>


    </div>
  )
}

export default page