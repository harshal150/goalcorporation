import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-[#fff] z-50 relative sticky top-0 shadow-[0_6px_16px_rgba(0,0,0,0.35)] transform transition-all duration-300 ease-in-out hover:scale-100 rounded-b-lg border border-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
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
              className="text-[#333333] px-3 py-2 rounded-md text-lg text-[20px] font-bold"
            >
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative group">
              <span className="text-[#333333]  px-3 py-2 rounded-md text-lg font-bold text-[20px] flex justify-center items-center cursor-pointer">
                <Link to="/about">About us</Link>
              </span>
            </div>

            {/* Loans Dropdown */}
            <div className="relative group">
              <span className="text-[#333333]  px-3 py-2 rounded-md text-lg text-[20px] font-bold flex justify-center ">
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

              <div className="absolute hidden group-hover:block bg-[#fff] text-black mt-0 w-48 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <Link
                  to="/homeloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Home Loans
                </Link>
                <Link
                  to="/personalloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5"
                >
                  Personal Loans
                </Link>
                <a
                  href="/businessloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mb-1"
                >
                  Business Loans
                </a>
                <Link
                  to="/workingcapital"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Working Capital Loan
                </Link>
                <Link
                  to="/debtrestructure"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Debt Restructuring
                </Link>
                <Link
                  to="/loanagaints"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Loan Against Property
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-[#333333] hover:text- px-3 py-2 rounded-md text-lg text-[20px] font-bold"
            >
              Contact us
            </Link>

            <Link
              to="/becomepartner"
              className="text-[#333333] hover:text- px-3 py-2 rounded-md text-lg text-[20px] font-bold"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-left"> {/* Centering Links */}
            <a
              href="/"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </a>

            <div className="relative group mt-1">
              <span className="text-[#459991] hover:text-[#459991] px-3 py-2 rounded-md text-lg font-medium flex justify-left ">
                Loans
                <span className="flex justify-left items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
    </svg>

</span>

              </span>
              <div className="absolute hidden group-hover:block bg-[#fff] text-black mt-0 w-48 rounded-md shadow-lg transition-all duration-200 ease-in-out">
                <Link
                  to="/homeloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Home Loans
                </Link>
                <Link
                  to="/personalloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5"
                >
                  Personal Loans
                </Link>
                <a
                  href="/businessloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mb-1"
                >
                  Business Loans
                </a>
                <Link
                  to="/workingcapital"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Working Capital Loan
                </Link>
                <Link
                  to="/debtrestructure"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Debt Restructuring
                </Link>
                <Link
                  to="/loanagaints"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-black hover:text-white transition duration-150 rounded-2xl mx-1.5 mt-1"
                >
                  Loan Against Property
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact us
            </Link>

            <Link
              to="/becomepartner"
              className="text-[#459991] hover:text-[#459991] block px-3 py-2 rounded-md text-lg font-medium"
            >
              Become a partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
