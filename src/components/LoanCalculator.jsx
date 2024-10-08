import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [months, setMonths] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState(calculatePayment(250000, 24));
  const [chartData, setChartData] = useState(getChartData(250000, 24));
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Function to calculate monthly payment
  function calculatePayment(amount, duration) {
    const interestRate = 0.05;
    const monthlyRate = interestRate / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
    return payment.toFixed(2);
  }

  // Function to get updated chart data
  function getChartData(amount, duration) {
    const totalInterest = calculatePayment(amount, duration) * duration - amount;
    return {
      labels: ['Principal', 'Interest'],
      datasets: [
        {
          data: [amount, totalInterest],
          backgroundColor: ['#87CEEB', '#6495ED'],
          hoverBackgroundColor: ['#00BFFF', '#4682B4'],
          borderColor: '#fff',
          hoverBorderColor: '#eee',
        },
      ],
    };
  }

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when component is in view
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const handleLoanChange = (e) => {
    const amount = parseInt(e.target.value);
    setLoanAmount(amount);
    setMonthlyPayment(calculatePayment(amount, months));
  };

  const handleMonthsChange = (e) => {
    const duration = parseInt(e.target.value);
    setMonths(duration);
    setMonthlyPayment(calculatePayment(loanAmount, duration));
  };

  useEffect(() => {
    setChartData(getChartData(loanAmount, months));
  }, [loanAmount, months]);

  return (
    <div ref={elementRef} className="w-full min-h-screen bg-white p-6 flex justify-center items-center border-b-0.5 border-blue-500 shadow-2xl">
      <div className="backdrop-blur-lg bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5] border border-white/40 rounded-2xl shadow-xl max-w-5xl w-full p-8 relative">
        <h2 className="text-5xl font-bold text-center mb-8 text-blue-600">
          EMI <span className="text-[#4ade80]">Calculator</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Loan Input Section */}
          <div
            className={`p-6 bg-white/50 rounded-lg shadow-lg backdrop-blur-lg transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } hover:scale-105`}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <AiOutlineDollarCircle className="mr-2 text-sky-600" /> Loan Amount (₹)
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                min="50000"
                max="5000000"
                step="10000"
                value={loanAmount}
                onChange={handleLoanChange}
                className="w-full p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 transition ease-in-out"
              />
              <input
                type="range"
                min="50000"
                max="5000000"
                step="10000"
                value={loanAmount}
                onChange={handleLoanChange}
                className="w-full h-2 bg-sky-500 rounded-full cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-gray-500 mt-2">
              <span>₹50,000</span>
              <span className="font-bold text-base">₹{loanAmount.toLocaleString('en-IN')}</span>
              <span>₹50,00,000</span>
            </div>

            <label className="block text-lg font-semibold text-gray-900 mt-6 mb-3 flex items-center">
              <FaRegCalendarAlt className="mr-2 text-sky-600" /> Loan Duration (Months)
            </label>
            <select
              value={months}
              onChange={handleMonthsChange}
              className="block w-full mt-1 p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 transition ease-in-out"
            >
              {[6, 12, 18, 24, 36, 48, 60, 120, 240].map((month) => (
                <option key={month} value={month}>
                  {month} months
                </option>
              ))}
            </select>

            <div className="mt-8 p-6 bg-sky-100 rounded-lg text-center shadow-md">
              <h3 className="text-xl font-bold text-sky-700">Monthly Payment</h3>
              <p className="text-3xl font-extrabold text-sky-900 mt-3">
                ₹{parseFloat(monthlyPayment).toLocaleString('en-IN')}
              </p>
              <span className="text-sky-600">Per Month</span>
            </div>
          </div>

          {/* Chart Section */}
          <div
            className={`relative flex justify-center items-center transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } hover:scale-105`}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-sky-50 to-blue-200 border border-sky-200/30 rounded-3xl shadow-2xl backdrop-blur-md p-8 overflow-hidden">
              {/* Glowing and Animated Effects */}
              <div className="absolute inset-0 opacity-30 rounded-3xl blur-2xl pointer-events-none"></div>

              {/* Doughnut Chart */}
              <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />

              {/* Animated Floating Circles */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300/30 rounded-full blur-2xl animate-bounceFast"></div>
              <div className="absolute top-8 right-10 w-12 h-12 bg-sky-400/30 rounded-full blur-xl animate-bubble"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-indigo-400/20 rounded-full blur-lg animate-bounceSlow"></div>

              {/* Animated Floating Squares */}
              <div className="absolute top-16 right-6 w-10 h-10 bg-blue-500/20 rounded-lg animate-bubble"></div>
              <div className="absolute bottom-8 right-16 w-14 h-14 bg-sky-300/40 rounded-lg animate-bounceSlow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
