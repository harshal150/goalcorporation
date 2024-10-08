import React from 'react';
// import homepage from '../../assets/loans/hm.jpg';
import homepage from '../../assets/Header/4.webp';
import loanAgain from '../../assets/loansNew/proploan.jpg'


const LoanAgaintHeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
          Transform your Property <br />
          into Capital with Our <br />
          <span className="text-red-500">Loan Against Property Option</span>
        </h1>
        <p className="mt-6 text-[10px] sm:text-base md:text-lg xl:text-lg 2xl:text-2xl uppercase font-semibold text-black">
          Unlock your Property into Capital with our Flexible Loan Against Property Option. <br />
          Enjoy Lower Interest Rates with Instant Approval.
        </p>
        <button className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Apply Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={loanAgain} alt="Loan Against Property" className="max-w-full h-auto rounded-2xl  mix-blend-multiply object-contain" />
      </div>
    </div>
  );
};

export default LoanAgaintHeroSection;
