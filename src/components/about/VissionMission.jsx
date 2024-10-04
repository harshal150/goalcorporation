import React from "react";

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50 py-16">
      {/* Vision & Mission Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-center text-indigo-800 mb-10">VISION & MISSION</h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          At Goal Corporation, we take pride in our dedicated team, cutting-edge infrastructure, and commitment to customer satisfaction.
        </p>
      </div>

            {/* Vision Section */}
            <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300">
          <div className="border-l-4 border-indigo-600 pl-6">
            <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our vision guides every aspect of our business. We strive for innovation, creating a roadmap for sustainable growth while focusing on customer satisfaction and positive impact.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We aim to refresh the world, inspire optimism and happiness, create value, and make a meaningful difference in the lives of those we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto ">
        <div className="bg-white p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300">
          <div className="border-l-4 border-indigo-600 pl-6">
            <h2 className="text-4xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Goal Corporation's pursuit of quality is embedded in our people, products, and services. We aim to deliver an unparalleled experience to all of our constituents—customers, employees, vendors, and end-users.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment to quality will continue to be our brand's greatest strength, allowing us to thrive in an ever-changing world. We focus on innovation and preparing for the future.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default VisionMission;
