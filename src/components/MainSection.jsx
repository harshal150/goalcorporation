import React, { useEffect, useState } from "react";
import "./MainSection";
import { Navbar } from "./Navbar";

// export const MainSection = () => {
//   const carouselData = [
//     {
//       image: "/assets/science1.webp",
//       title: "SCIENTIFIC EQUIPMENTS",
//       description:
//         "We provide best quality scientific equipment for your clinic laboratories.",
//     },
//     {

//       image: "/assets/building.jpeg",
//       title: "FINANCIAL CONSULTANCY",
//       description:
//         "Financial services clients develop and maintain competitive advantages, enabling them to win in an increasingly challenging market.",
//     },
//     {
//       image: "/assets/financial_consultancy.webp",
//       title: "REAL ESTATE SERVICES",
//       description:
//         "We have well-trained and qualified executives to handle any kind of realty requirement balancing the need and the budget with the art of excellent services.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//     }, 5000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [carouselData.length]);

//   // Handle dot click
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   // Navigate to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//   };
//   return (
//     <div className="relative">
//       <div className="bgImage w-full h-[70vh] bg-cover bg-center relative">
//         <img
//           src={carouselData[currentIndex].image}
//           alt="carousel"
//           className="bg-contain bg-center w-full h-[70vh] transition-opacity duration-1000"
//         />
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>
// {/* Text content */}
// <div className="absolute inset-0 flex items-center justify-center">
//   <div className="text-white p-8">
//     {/* Title with border only around its content */}
//     <p className="border py-2 px-4 font-bold text-[40px] inline-block">
//       {carouselData[currentIndex].title}
//     </p>

//     {/* Description */}
//     <p className="mt-6 mb-10 font-semibold">
//       {carouselData[currentIndex].description}
//     </p>

//     {/* Button */}
//     <a
//       href="#"
//       className="mt-10 text-2xl font-bold px-6 py-3 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
//     >
//       More Products
//     </a>

// </div>

//         </div>

//         {/* Custom SVG curve at the bottom */}
//         <div className="custom-shape-divider-bottom-1727092237">
//           <svg
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//               className="shape-fill"
//             />
//           </svg>
//         </div>
//         <style>
//           {`
//             .custom-shape-divider-bottom-1727092237 {
//               position: absolute;
//               bottom: 0;
//               width: 100%;
//               overflow: hidden;
//               line-height: 0;
//             }

//             .custom-shape-divider-bottom-1727092237 svg {
//               position: relative;
//               display: block;
//               width: 100%;
//               height: 70px; /* Adjust this height to fit */
//             }

//             .custom-shape-divider-bottom-1727092237 .shape-fill {
//               fill: #FFFFFF;
//             }
//           `}
//         </style>
//         {/* Previous and Next Arrows */}
//         {currentIndex > 0 && (
//           <button
//             className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-[50px] font-bold bg-opacity-50 p-3 rounded-full"
//             onClick={prevSlide}
//           >
//             ‹
//           </button>
//         )}
//         {currentIndex < carouselData.length - 1 && (
//           <button
//             className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-[50px] font-bold bg-opacity-50 p-3 rounded-full"
//             onClick={nextSlide}
//           >
//             ›
//           </button>
//         )}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
//         {carouselData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 rounded-full border ${
//               currentIndex === index ? "bg-white" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };


export const MainSection = () => {
  const carouselData = [
    {
      image: "/assets/solution.webp",
      title: "Empowering MSMEs With Quick Loan",
      description:
        "Get fast and flexible financing options tailored specifically for Micro, Small, and Medium Enterprises (MSMEs) to support your business growth and operations.",
    },
    {
      image: "/assets/planning.jpeg",
      title: "Balance Transfer of Loan",
      description:
        "Save on interest costs by transferring your existing loan to us at lower rates. Enjoy easy repayment options and better financial management with our balance transfer solutions.",
    },
    {
      image: "/assets/advisory.jpeg",
      title: "Debt Consolidation & Refinance",
      description:
        "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
    },
    {
      image: "/assets/building.jpeg",
      title: "Lease Rental Discounting",
      description:
        "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
    },
    {
      image: "/assets/advisory.jpeg",
      title: "One Stop Solution for All Kinds",
      description:
        "Access a comprehensive range of financial services, from loans to investment advice, all tailored to meet diverse business and personal needs under one roof.",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [carouselData.length]);

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <section className="relative h-[610px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={carouselData[currentIndex].image}
          alt="Background"
          className="w-full h-full object-center opacity-80" // Ensure image covers full container and is slightly transparent
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>{" "}
      {/* Overlay for improved text visibility */}
      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-[60px] md:leading-[75px]  font-bold mb-4 text-white">
          {carouselData[currentIndex].title}
        </h2>
        {/* Description */}
        <p className="text-lg md:text-2xl max-w-6xl text-white opacity-80 mb-6 ">
          {carouselData[currentIndex].description}
        </p>
        {/* Button */}
        <a
          href="#!"
          className="text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
      {/* Button Container */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};
