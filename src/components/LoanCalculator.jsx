

import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { AiOutlineDollarCircle } from 'react-icons/ai'; // For icons
import { FaRegCalendarAlt } from 'react-icons/fa';

// Registering necessary ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(250000); // Initial loan amount in INR
  const [months, setMonths] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState(calculatePayment(250000, 24));
  const [chartData, setChartData] = useState(getChartData(250000, 24)); // Chart data state

  // Function to calculate monthly payment
  function calculatePayment(amount, duration) {
    const interestRate = 0.05; // Assuming a fixed 5% annual interest rate
    const monthlyRate = interestRate / 12;
    const payment =
      (amount * monthlyRate) / 
      (1 - Math.pow(1 + monthlyRate, -duration));
    return payment.toFixed(2);
  }

  // Function to get updated chart data
  function getChartData(amount, duration) {
    const totalInterest = (calculatePayment(amount, duration) * duration) - amount;
    return {
      labels: ['Principal', 'Interest'],
      datasets: [
        {
          data: [amount, totalInterest],
          backgroundColor: ['#00e676', '#ff4081'],
          hoverBackgroundColor: ['#00c853', '#f50057'],
          borderColor: '#fff',
          hoverBorderColor: '#eee',
        },
      ],
    };
  }

  // Update monthly payment and chart data when loan amount changes
  const handleLoanChange = (e) => {
    const amount = parseInt(e.target.value);
    setLoanAmount(amount);
    setMonthlyPayment(calculatePayment(amount, months));
  };

  // Update monthly payment and chart data when loan duration changes
  const handleMonthsChange = (e) => {
    const duration = parseInt(e.target.value);
    setMonths(duration);
    setMonthlyPayment(calculatePayment(loanAmount, duration));
  };

  // Update chart data whenever loan amount or months change
  useEffect(() => {
    setChartData(getChartData(loanAmount, months));
  }, [loanAmount, months]);

  return (
    <div className="w-full min-h-screen bg-white p-10 flex justify-center items-center">
      {/* Loan Calculator Container with Glassmorphism */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5] border border-white/40 rounded-3xl shadow-2xl max-w-7xl w-full p-10 relative">
        <div className="absolute -top-10 right-5 w-36 h-36 bg-pink-500/20 rounded-full blur-3xl"></div>
        <h2 className="text-6xl font-extrabold text-center mb-10 text-blue-600">
          EMI <span className="text-teal-300">Calculator</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Loan Input Section */}
          <div className="p-8 bg-white/50 rounded-lg shadow-xl backdrop-blur-lg">
            <label className="block text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AiOutlineDollarCircle className="mr-2 text-teal-600" /> Loan Amount (₹)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="50000"
                max="1000000"
                step="10000"
                value={loanAmount}
                onChange={handleLoanChange}
                className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition ease-in-out"
              />
              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={loanAmount}
                onChange={handleLoanChange}
                className="w-full h-2 bg-teal-500 rounded-full cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-gray-500 mt-2">
              <span>₹50,000</span>
              <span className="font-bold text-lg">₹{loanAmount.toLocaleString('en-IN')}</span>
              <span>₹10,00,000</span>
            </div>

            <label className="block text-xl font-semibold text-gray-900 mt-8 mb-4 flex items-center">
              <FaRegCalendarAlt className="mr-2 text-teal-600" /> Loan Duration (Months)
            </label>
            <select
              value={months}
              onChange={handleMonthsChange}
              className="block w-full mt-1 p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition ease-in-out"
            >
              {[6 ,12, 18 , 24, 36, 48, 60 , 120 , 240].map((month) => (
                <option key={month} value={month}>
                  {month} months
                </option>
              ))}
            </select>

            <div className="mt-10 p-8 bg-teal-100 rounded-lg text-center shadow-lg">
              <h3 className="text-2xl font-bold text-teal-700">Monthly Payment</h3>
              <p className="text-4xl font-extrabold text-teal-900 mt-4">
                ₹{parseFloat(monthlyPayment).toLocaleString('en-IN')}
              </p>
              <span className="text-teal-600">Per Month</span>
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex justify-center items-center">
            <div className="w-full h-full bg-white/30 border border-white/40 rounded-lg shadow-lg backdrop-blur-lg p-10">
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
