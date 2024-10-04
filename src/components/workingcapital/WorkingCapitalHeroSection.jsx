

import React from 'react';
import workignCapital from '../../assets/loans/wcapital.png';

const WorkingCapitalHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={workignCapital} alt="Home Loan" className="w-full h-[80vh] object-cover" />
      <div className="absolute inset-0 bg-sky-400 opacity-20"></div>

      {/* Text Overlay */}
      <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-3xl font-bold mb-4 text-left text-[#4e4ec9]">Goal Corporation offers flexible Working<br></br>  Capital loans to help businesses manage <br></br>daily operations and maintain <br></br>cash flow stability.</h1>
        {/* <p className="text-lg mb-6 text-bold">Unlock your Property into Capital with our Flexible Loan Against Property Option. <br></br>Enjoy Lower Interest Rates with Instant Approval</p> */}
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[25%]">Apply Now</button>
      </div>


    </div>
  );
};

export default WorkingCapitalHeroSection;

