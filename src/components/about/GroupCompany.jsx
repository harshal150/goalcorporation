import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const GroupCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the component comes into view
          }
        });
      },
      { threshold: 0.1 } // Trigger the animation when 20% of the component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-12 mb-20 max-w-7xl mx-auto text-center p-6 ">
      <h1 className="text-5xl font-bold text-center text-indigo-800 uppercase mb-16">
        Group Companies
      </h1>

      <div
        ref={elementRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {[
          {
            name: "Goal Corporation",
            description: "Full featured framework for building iOS, Android & desktop apps",
            img: "https://swiperjs.com/images/projects/framework7.svg",
            alt: "Framework7",
          },
          {
            name: "Saarthi.com",
            description: "Full featured framework for building iOS, Android & desktop apps",
            img: "https://swiperjs.com/images/projects/framework7.svg",
            alt: "Framework7",
          },
          {
            name: "RuLoans",
            description: "Stunning touch-friendly 3D parallax hover effects",
            img: "https://swiperjs.com/images/projects/atropos.svg",
            alt: "Atropos",
          },
        
        ].map((company, index) => (
          <Link
            key={index}
            className="group flex flex-col items-center justify-center w-[340px] sm:w-[400px] lg:w-[420px] h-full p-6 text-center bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 ease-in-out"
            to="#"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-20 h-20 sm:w-32 sm:h-32 mb-4"
              src={company.img}
              alt={company.alt}
            />
            <div className="font-bold text-[30px] sm:text-[30px] uppercase text-blue-600">
              {company.name}
            </div>
            <div className="text-sm opacity-75 mt-7">{company.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupCompany;
