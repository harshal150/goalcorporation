import React, { useState } from "react";

const partners = [
  { name: "Unity", logo: "assets/partner/frame1.png" },
//   { name: "Vastu Housing Finance", logo: "/assets/partner/frame1.png" },
  { name: "IDFC First Bank", logo: "/assets/partner/frame2.png" },
  { name: "Ashv Finance", logo: "/assets/partner/frame3.png" },
  { name: "DBS Bank", logo: "/assets/partner/frame4.png" },
  { name: "Edelweiss", logo: "/assets/partner/frame5.png" },
  { name: "IIFL Finance", logo: "/assets/partner/frame6.png" },
  { name: "Fullerton India", logo: "/assets/partner/frame7.png" },
  { name: "Bank of Baroda", logo: "/assets/partner/frame8.png" },
  { name: "InCred", logo: "/assets/partner/frame9.png" },
  { name: "Fedfina", logo: "/assets/partner/frame10.png" },
//   { name: "IndusInd Bank", logo: "/assets/partner/frame1.png" },
//   { name: "PaySense", logo: "/assets/partner/frame1.png" },
//   { name: "Fedbank", logo: "/assets/partner/frame1.png" },
//   { name: "YES Bank", logo: "/assets/partner/frame1.png" },
//   { name: "Tata Capital", logo: "/assets/partner/frame1.png" },
];

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#E0F7FA] py-20"> {/* Bluish faint background */}
    <h2 className="text-center text-5xl font-bold mb-8">Our Partners</h2>
    <div
      className="overflow-hidden relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex space-x-6 items-center animate-scroll ${
          isHovered ? "pause-animation" : ""
        }`}
        style={{ width: "calc(400px * 10)" }}      >
        {/* Duplicate the partner logos array to create a seamless scroll effect */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md flex-shrink-0 transition-transform transform hover:scale-105"
            style={{ width: "200px", height: "120px" }} 
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Partners;
