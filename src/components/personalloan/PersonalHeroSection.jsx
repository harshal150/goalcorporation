

import React from 'react';
import personal from '../../assets/loans/personal2.jpg';

const PersonalHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={personal} alt="Home Loan" className="w-full h-[80vh] object-cover" />
      <div className="absolute inset-0 bg-sky-500 opacity-20"></div>

      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-4xl font-extrabold mb-4 text-left text-white">Get the Personal Loan You<br></br> Need to Achieve Your Goals!<br></br> Apply for a Personal Loan <br></br>Today!</h1>
        <p className="text-lg mb-6 font-bold text-black">Explore our wide range of Personal Loan Options designed to fit your unique requirements.</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[20%]">Apply Now</button>
      </div>

    </div>
  );
};

export default PersonalHeroSection;
