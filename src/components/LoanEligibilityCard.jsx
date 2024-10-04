import React from 'react';
import { useLocation } from 'react-router-dom';

// Define the data with routes and titles
const data = [
  { route: '/homeloan', Title: 'Home Loan' },
  { route: '/personalloan', Title: 'Personal Loan' },
  { route: '/businessloan', Title: 'Business Loan' },
  { route: '/workingcapital', Title: 'Working Capital' },
  { route: '/loanagaints', Title: 'Loan Against Property' },
  { route: '/debtrestructure', Title: 'Debt Restructure' },
];

const LoanEligibilityCard = () => {
  const location = useLocation(); // Get current location

  // Find the current route's title from the data
  const currentLoan = data.find((item) => item.route === location.pathname);

  // If the route is not found, return null or a fallback component
  if (!currentLoan) {
    return <div>Loan information not available</div>;
  }

  return (
    <div className="flex justify-between items-center p-6 h-36 bg-[#f0f4ff] border border-gray-300 rounded-lg max-w-full mx-36">
      {/* Text Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">
          {currentLoan.Title} Eligibility and Documents
        </h2>
        <p className="text-gray-600">
          Read on to know the criteria required to apply for our {currentLoan.Title}.
        </p>
      </div>

      {/* Button Section */}
      <div>
        <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default LoanEligibilityCard;
