import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import one from '../assets/HowItWorks/1.avif';
import two from '../assets/HowItWorks/2.jpg';
import three from '../assets/HowItWorks/3.jpg';
import four from '../assets/HowItWorks/44.jpg';

const contents = [
  {
    image: one,
    title: "Dedicated Relationship Manager",
    text: "Our team is dedicated to building long-term relationships with clients, providing personalized support and guidance throughout your financial journey.",
  },
  {
    image: two,
    title: "Easy Approval",
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

const ContentItem = ({ item, isVisible }) => (
  <div
    className={`flex flex-col h-[100%] p-8 md:p-10 bg-white shadow-lg rounded-xl transition transform duration-500 ease-out w-[350px] border border-gray-200 relative overflow-hidden ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    } hover:scale-105 hover:shadow-2xl`}
  >
    <div className="relative z-10 grow">
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 mx-auto rounded-full border border-gray-300"
      />
      <h4 className="my-4 font-extrabold text-2xl text-left text-[#2563EB] leading-tight">
        {item.title}
      </h4>
      <p className="opacity-75 mb-4 text-black text-left">{item.text}</p>
    </div>
    <button className="rounded-lg py-2 px-4 text-[15px] font-semibold bg-[#4ade80] text-white mt-4 transition duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-110 shadow-md">
      Learn More
    </button>
  </div>
);

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Howitworks = () => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

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
      { threshold: 0.5 }
    );

    const contentCards = scrollRef.current.querySelectorAll(".content-card");
    contentCards.forEach((card, index) => {
      observer.observe(card);
      card.dataset.index = index;
    });

    return () => {
      contentCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const isItemVisible = (index) => visibleItems.includes(String(index));

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-white via-[#E0F7FA] to-[#b3e5fc] text-green-900 dark:text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-snug font-bold  md:text-5xl mb-4 text-[#1A237E] uppercase">
            Why Choose Us
          </h2>
          {/* <p className="text-[17px] leading-normal opacity-90 text-[#1A237E] dark:text-black-200 font-semibold">
            Discover how our solutions can benefit you
          </p> */}
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden justify-center scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {contents.map((item, i) => (
              <div key={i} className="snap-center content-card relative z-10">
                <ContentItem item={item} isVisible={isItemVisible(i)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
