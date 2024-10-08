import React, { useEffect, useState } from "react";
import team from '../../assets/team.jpg';

const AboutInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="">
      <div className="sm:flex items-center max-w-screen-xl mx-auto mt-7">
        {/* Image Section with Slide-In from Left */}
        <div
          className={`sm:w-1/2 p-10 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="image object-center text-center">
            <img src={team} alt="Team" className="rounded-2xl" />
          </div>
        </div>

        {/* Text Section with Slide-In from Right */}
        <div
          className={`sm:w-1/2 p-5 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="text">
            <h1 className="text-5xl font-bold text-left text-indigo-800 mb-10">
              About <span className="text-indigo-600">Goal Corporation</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Goal Corporation established in 2005 which has one decade of experience. located in garden city Bangalore, India. To support corporate and individuals by providing them total business solutions & has been synonymous with Excellence, Quality, Integrity, Environmental consciousness, and pioneering spirit. With Financial Consultancy, Medical Equipments, and Real Estate.
            </p>
            <br />
            <p className="text-gray-700 text-lg leading-relaxed">
              We have professional and experienced personnel in all our departments. Efficient management, a skilled team, state-of-the-art infrastructure, and standardized processes are the real strengths of Goal Corporation for meeting complete customer satisfaction. Purity, Wide Range, Innovations, Hard work & Customer satisfaction are the secrets of the success of Goal Corporation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
