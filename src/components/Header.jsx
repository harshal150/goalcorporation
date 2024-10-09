import React, { useState, useEffect } from 'react';
import one from '../assets/Header/new1.jpg';
import two from '../assets/Header/new2.jpg';

const Header = () => {
  const carouselData = [
    {
      image: one,
      title: "Empowering MSMEs With Quick Loan",
      description:
        "Get fast and flexible financing options tailored specifically for Micro, Small, and Medium Enterprises (MSMEs) to support your business growth and operations.",
    },
    {
      image: two,
      title: "Balance Transfer of Loan",
      description:
        "Save on interest costs by transferring your existing loan to us at lower rates. Enjoy easy repayment options and better financial management with our balance transfer solutions.",
    },
    {
      image: one,
      title: "Debt Consolidation & Refinance",
      description:
        "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
    },
    {
      image: two,
      title: "Lease Rental Discounting",
      description:
        "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
    },
    {
      image: one,
      title: "One Stop Solution for All Kinds of Loans",
      description:
        "Access a comprehensive range of financial services, from loans to investment advice, all tailored to meet diverse business and personal needs under one roof.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [carouselData.length]);

  const { image, title, description } = carouselData[currentIndex];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
      {/* Text Section */}
      <div className="max-w-lg text-center lg:text-left mt-10 lg:mt-0 lg:mr-10">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index === 1 ? "text-red-500" : index === 3 ? "text-blue-500" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-[8px] sm:text-base md:text-base xl:text-base 2xl:text-2xl uppercase font-semibold">
          {description}
        </p>
        <button className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-8 sm:py-3 md:px-6 md:py-3 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={image} alt={title} className="max-w-full h-auto object-contain mix-blend-multiply" />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
