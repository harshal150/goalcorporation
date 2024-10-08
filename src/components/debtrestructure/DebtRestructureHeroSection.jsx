import React from 'react';
// import debtRestructure from '../../assets/loans/personal.webp';
import debtRestructure from '../../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';

import debt from '../../assets/loansNew/WhatsApp Image 2024-10-07 at 12.14.59_d7cf11dd.jpg'
const DebtRestructureHeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
        <span className='  text-[#EF4444] uppercase'> Debt Restructuring : </span> A Strategic 
          Solution for Managing Financial
          Obligations and Avoiding Default
        </h1>
        <p className="mt-6 text-[10px] sm:text-base md:text-lg xl:text-lg 2xl:text-2xl uppercase font-semibold">
          A Comprehensive Strategy for Financial Stability, Debt Relief, and Long-Term Sustainability.
        </p>

        <button className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Apply Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={debt} alt="Debt Restructuring" className="max-w-full h-auto object-contain  mix-blend-multiply rounded-2xl" />
      </div>
    </div>
  );
};

export default DebtRestructureHeroSection;
