import React, { useState, useEffect, useRef } from "react";
import {
  FaRocket,
  FaHandshake,
  FaBriefcase,
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
      "GOAL becomes a huge success and ventures into diversified business - Real Estate, Construction ,",
    icon: <FaHandshake />,
    logo: logo1,
    position: "top",
  },
  {
    year: "2016",
    title:
      "Journey of Philanthropy begins with establishing of Goal International school",
    icon: <FaBriefcase />,
    logo: logo2,
    position: "bottom",
  },
  {
    year: "2017",
    title:
      "Goal Expands its wings with establishing 3 more companies. Goal Infrastructure 2017: Goal BioMedicals 2021: Hubstairs CoWorks",
    icon: <FaBriefcase />,
    logo: logo1,
    position: "top",
  },
  {
    year: "2020",
    title:
      "Goal Expands its wings with co-working space and infrastructure development business",
    icon: <FaBriefcase />,
    logo: logo1,
    position: "bottom",
  },
  {
    year: "2024",
    title:
      "Goal become core corporate with consolidation and holding company formation",
    icon: <FaChartLine />,
    logo: logo2,
    position: "top",
  },
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => [
              ...prevVisibleItems,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const isItemVisible = (index) => visibleItems.includes(String(index));

  return (
    <>
    <div className=" bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5] p-2">

    <h1 className="font-bold text-[40px] text-center mt-20 uppercase text-blue-700 ">
        We Have The Best Team And The Best Process
      </h1>
      <div className="relative flex justify-center items-start mt-14">
        {/* Timeline container */}
        <div className="flex justify-between align-middle items-center w-full max-w-7xl space-x-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex flex-col items-center w-1/6 transition-transform duration-1000 ease-out ${
                isItemVisible(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {item.position === "top" && (
                <>
                  <div className="mb-4">
                    <p className="text-center font-semibold text-gray-600 text-sm">
                      {item.title}
                    </p>
                  </div>
                  <div className="relative mb-2">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div>
                  </div>
                </>
              )}

              {item.position === "bottom" && (
                <div className="mb-2">
                  <img
                    src={images[index]}
                    alt={`small image ${index}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}

              <div className="relative">
                <img
                  src={item.logo}
                  alt={`timeline icon ${index}`}
                  className="h-32 w-32"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <p className="text-black font-bold text-lg">{item.year}</p>
                </div>
              </div>

              {item.position === "top" && (
                <div className="mt-2">
                  <img
                    src={images[index]}
                    alt={`small image ${index}`}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}

              {item.position === "bottom" && (
                <>
                  <div className="relative mt-2">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div>
                  </div>
                  <div className="mt-16">
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
    </div>

    </>
  );
};

export default Timeline;
