

import React from 'react';
import personal from '../../assets/loans/personal.webp';

const PersonalHeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img src={personal} alt="Home Loan" className="w-full h-[80vh] object-cover" />
      
      {/* Text Overlay */}
      <div className="absolute top-0 left-0  h-full flex flex-col justify-center items-left ml-36 text-white">
        <h1 className="text-4xl font-extrabold mb-4 text-left text-blue-700">Get the Personal Loan You<br></br> Need to Achieve Your Goals!<br></br> Apply for a Personal Loan <br></br>Today!</h1>
        <p className="text-lg mb-6 text-bold">Explore our wide range of Personal Loan Options designed to fit your unique requirements.</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition w-[20%]">Apply Now</button>
      </div>
      
      {/* SVG Shape Divider */}
      <div className="custom-shape-divider-bottom-1727767080">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className="shape-fill"
          />
        </svg>
      </div>

      {/* Custom CSS for the shape divider */}
      <style>
        {`
          .custom-shape-divider-bottom-1727767080 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
          }

          .custom-shape-divider-bottom-1727767080 svg {
            position: relative;
            display: block;
            width: calc(137% + 1.3px);
            height: 81px;
          }

          .custom-shape-divider-bottom-1727767080 .shape-fill {
            fill: #FFFFFF; /* Color of the curve */
          }
        `}
      </style>
    </div>
  );
};

export default PersonalHeroSection;
