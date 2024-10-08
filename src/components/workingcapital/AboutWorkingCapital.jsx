import React from 'react'
import LoanCalculator from '../LoanCalculator'
import Homeloan from '../../assets/fee&charges/Homeloan.png'
import svgwc from '../../assets/svg/education-loan.png'
import CalculateEMIButton from '../CalculateEMIButton'
import LoanEligibilityCard from '../LoanEligibilityCard'


const AboutWorkingCapital = () => {
  return (
    <div>
    <CalculateEMIButton/>



       <h1 className='text-[60px] font-extrabold text-blue-600 text-center mt-12'>Working Capital Loan </h1>
       <div className="relative mx-36">
      {/* Text with Icon */}
      <div className="flex items-start">
        <div className="w-1/2 mt-10">
          <p className="text-left mb-8 font-semibold mt-10 text-[20px]">
          A working capital loan is a valuable financial tool that helps SMEs bridge the gap between expenses and revenue. Whether it's due to delayed payments from clients or any other reason, our working capital loans ensure that your business has the necessary funds to meet its immediate financial obligations and sustain its operations.
          </p>
          <p className="text-left font-semibold mb-10 text-[20px]">
          At Goal Corporation, we have a deep understanding of you and your business needs. We strive to provide you with a swift and seamless experience, ensuring that your SME finance requirements are met effectively. Here's how we make sure your experience with us is exceptional:
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={svgwc}
            alt="Home Loan Icon"
            className="w-[450px] h-[450px] opacity-90"
          />
        </div>
      </div>
    </div>




       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       <LoanEligibilityCard/>


       <section className="max-w-full mx-36 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-10 mb-6">
  {/* Title */}
  <h2 className="text-4xl font-bold text-center text-blue-600 uppercase mb-8">
    Working Capital Loan Eligibility
  </h2>

  {/* Description with Link
  <p className="text-lg text-center text-gray-600 mb-8">
    The basic <a href="#" className="text-blue-600 hover:underline">working capital loan eligibility</a> criteria are as follows:
  </p> */}

  {/* Age Section */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Age:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.</li>
      <li>Salaried Person - 21 years to 58 years</li>
      <li>Self-Employed Person - 25 years to 65 years</li>
    </ul>
  </div>

  {/* Income Section */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Income:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Salaried Person - Minimum Rs. 10,000 per month</li>
      <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
    </ul>
  </div>

  {/* Employment Section */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employment:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Salaried Person - Minimum 2 to 3 years of Experience in MNC, or a Private or Public Limited Company</li>
      <li>Self-Employed Person - Minimum 3 years of Experience in the current field</li>
    </ul>
  </div>

  {/* Credit Score Section */}
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Credit Score:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>A credit score of 750 is considered a good score for approval.</li>
    </ul>
  </div>
</section>



    <section className="max-w-full  p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
<div className='mx-36'>
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Documents required to apply for Working Capital Loan
</h2>


      
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Individual KYC (Photo, Pan, Aadhar Card of all applicants and co-applicants)</li>
        <li>Residence light bill of proprietor/all directors/all partners (If rented then rent agreement)</li>
        <li>Permanent Address Proof</li>
        <li>Business KYC (Company Pan Card, Udyam Certificate, Gumasta Certificate, GST Certificate, List of Directors & Shareholding Pattern, Partnership Deed, Certification of Incorporation,)</li>
        <li>MOA (Memorandum of Association) and AOA (Articles of Association)</li>
        <li>Office light bill (If rented then rent agreement)</li>
        <li>Latest 2 year Company ITR with audit report (CA Attested) (Acknowledgement, Computation of Income, Balance Sheet & Profit & Loss Account, 3CD, 3CB with schedules)</li>
        <li>Latest 2 year ITR of all directors (CA Attested)</li>
        <li>1 year GST return.</li>
        <li>1 year current account statement.</li>
        <li>All ongoing loans on company and individual name sanction letters.</li>
        <li>Repayment track record of all ongoing loans.</li>
        <li>Form 32 and Form 20B (if required)</li>
       
      </ul>
</div>
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Fees and Charges for Working Capital Loan</h2>
    
        <img src={Homeloan} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutWorkingCapital


