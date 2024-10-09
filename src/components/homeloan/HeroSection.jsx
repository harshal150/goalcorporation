import React from 'react';

import personal from '../../assets/loans/hy (1).jpg'

const HeroSection = () => {



  const HandleClick = () => {
    window.open('https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8', '_blank');
  };
  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
        {/* <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-[45px] leading-3 font-bold text-blue-500 capitalize">
          Make Your Homeownership
          Dreams Come True with Our{' '}
          <span className="text-red-500">Home Loan Solution!</span>
        </h1> */}

        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
        Make Your Homeownership
          Dreams Come True with Our{' '} <br></br><span className="text-red-500">Home Loan Solution!</span> <br />
   
        </h1>
        <p className="mt-6 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px]  uppercase font-semibold">
          Discover a variety of Home Loan Options with flexible terms and <br></br>competitive rates whether <br /> you're buying a dream home or refinancing needs.
        </p>
        <button onClick={HandleClick} className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Apply Now
        </button>
      </div>


      {/* Image Section */}
    {/* Background Gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0"></div> */}



      {/* Image Section */}
      <div className="w-full sm:order-2 order-1  mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100">
        <img src={personal} alt="Loan Against Property" className="max-w-full rounded-3xl h-auto object-contain  mix-blend-multiply" />
      </div>
    </div>
  );
};

export default HeroSection;
