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
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex justify-between items-center px-10">
      <div className="mx-28 flex justify-between items-center ">
        {/* Left Section - Text */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            {title.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === 1 ? "text-red-500" : index === 3 ? "text-blue-500" : ""}
                // style={{fontSize:"50px"}}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <ul className="list-disc list-inside mt-8">
            <p>{description}</p>
          </ul>
          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
            Learn more
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2">
          <img src={image} alt={title} className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
