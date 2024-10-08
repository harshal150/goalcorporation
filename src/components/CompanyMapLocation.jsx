import React from "react";

const AddressMap = () => {
  return (
    <div className="google-map-container flex justify-center items-center py-12 ">
      <div className="map-wrapper w-full max-w-3xl shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9352263608903!2d73.71220531047459!3d18.621982965996235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f04b9cbab1%3A0x1dd66c1038c5767a!2sDexpert%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728367156284!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export { AddressMap };
