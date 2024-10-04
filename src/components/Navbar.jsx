import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {logo} from "../../public/assets/final-logo.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-[#fff] z-50 relative  sticky top-0 " // Set z-index high enough to show above background
      style={{ boxShadow: " 2px 2px 2px 2px rgba(255, 255, 255, 0.15)" }}


    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="./" className="text-black font-bold text-xl">
              <img
                src="/assets/final-logo.png"
                alt="logo"
                className="block" // Ensure visibility
              />
            </a>
          </div>

          {/* Toggle button for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Links - Hidden on small screens */}
          <div className="hidden md:flex space-x-4 z-50 flex-shrink-1 ml-auto">
            <a
              href="/"
              className="text-black px-3 py-2 rounded-md text-lg  text-[30px] font-bold"
            >
              Home
            </a>
            {/* About Us Dropdown */}
            <div className="relative group">
              <span className="text-black px-3 py-2 rounded-md text-lg font-bold text-[30px] flex justify-center items-center cursor-pointer">
               <Link to='/about'>About us</Link>
                {/* <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m7 10l5 5l5-5z"></path>
                  </svg>
                </span> */}
              </span>
              {/* Dropdown menu */}
              {/* <div className="absolute top-full left-0 bg-[#fff] text-black mt-0 w-48 rounded-md shadow-lg group-hover:block hidden transition-all duration-200 ease-in-out z-10">
                <a
                  href="/company-profile"
                  className="block px-4 py-3 text-sm mt-1 mx-1.5 font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl"
                >
                  Company Profile
                </a>
                <a
                  href="/director-message"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 hover:bg-black hover:text-white transition duration-150 rounded-2xl"
                >
                  Director Message
                </a>
                <a
                  href="/vision"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 hover:bg-black hover:text-white transition duration-150 rounded-2xl"
                >
                  Vision
                </a>
                <a
                  href="/mission"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 mb-1 hover:bg-black hover:text-white transition duration-150 rounded-2xl"
                >
                  Mission
                </a>
              </div> */}
            </div>

            {/* Financial Consultancy Dropdown */}
            <div className="relative group ">
              <span className="text-black px-3 py-2 rounded-md text-lg text-[30px] font-bold flex justify-center ">
                Loans
                <span className="flex justify-center align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                  </svg>
                </span>
              </span>
              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:block bg-[#fff] text-black mt-0 w-48 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <Link to='/homeloan'
                  // href="/company-profile"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Home Loans
                </Link>
                <Link to='/personalloan'
                 
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5"
                >
                  Personal Loans
                </Link>
                <a
                  href="/businessloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mb-1"
                >
                  Bussiness Loans
                </a>
                <Link to='/workingcapital'
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Working Capital Loan
                </Link>
                <Link to='/debtrestructure'
                  // href="/debtrestructure"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                 Debt Restructuring
                </Link>
                <Link to='/loanagaints'
                  // href="/company-profile"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                 Loan Against Property
                </Link>
              </div>
            </div>

     

            <Link to='/contact'
              className="text-black hover:text- px-3 py-2 rounded-md text-lg text-[30px] font-bold"
            >
              Contact us
            </Link>


            <a
              href="/becomepartner"
              className="text-black hover:text- px-3 py-2 rounded-md text-lg text-[30px] font-bold"
            >
             Become a partner
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            {/* Mobile About Us Dropdown */}
            <div className="relative group">
              <span className="text-[#459991] hover:text-[#459991] px-3 py-2 rounded-md text-lg font-medium flex justify-center items-center cursor-pointer">
                About Us
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m7 10l5 5l5-5z"></path>
                  </svg>
                </span>
              </span>
              {/* Mobile Dropdown menu */}
              <div className="absolute top-full left-0 bg-[#fff] text-[#459991] mt-0 w-48 rounded-md shadow-lg group-hover:block hidden transition-all duration-200 ease-in-out z-10">
                <a
                  href="/company-profile"
                  className="block px-4 py-3 text-sm mt-1 mx-1.5 font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl"
                >
                  Company Profile
                </a>
                <a
                  href="/director-message"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl"
                >
                  Director Message
                </a>
                <a
                  href="/vision"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl"
                >
                  Vision
                </a>
                <a
                  href="/mission"
                  className="block px-4 py-3 text-sm font-semibold mx-1.5 mb-1 hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl"
                >
                  Mission
                </a>
              </div>
            </div>
            {/* Mobile Financial Consultancy Dropdown */}
            <div className="relative group mt-1">
              <span className="text-[#459991] hover:text-[#459991] px-3 py-2 rounded-md text-lg font-medium flex justify-center ">
                Loans
                <span className="flex justify-center align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                  </svg>
                </span>
              </span>
              {/* Mobile Dropdown menu */}
              <div className="absolute hidden group-hover:block bg-[#fff] text-[#459991] mt-0 w-48 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <a
                  href="/company-profile"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Home Loans
                </a>
                <a
                  href="/director-message"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5"
                >
                  Personal Loans
                </a>
                <a
                  href="/vision"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5 mb-1"
                >
                  Bussiness Plan
                </a>
              </div>
            </div>
            <div className="relative group mt-1">
              <span className="text-[#459991] hover:text-[#459991] px-3 py-2 rounded-md text-lg font-medium flex justify-center ">
                Personal Finance
                <span className="flex justify-center align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                  </svg>
                </span>
              </span>
              {/* Mobile Dropdown menu */}
              <div className="absolute hidden group-hover:block bg-[#fff] text-[#459991] mt-0 w-48 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <a
                  href="/company-profile"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Investments
                </a>
                <a
                  href="/director-message"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5"
                >
                  All Insurance
                </a>
                <a
                  href="/vision"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#459991] hover:text-white transition duration-150 rounded-2xl mx-1.5 mb-1"
                >
                  LIfe Insurance
                </a>
              </div>
            </div>
            <a
              href="/"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Health Insurance
            </a>
            <a
              href="/"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
