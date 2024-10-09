import React from "react";
import mission from '../../assets/svg/home-loan.png'
import vission from '../../assets/svg/home-loan.png'

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50 py-16">
      {/* Vision & Mission Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-center text-indigo-800 mb-10">
          VISION & MISSION
        </h1>
        {/* <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          At Goal Corporation, we take pride in our dedicated team, cutting-edge infrastructure, and commitment to customer satisfaction.
        </p> */}
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300 flex">
          {/* Image Section */}
          <div className="w-1/3">
            <img
              src={mission} // Replace with your vision image URL
              alt="Our Vision"
              className="rounded-xl shadow-lg object-cover w-64 h-48"
            />
          </div>
          {/* Vision Content */}
          <div className="w-2/3 pl-6 border-l-4 border-indigo-600">
            <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To create an easy Access to Financial products by collaborating between financial intermediaries and customers through technology and digital platforms.            </p>
            {/* <p className="text-gray-700 text-lg leading-relaxed">
              We aim to refresh the world, inspire optimism and happiness, create value, and make a meaningful difference in the lives of those we serve.
            </p> */}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300 flex">
          {/* Image Section */}
          <div className="w-1/3">
            <img
              src={vission}
              alt="Our Mission"
              className="rounded-xl shadow-lg object-cover  w-64 h-48"
            />
          </div>
          {/* Mission Content */}
          <div className="w-2/3 pl-6 border-l-4 border-indigo-600">
            <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            To be a leader in Financial Consulting arena by increasing the market share through Pan India presence and enhance our disbursal capability. Touchbase every aspect of funding opportunities and explore newer market globally.
</p>
            {/* <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment to quality will continue to be our brand's greatest strength, allowing us to thrive in an ever-changing world. We focus on innovation and preparing for the future.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
