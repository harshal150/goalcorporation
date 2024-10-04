import React from 'react';
import homepage from '../../assets/loans/hm.jpg';
import svgicon from '../../assets/svg/home-loan.png';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={homepage} alt="Home Loan" className="w-full h-[87vh] object-cover" />

      {/* Bluish Overlay */}
      <div className="absolute inset-0 bg-sky-500 opacity-20"></div>

      {/* SVG Icon
      <img 
        src={svgicon} 
        alt="Home Loan Icon" 
        className="absolute top-1/2 right-8 transform -translate-y-1/2 w-[550px] h-[550px] opacity-90"
      /> */}
      
      {/* Text Overlay */}
      <div className="absolute top-9 left-0 h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-4xl font-bold mb-4 text-left text-[#ffffff]">
          Make Your Homeownership <br /> Dreams Come True with Our <br /> Home Loan Solution!
        </h1>
        <p className="text-lg mb-6 font-bold text-black">
          Discover a variety of Home Loan Options with flexible terms and competitive rates whether <br /> you're buying a dream home or refinancing needs.
        </p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[20%]">Apply Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
