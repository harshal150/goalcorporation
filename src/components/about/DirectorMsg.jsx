import React, { useEffect, useRef, useState } from "react";
import logo from '../../assets/DirectorImage.jpg';

const DirectorMsg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // Create a ref to track the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the component is in view
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold for when to trigger the animation
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">DIRECTOR'S MESSAGE</h1>

      <div
        ref={elementRef} // Attach the ref to the div to observe it
        className={`max-w-full mx-14 flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg p-8 transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {/* Image Section */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-center mb-6 md:mb-0">
          <img
            className="w-48 h-60 rounded-md shadow-md"
            src={logo} // Replace with the actual image source
            alt="Person"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full md:pl-2">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Dear Visitor,
            <br />
            We at Goal Corporation have entered a new and very exciting phase in our journey... one of taking Goal Corporation global. We have set ambitious goals for ourselves - of being a well-known brand in most countries. We are fortunate to have young, dynamic professionals, partnering with us to achieve this.
            <br />
            <br />
            We have always believed in quality - be it in our work, our service or our products. Each one embodies our underlying ethos: that no task is too small and that God is in the details. We realize that in today's scenario, when people are being bombarded with information and products, we need to stand out. It is through our belief in the quality and efficacy of our product that we stand confident and poised to take on the world!
          </p>

          {/* Name and Designation */}
          <div className="pt-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-800">Aram Nayak</h2>
            <p className="text-gray-500">Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMsg;
