import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import one from '../assets/Whychoose/11.jpg'
import two from '../assets/Whychoose/22.jpg'
import three from '../assets/Whychoose/3.jpg'
import four from '../assets/Whychoose/44.jpg'

const contents = [
  {
    image: one,
    title: "Dedicated relationship manager",
    text: "Our team is dedicated to building long-term relationships with clients, providing personalized support and guidance throughout your financial journey.",
  },
  {
    image: two,
    title: "Easy approval",
    text: "Get expert advice and assistance from your dedicated manager, ensuring all your financial needs are met efficiently and effectively.",
  },
  {
    image: three,
    title: "Quick Dispersal",
    text: "Experience fast and hassle-free loan disbursements directly into your account, helping you access funds precisely when you need them.",
  },
  {
    image: four,
    title: "One Stop Solution",
    text: "Whether it's a personal loan, home loan, or business loan, we offer a comprehensive range of financial solutions tailored to meet your diverse needs.",
  },
];

const ContentItem = ({ item }) => (
  <div className="flex flex-col h-[100%] p-8 md:p-10 bg-white shadow-lg rounded-xl transition transform hover:scale-105 duration-300 w-[350px] border border-gray-200">
    <div className="grow">
      {/* Rounded image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 mx-auto rounded-full border border-gray-300"
      />
      {/* Title with improved styling */}
      <h4 className="my-4 font-extrabold text-2xl text-left text-[#1A237E] leading-tight">
        {item.title}
      </h4>
      {/* Description aligned to the left */}
      <p className="opacity-75 mb-4 text-black text-left">{item.text}</p>
    </div>
    {/* Smaller Button */}
    <button className="rounded-2xl py-2 px-4 text-[15px] font-semibold bg-[#1A237E] text-white hover:bg-[#4955d3] mt-4 transition duration-300 ease-in-out">
      Learn More
    </button>
  </div>
);



ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Howitworks = () => {
  const scrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    // Calculate and set the scroll amount dynamically based on the width of three cards
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".content-card");
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24; // Adding 24px for spacing between cards (space-x-6)
        setScrollAmount(cardWidth * 3); // Scroll by three cards at a time
      }
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 md:py-24 bg-[#E0F7FA] text-green-900 dark:text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-snug font-bold capitalize md:text-5xl mb-4 text-green-950">
            Why Choose Us
          </h2>
          <p className="text-[17px] leading-normal opacity-90 text-[#1A237E] dark:text-black-200 font-semibold">
            Discover how our solutions can benefit you
          </p>
        </div>
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden justify-center scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox and IE
          >
            {contents.map((item, i) => (
              <div key={i} className="snap-center content-card">
                <ContentItem item={item} />
              </div>
            ))}
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
