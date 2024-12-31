import React from 'react';
import hospitals from '@/hospitals'; 

const Hospital: React.FC = () => {
  
  return (
    <div className='bg-base-100'>
      <h1 className='pt-5 ml-10 lg:ml-20 pb-2 font-mono font-black text-4xl text-red-900'>List of Hospitals</h1>
      <p className='lg:ml-20 ml-10 w-3/5 lg:w-full mb-5 text-red-900'>Please note that this is just a dummy data being the initial stage of this project's development.</p>
      <div className="lg:flex lg:flex-wrap -mx-2 lg:ml-20 lg:mr-10 ml-5 gap-10">
        {/* Map through the 'hospitals' file and create a card for each hospital */}
      {hospitals.map((hospital, index) => (
        <div key={index} className="w-1/4 p-2">
          <div className="bg-secondary text-neutral p-2 pr-1 w-80 rounded-md">
            <p className='font-black'>Name: {hospital.name}</p>
            <p>Street Address: {hospital.street_address}</p>
            <p>City: {hospital.city}</p>
            <p>State: {hospital.state}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Hospital;
