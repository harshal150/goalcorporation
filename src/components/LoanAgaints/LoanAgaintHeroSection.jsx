

import React from 'react';
import homepage from '../../assets/loans/hm.jpg';

const LoanAgaintHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={homepage} alt="Home Loan" className="w-full h-[80vh] object-cover" />
      <div className="absolute inset-0 bg-sky-500 opacity-20"></div>

      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-4xl font-bold mb-4 text-left text-[#fff]">Transform your Property <br></br>into Capital with Our <br></br>Loan Against Property Option</h1>
        <p className="text-lg mb-6 font-bold text-black">Unlock your Property into Capital with our Flexible Loan Against Property Option.<br></br> Enjoy Lower Interest Rates with Instant Approval</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[20%]">Apply Now</button>
      </div>
      

    </div>
  );
};

export default LoanAgaintHeroSection;


