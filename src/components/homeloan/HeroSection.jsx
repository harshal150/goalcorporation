import React from 'react';
import homepage from '../../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';
import svgicon from '../../assets/loansNew/1.jpg';
import personal from '../../assets/loans/hy (1).jpg'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();

  const HandleClick = () => {
    window.open('https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8', '_blank');
  };
  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
          Make Your Home ownership
          Dreams Come True with Our{' '}
          <span className="text-red-500">Home Loan Solution!</span>
        </h1>
        <p className="mt-6 text-[10px] sm:text-base md:text-lg xl:text-lg 2xl:text-2xl uppercase font-semibold">
          Discover a variety of Home Loan Options with flexible terms and competitive rates whether <br /> you're buying a dream home or refinancing needs.
        </p>
        <button onClick={HandleClick} className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
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
