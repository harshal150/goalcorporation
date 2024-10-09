import React, { useState } from 'react';

const LoLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12); // Default to 12 months (1 year)
  const [tenureUnit, setTenureUnit] = useState('Yr'); // Default unit: Year

  const minLoanAmount = 50000; // 50k
  const maxLoanAmount = 50000000; // 5 Crore
  const minInterestRate = 5;
  const maxInterestRate = 48;
  const minTenureYears = 1;
  const maxTenureYears = 25;
  const minTenureMonths = 12; // 1 year
  const maxTenureMonths = 300; // 25 years in months

  const handleTenureChange = (value) => {
    setLoanTenure(value);
  };

  const handleUnitToggle = (unit) => {
    setTenureUnit(unit);
    if (unit === 'Yr') {
      setLoanTenure(Math.round(loanTenure / 12)); // Convert months to years
    } else {
      setLoanTenure(loanTenure * 12); // Convert years to months
    }
  };

  const calculateEMI = () => {
    let monthlyRate = interestRate / 12 / 100;
    let numOfMonths = tenureUnit === 'Yr' ? loanTenure * 12 : loanTenure;
    let EMI = loanAmount * monthlyRate * ((1 + monthlyRate) ** numOfMonths) / (((1 + monthlyRate) ** numOfMonths) - 1);
    return Math.round(EMI);
  };

  const totalInterestPayable = calculateEMI() * loanTenure * 12 - loanAmount;
  const totalPayment = loanAmount + totalInterestPayable;

  return (
<div className='max-w-full mt-4'>
<div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg ">
           <h2 className="text-5xl font-bold text-center mb-12 text-blue-600">
          EMI <span className="text-[#4ade80]">Calculator</span>
        </h2>
      {/* Loan sliders and inputs */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Loan Amount Input and Slider */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Personal Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-1/4 border border-gray-300 p-2 rounded-md mb-3"
            min={minLoanAmount}
            max={maxLoanAmount}
          />
          <input
            type="range"
            min={minLoanAmount}
            max={maxLoanAmount}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-gray-500">
            <span>₹ 50,000</span>
            <span>₹ {loanAmount.toLocaleString()}</span>
            <span>₹ 5 Cr</span>
          </div>
        </div>

        {/* Interest Rate Input and Slider */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            step="0.1" // Allow decimal values
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-1/4 border border-gray-300 p-2 rounded-md mb-3"
            min={minInterestRate}
            max={maxInterestRate}
          />
          <input
            type="range"
            min={minInterestRate}
            max={maxInterestRate}
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-gray-500">
            <span>{minInterestRate}%</span>
            <span>{interestRate}%</span>
            <span>{maxInterestRate}%</span>
          </div>
        </div>

        {/* Loan Tenure Input and Slider with Yr/Mo Option */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Loan Tenure</label>
          <div className="flex items-center mb-4">
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => handleTenureChange(Number(e.target.value))}
              className="w-1/4 border border-gray-300 p-2 rounded-md"
              min={tenureUnit === 'Yr' ? minTenureYears : minTenureMonths}
              max={tenureUnit === 'Yr' ? maxTenureYears : maxTenureMonths}
            />
            <div className="ml-2 flex items-center">
              <button
                className={`px-4 py-2 rounded-l-md border border-gray-300 ${tenureUnit === 'Yr' ? 'bg-gray-300' : ''}`}
                onClick={() => handleUnitToggle('Yr')}
              >
                Years
              </button>
              <button
                className={`px-4 py-2 rounded-r-md border border-gray-300 ${tenureUnit === 'Mo' ? 'bg-gray-300' : ''}`}
                onClick={() => handleUnitToggle('Mo')}
              >
                Months
              </button>
            </div>
          </div>

          <input
            type="range"
            min={tenureUnit === 'Yr' ? minTenureYears : minTenureMonths}
            max={tenureUnit === 'Yr' ? maxTenureYears : maxTenureMonths}
            value={loanTenure}
            onChange={(e) => handleTenureChange(Number(e.target.value))}
            className="w-full"
          />

          <div className="flex justify-between mt-2 text-gray-500">
            <span>{tenureUnit === 'Yr' ? `${minTenureYears} Yr` : `${minTenureMonths} Months`}</span>
            <span>
              {loanTenure} {tenureUnit === 'Yr' ? 'Years' : 'Months'}
            </span>
            <span>{tenureUnit === 'Yr' ? `${maxTenureYears} Yr` : `${maxTenureMonths} Months`}</span>
          </div>
        </div>
      </div>

      {/* EMI and Payment details */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-600">Loan EMI</h3>
            <p className="text-4xl font-bold text-sky-500">₹ {calculateEMI().toLocaleString()}</p>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-600">Total Interest Payable</h3>
            <p className="text-2xl font-bold text-sky-500">₹ {totalInterestPayable.toLocaleString()}</p>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-600">Total Payment (Principal + Interest)</h3>
            <p className="text-2xl font-bold text-sky-500">₹ {totalPayment.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center" style={{ background: "linear-gradient(135deg, #E0F7FA, #BBDEFB)" }}>
  <h3 className="text-lg font-semibold text-gray-600 mb-4">Break-up of Total Payment</h3>
  <div className="relative w-56 h-56">
    {/* Circular Donut Chart */}
    <svg className="w-full h-full" viewBox="0 0 36 36">
      <circle
        className="text-sky-300"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
        strokeDasharray={`${(loanAmount / totalPayment) * 100}, 100`}
        strokeLinecap="round"
      />
      <circle
        className="text-blue-500"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        r="16"
        cx="18"
        cy="18"
        strokeDasharray={`${(totalInterestPayable / totalPayment) * 100}, 100`}
        strokeDashoffset={`-${(loanAmount / totalPayment) * 100}`}
        strokeLinecap="round"
      />
    </svg>
    {/* Center Text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-xl font-bold text-gray-800">87.9%</p>
    </div>
  </div>
  
  {/* Legend for Principal and Interest */}
  <div className="mt-4 flex justify-center space-x-4 text-lg">
    <div className="flex items-center">
      <span className="block w-4 h-4 bg-sky-300 mr-2 rounded-full"></span>
      <span className="font-semibold text-gray-600">Principal</span>
    </div>
    <div className="flex items-center">
      <span className="block w-4 h-4 bg-blue-500 mr-2 rounded-full"></span>
      <span className="font-semibold text-gray-600">Interest</span>
    </div>
  </div>
</div>

      </div>
    </div>
</div>
  );
};

export default LoLoanCalculator;
