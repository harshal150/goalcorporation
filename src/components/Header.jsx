import React, { useState, useEffect } from 'react';
import one from '../assets/Header/1.Phih8P4ACnRCSURBVHic7P15tK35fdf5vX';
import two from '../assets/Header/2.png';
import four from '../assets/Header/4.webp';
import three from '../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';

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
      image: three,
      title: "Debt Consolidation & Refinance",
      description:
        "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
    },
    {
      image: four,
      title: "Lease Rental Discounting",
      description:
        "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
    },
    {
      image: one,
      title: "One Stop Solution for All Kinds",
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
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[100vh] md:h-[75vh]  flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
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
        <p className="mt-6 text-[10px] sm:text-base md:text-lg xl:text-lg 2xl:text-2xl uppercase font-semibold">
          {description}
        </p>
        <button className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={image} alt={title} className="max-w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Header;
