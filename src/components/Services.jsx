// import React, { useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
// import {
//   faHourglass,
//   faLifeRing,
//   faLightbulb,
//   faWindowRestore,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, useNavigate } from "react-router-dom";

// const contents = [
//   {
//     color: "bg-red-500",
//     shadow: "shadow-red-500",
//     icon: faLightbulb,
//     title: "Personal Loan",
//     image: 'assets/bsloan.avif',
//     text: "A personal loan can help cover major expenses, consolidate debt, or fund large purchases. With our flexible repayment options, we ensure that your financial needs are met with ease. Whether it's for a wedding, education, or emergency, our low-interest personal loans are designed to support your life events without financial strain.",
//   },
//   {
//     color: "bg-yellow-500",
//     shadow: "shadow-yellow-500",
//     icon: faLifeRing,
//     title: "Home Loan",
//     image: 'assets/homeloan.avif',
//     text: "Owning your dream home is now possible with our home loan solutions. We offer competitive interest rates and long-term repayment plans that suit your needs. Whether you're a first-time buyer or looking to refinance, our team of experts will guide you through each step of the process. Achieve your goal of homeownership with ease.",
//   },
//   {
//     color: "bg-teal-500",
//     shadow: "shadow-teal-500",
//     icon: faWindowRestore,
//     image: 'assets/bloan.avif',
//     title: "Business Loan",
//     text: "Fuel your business growth with our business loans designed for SMEs and large corporations alike. From expansion to operational costs, we provide the necessary financial support with flexible loan terms, easy approval processes, and expert business advisory services. Grow your business without the worry of cash flow issues.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: 'assets/loanproperty.avif',
//     title: "Loan Against Property",
//     text: "Leverage the value of your property to secure financing for personal or business needs. Our Loan Against Property offers attractive interest rates and high loan amounts based on the market value of your property. Whether you need funds for expansion or personal goals, this loan is an excellent solution.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: 'assets/wc.avif',
//     title: "Working Capital Loan",
//     text: "Maintain seamless business operations with our Working Capital Loans. This loan is ideal for businesses looking to manage cash flow gaps, fund daily operations, and purchase inventory. We offer flexible repayment options and quick disbursal to ensure your business runs smoothly.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: 'assets/dr.avif',
//     title: "Debt Restructuring",
//     text: "Struggling with debt repayment? Our Debt Restructuring services are designed to help you regain financial stability. We offer tailored solutions that reduce your debt burden, lower monthly payments, and create a sustainable financial plan for your future. Get back on track with our expert assistance.",
//   },
// ];

// const ContentItem = ({ index, item, onHoverChange }) => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   // Function to handle button click and navigate to the desired route
//   const handleButtonClick = () => {
//     switch (item.title) {
//       case "Personal Loan":
//         navigate("/personalloan");
//         break;
//       case "Home Loan":
//         navigate("/homeloan");
//         break;
//       case "Business Loan":
//         navigate("/businessloan");
//         break;
//       case "Loan Against Property":
//         navigate("/loanagaints");
//         break;
//       case "Working Capital Loan":
//         navigate("/workingcapital");
//         break;
//       case "Debt Restructuring":
//         navigate("/debtrestructure");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div
//       className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-2 w-full max-w-[500px] h-[320px] flex flex-col items-start relative mb-3"
//       onMouseEnter={() => onHoverChange(false)} // Stop scrolling on hover
//       onMouseLeave={() => onHoverChange(true)}  // Resume scrolling when unhovered
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="absolute top-4 right-4 w-16 h-16 ml-4 rounded-full object-cover border-2 border-white shadow-md"
//       />

//       <h3 className="text-3xl font-extrabold text-blue-600 mb-9 pr-5">
//         <Link to="/homeloan">{item.title}</Link>
//       </h3>

//       <p className="text-gray-700 text-base leading-6 text-start font-semibold">
//         {item.text}
//       </p>

//       <div className="flex-grow"></div>

//       {/* Apply button with navigation onClick */}
//       <button
//         className="absolute bottom-4 right-4 bg-green-400 text-white mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition-transform duration-200 hover:bg-blue-600 hover:scale-105"
//         onClick={handleButtonClick}  // Trigger the navigation
//       >
//         Apply for {item.title}
//       </button>
//     </div>
//   );
// };

// ContentItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   index: PropTypes.number.isRequired,
//   onHoverChange: PropTypes.func.isRequired,
// };

// const Services = () => {
//   const scrollContainerRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(true); // Initial state allows scrolling

//   const startAutoScroll = () => {
//     if (scrollContainerRef.current && isHovered) {
//       const container = scrollContainerRef.current;
//       container.scrollLeft += 1;

//       if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//         container.scrollLeft = 0;
//       }
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(startAutoScroll, 20);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section className="ezy__howitworks12 text-black bg-[#E0F7FA] py-14 md:py-24 text-center relative overflow-hidden z-[10]">
//       <div className="container px-4">
//         <h2 className="text-2xl md:text-[45px]  text-left text-[#1A237E] leading-none  mx-16 font-bold tracking-wide capitalize mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105 text-gradient">
//           Committed to Provide Best Services for All Your Loan Requirements...
//         </h2>

//         <div
//           ref={scrollContainerRef}
//           className={`flex gap-2 mt-12 md:mt-20 scrollbar-hide snap-x snap-mandatory scroll-smooth animate-scroll ${
//           !isHovered ? "pause-animation" : ""
//         }`}
//         >
//           {[...contents, ...contents].map((item, i) => (
//             <div className="snap-start flex-shrink-0 w-[550px]" key={i}>
//               <ContentItem
//                 index={i + 1}
//                 item={item}
//                 onHoverChange={setIsHovered}  // Pass the state handler
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faHourglass, faLifeRing, faLightbulb, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const contents = [
  {
    color: "bg-red-500",
    shadow: "shadow-red-500",
    icon: faLightbulb,
    title: "Personal Loan",
    image: 'assets/bsloan.avif',
    text: "A personal loan can help cover major expenses, consolidate debt, or fund large purchases. With our flexible repayment options, we ensure that your financial needs are met with ease. Whether it's for a wedding, education, or emergency, our low-interest personal loans are designed to support your life events without financial strain.",
  },
  {
    color: "bg-yellow-500",
    shadow: "shadow-yellow-500",
    icon: faLifeRing,
    title: "Home Loan",
    image: 'assets/homeloan.avif',
    text: "Owning your dream home is now possible with our home loan solutions. We offer competitive interest rates and long-term repayment plans that suit your needs. Whether you're a first-time buyer or looking to refinance, our team of experts will guide you through each step of the process. Achieve your goal of homeownership with ease.",
  },
  {
    color: "bg-teal-500",
    shadow: "shadow-teal-500",
    icon: faWindowRestore,
    image: 'assets/bloan.avif',
    title: "Business Loan",
    text: "Fuel your business growth with our business loans designed for SMEs and large corporations alike. From expansion to operational costs, we provide the necessary financial support with flexible loan terms, easy approval processes, and expert business advisory services. Grow your business without the worry of cash flow issues.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: 'assets/loanproperty.avif',
    title: "Loan Against Property",
    text: "Leverage the value of your property to secure financing for personal or business needs. Our Loan Against Property offers attractive interest rates and high loan amounts based on the market value of your property. Whether you need funds for expansion or personal goals, this loan is an excellent solution.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: 'assets/wc.avif',
    title: "Working Capital Loan",
    text: "Maintain seamless business operations with our Working Capital Loans. This loan is ideal for businesses looking to manage cash flow gaps, fund daily operations, and purchase inventory. We offer flexible repayment options and quick disbursal to ensure your business runs smoothly.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: 'assets/dr.avif',
    title: "Debt Restructuring",
    text: "Struggling with debt repayment? Our Debt Restructuring services are designed to help you regain financial stability. We offer tailored solutions that reduce your debt burden, lower monthly payments, and create a sustainable financial plan for your future. Get back on track with our expert assistance.",
  },
];

const ContentItem = ({ item }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/${item.title.replace(/\s+/g, "").toLowerCase()}`);
  };

  return (
    <div className="bg-white  rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-2 w-full h-[400px] flex flex-col items-start relative mb-3">
      <img
        src={item.image}
        alt={item.title}
        className="absolute top-4 right-4 w-14 h-14 ml-4 rounded-full object-cover border-2 border-white "
      />
      <h3 className="text-3xl font-extrabold text-blue-600 text-left mb-9 pr-5">
        <Link to="/homeloan">{item.title}</Link>
      </h3>
      <p className="text-gray-700 text-base leading-6 text-start font-semibold">
        {item.text}
      </p>
      <div className="flex-grow"></div>
      <button
        className="absolute bottom-4 right-4 bg-green-400 text-white mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition-transform duration-200 hover:bg-blue-600 hover:scale-105"
        onClick={handleButtonClick}
      >
        Apply for {item.title}
      </button>
    </div>
  );
};

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = contents.length;
  const visibleCards = 3;
  const gap = 20; // Add space between cards (in pixels)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextCard();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, []);

  return (
    <section className="ezy__howitworks12 text-black bg-[#E0F7FA] py-14 md:py-24 text-center relative overflow-hidden z-[10]">
      <div className="container w-full px-4">
        <h2 className="text-2xl md:text-[45px] text-left text-[#1A237E] leading-none mx-16 font-bold tracking-wide capitalize mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105 text-gradient">
          Committed to Provide Best Services for All Your Loan Requirements...
        </h2>

        <div className="relative mt-12 md:mt-20 flex items-center justify-center ml-14">
          {/* Left Arrow */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full z-10 hover:bg-blue-700"
          >
            &#8592;
          </button>

          <div className="overflow-hidden w-full max-w-[1500px]">
            {/* Slide Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                gap: `${gap}px`, // Adding gap between cards
              }}
            >
              {/* Map through cards and add margin to each */}
              {[...contents, ...contents.slice(0, visibleCards)].map((item, i) => (
                <div className="w-[calc(33.33%-20px)] flex-shrink-0" key={i}>
                  <ContentItem item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full z-10 hover:bg-blue-700"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
