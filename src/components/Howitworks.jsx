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
    className={`flex flex-col h-[95%] p-8 md:p-10 bg-white shadow-lg rounded-xl transition transform duration-500 ease-out w-[290px] border border-gray-200 relative overflow-hidden ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    } hover:scale-105 hover:shadow-2xl`}
  >
    <div className="relative z-10 grow">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 mx-auto rounded-full border border-gray-300"
      />
      <h4 className="my-4 font-extrabold text-2xl text-left text-[#2563EB] leading-tight">
        {item.title}
      </h4>
      <p className="opacity-75 mb-4 text-black text-left">{item.text}</p>
    </div>
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
        </div>
        <div className="relative">
        <div
  ref={scrollRef}
  className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:space-x-6 overflow-hidden justify-center scroll-smooth snap-x"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  {contents.map((item, i) => (
    <div
      key={i}
      className="snap-center content-card relative z-10 flex justify-center mb-6 md:mb-0" // Add vertical space only for mobile view
    >
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
