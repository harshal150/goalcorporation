import React from "react";

const AboutInfo = () => {
  return (
    <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left side - Image and thumbnails */}
      <div className="space-y-4">
        {/* Main image */}
        <div>
          <img
            src="/assets/solution.webp"
            alt="Empowering MSMEs"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          <img
            src="/assets/planning.jpeg"
            alt="Planning"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/assets/advisory.jpeg"
            alt="Advisory"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/assets/building.jpeg"
            alt="Building"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="space-y-6">
        {/* <h4 className="text-blue-500 text-lg font-semibold">About Us</h4> */}
        <h1 className="text-4xl font-bold text-left text-indigo-800 mb-10">About Us</h1>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          We Help Our Clients To Achieve Their Desired Goals
        </h2>
        <p className="text-gray-600">
        We have professional and experience personnel in all our department, efficient management, skill team, state-of-art infrastructure and standard process are the real strength of Goal Corporation for meeting complete customer satisfaction


        </p>
        <p className="text-gray-600">
        Goal Corporation established in 2005 which has one decade of experience. located in garden city Bangalore, India.To support corporate and individuals by providing them total business solutions & has been synonymous with Excellence, Quality, Integrity, Environmental consciousness and pioneering spirit. With Financial Consultancy, Medical Equipments and Real Estate.
        </p>
        <a
          href="#!"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Know More
        </a>
      </div>
    </section>
  );
};

export default AboutInfo;
