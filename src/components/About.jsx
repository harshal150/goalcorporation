import React from 'react';
import bank from '../assets/about/banking.png'
import Payment from '../assets/about/payment_16959732.png'
import map from '../assets/about/map_10588713.png'
import exp from '../assets/about/exper.png'

const About = () => {
  return (

<div className="bg-white p-8 rounded-xl shadow-xl max-w-7xl  mx-auto mt-24 ">
    {/* Flex container to align content in a row */}
    <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
      
      {/* Left section: Title, description, and button */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-blue-500 text-5xl font-semibold mb-4">
          <div className="logo text-[40px] mt-4 ">
            <span className="mx-1 font-bold relative inline-block stroke-current">
              Goal Corporation
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </div>
        </h3>
        <p className="text-xl font-medium mb-4">
          We Help Our Clients To Get Best Loan
        </p>
        <p className="text-gray-600 mb-6">

        Goal Corporation, with a PAN India presence in over 1,000 cities, is a leading credit lending establishment. Founded by financial experts with 25+ years of experience, we have served over 1 million clients and successfully disbursed loans exceeding ₹1,00,000 crores through partnerships with 265+ banks and NBFCs. We are committed to helping you make smarter financial decisions with personalized solutions. Connect with us today to secure your financial future!
</p>
        <p className="text-gray-600 mb-8">
          Connect with us to help you make your financial decisions right and smart.
        </p>
        <button className="flex items-center text-red-500 font-semibold hover:underline">
          Watch Video
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
  
      {/* Right section: Statistics */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-8">
        <div className="text-center">
          <img src={bank} alt="Partner Banks" className="w-16 h-16 mx-auto mb-4"/>
          <p className="text-2xl font-bold">100+</p>
          <p className="text-gray-500">Partner Banks & NBFCs</p>
        </div>
        <div className="text-center">
          <img src={map} alt="Branches" className="w-16 h-16 mx-auto mb-4"/>
          <p className="text-2xl font-bold">1000+</p>
          <p className="text-gray-500">Branches Across India</p>
        </div>
        <div className="text-center">
          <img src={Payment} alt="Disbursal" className="w-16 h-16 mx-auto mb-4"/>
          <p className="text-2xl font-bold">₹1,00,000 L+</p>
          <p className="text-gray-500">Successful Disbursal</p>
        </div>
        <div className="text-center">
          <img src={exp} alt="Experience" className="w-16 h-16 mx-auto mb-4"/>
          <p className="text-2xl font-bold">25+</p>
          <p className="text-gray-500">Years of Experience</p>
        </div>
      </div>
  
    </div>
  </div>

  
  );
}

export default About;
