

import React from 'react';
import business from '../../assets/loans/buissness.jpeg';

const BusinessHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={business} alt="Home Loan" className="w-full h-[70vh] object-cover" />
      {/* <div className="absolute inset-0 bg-sky-500 opacity-20"></div> */}

      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-4xl font-bold mb-4 text-left text-red-500">Achieve Your Business Goals<br></br> with Our Hassle-Free <br></br>Business Loan Solution!</h1>
        <p className="text-lg mb-6 text-bold">Secure Quick and Convenient Business Loans to cover fixed asset expenses and achieve<br></br> all your business goals effortlessly</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[20%]">Apply Now</button>
      </div>
      



    </div>
  );
};

export default BusinessHeroSection;

