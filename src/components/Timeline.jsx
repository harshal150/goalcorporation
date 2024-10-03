import React from "react";
import {
  FaRocket,
  FaHandshake,
  FaGlobe,
  FaBriefcase,
  FaRupeeSign,
  FaChartLine,
} from "react-icons/fa";
import logo1 from "../assets/pinkTag.svg";
import logo2 from "../assets/blueTag.svg";
import one from "../assets/Timeline/1.jpg";
import two from "../assets/Timeline/2.jpg";
import three from "../assets/Timeline/3.jpg";
import four from "../assets/Timeline/4.jpg";
import five from "../assets/Timeline/5.jpg";
import six from "../assets/Timeline/6.jpg";

const images = [one, two, three, four, five, six];

const timelineData = [
  {
    year: "2005",
    title:
      "2 individuals meet and decide to change the finance business model. An IDEA called GOAL was born",
    icon: <FaRocket />,
    logo: logo2,
    position: "bottom",
  },
  {
    year: "2009",
    title:
      "GOAL becomes a huge success and ventures into real Estate business with 2 companies.",
    icon: <FaHandshake />,
    logo: logo1,
    position: "top",
  },
  {
    year: "2012",
    title:
      "Goal Corporation becomes Private Limited company and achieved 100cr disbursal volume",
    icon: <FaGlobe />,
    logo: logo1,
    position: "bottom",
  },
  {
    year: "2016",
    title:
      "Journey of Philanthropy begins with establishing of Goal International school",
    icon: <FaBriefcase />,
    logo: logo2,
    position: "top",
  },
  {
    year: "2017",
    title:
      `Goal Expands its wings with establishing 3 more companies. Goal Infrastructure 2017: Goal BioMedicals 2021: Hubstairs CoWorks`,
    icon: <FaBriefcase />,
    logo: logo1,
    position: "bottom",
  },
  {
    year: "2024",
    title:
      "All GOAL financial business under one umbrella       Goal Corporation Pvt Ltd.",
    icon: <FaChartLine />,
    logo: logo2,
    position: "top",
  },
];

const Timeline = () => {
  return (
    <>
      <h1 className=" font-bold text-[40px] text-center mt-16">
        We Have The Best Team And The Best Process
      </h1>
      <div className="relative flex justify-center items-start mt-14">
        {/* Timeline container */}
        <div className="flex justify-between align-middle items-center w-full max-w-7xl space-x-16">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-1/6">
              {/* If position is 'top', title and dotted line are displayed above the image */}
              {item.position === "top" && (
                <>
                  {/* Title */}
                  <div className="mb-4"> {/* Reduced margin */}
                    <p className="text-center font-semibold text-gray-600 text-sm">
                      {item.title}
                    </p>
                  </div>

                  {/* Dotted Line */}
                  <div className="relative mb-2"> {/* Reduced margin */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div> {/* Reduced height */}
                  </div>
                </>
              )}

              {/* Small Image above Logo 1 (if position is 'bottom') */}
              {item.position === "bottom" && (
                <div className="mb-2"> {/* Reduced margin */}
                  <img
                    src={images[index]}
                    alt={`small image ${index}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}

              {/* Image with Year */}
              <div className="relative">
                <img
                  src={item.logo}
                  alt={`timeline icon ${index}`}
                  className="h-32 w-32"  // Reduced size
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <p className="text-black font-bold text-lg">{item.year}</p>
                </div>
              </div>

              {/* Small Image below Logo 2 (if position is 'top') */}
              {item.position === "top" && (
                <div className="mt-2"> {/* Reduced margin */}
                  <img
                    src={images[index]}
                    alt={`small image ${index}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}

              {/* If position is 'bottom', title and dotted line are displayed below the image */}
              {item.position === "bottom" && (
                <>
                  {/* Dotted Line */}
                  <div className="relative mt-2"> {/* Reduced margin */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div> {/* Reduced height */}
                  </div>

                  {/* Title */}
                  <div className="mt-16"> {/* Reduced margin */}
                    <p className="text-center font-semibold text-gray-600 text-sm">
                      {item.title}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
