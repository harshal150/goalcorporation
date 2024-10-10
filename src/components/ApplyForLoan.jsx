import React from "react";

const ApplyForLoan = () => {

  const HandleClick = () => {
    window.open(
      'https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8',
      '_blank'
    );
  };

  return (
    <section className="ezy__cta2 relative overflow-hidden py-10 md:py-12 bg-gradient-to-r from-sky-500 to-blue-900">
      {/* Decorative Shapes */}
      <div className="absolute w-[400px] h-[400px] bg-white bg-opacity-10 rounded-full left-[-150px] top-[-150px] animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-white bg-opacity-10 rounded-full right-[-100px] top-[-100px] animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] bg-white bg-opacity-10 rounded-full left-[200px] top-[50%] animate-pulse"></div>
      <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-10 rounded-full right-[200px] top-[60%] animate-pulse"></div>

      {/* Additional shapes for more depth */}
      <div className="absolute w-[120px] h-[120px] bg-[#ffffff33] rounded-full left-[50%] top-[40%] transform -translate-x-1/2 animate-bounce"></div>
      <div className="absolute w-[80px] h-[80px] bg-[#ffffff33] rounded-full right-[50%] bottom-[30%] transform translate-x-1/2 animate-bounce"></div>
      <div className="absolute w-[50px] h-[50px] bg-[#ffffff33] rounded-full left-[10%] bottom-[20%] animate-bounce delay-200"></div>
      <div className="absolute w-[70px] h-[70px] bg-[#ffffff33] rounded-full right-[20%] top-[70%] animate-bounce delay-400"></div>

      <div className="container relative px-4">
        <div className="grid grid-cols-12 justify-between items-center text-white">
          {/* Text Section */}
          <div className="col-span-12 md:col-span-6 text-left pl-8 md:pl-20 space-y-4">
            <h2 className="text-3xl md:text-[48px] leading-tight font-bold">
              Your Loan is Just a Click Away
            </h2>
            <p className="text-lg md:text-xl">
              Get financial support with the fastest and simplest loan application process. Apply now!
            </p>
          </div>

          {/* Button Section */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
            <button
              type="submit"
              onClick={HandleClick}
              className="bg-[#3B82F6] hover:scale-105 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 ease-in-out transform"
            >
              Apply for Loan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForLoan;
