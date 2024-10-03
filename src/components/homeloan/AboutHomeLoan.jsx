import React from 'react'
import LoanCalculator from '../LoanCalculator'
import Homeloan from '../../assets/fee&charges/Homeloan.png'

const AboutHomeLoan = () => {
  return (
    <div>
       <h1 className='text-[60px] font-extrabold text-center mt-12'>Home Loans</h1>
       <p className=' text-left  mx-36 mb-8 font-bold mt-10'>
       A home holds immense significance in our lives. It is not just a physical structure but a sanctuary where we find solace, love, and a sense of belonging. It is the place we eagerly return to after a long day, where we create cherished memories with our loved ones, and where our dreams take shape. Home is where our hearts reside, and it forms the very essence of our existence.

       </p>
       <p className='text-left font-bold mx-36  mb-10'>
       Understanding the profound importance of having a home, Goal Corporation is dedicated to helping you fulfill your dream of owning one. We believe that everyone deserves a place they can call their own, a haven where laughter echoes through the halls and love fills every corner. That's why we offer home loans with the lowest home loan interest rates.

       </p>





       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       <LoanCalculator/>


       <section className="max-w-full mx-36 p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Home Loan Eligibility
      </h2>

      {/* Description with Link */}
      <p className="text-lg text-center text-gray-600 mb-8">
        The basic <a href="#" className="text-blue-600 hover:underline">home loan eligibility</a> criteria are as follows:
      </p>

      {/* Age Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Age:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.</li>
          <li>Salaried Person - 21 years to 58 years</li>
          <li>Self-Employed Person - 25 years to 65 years</li>
        </ul>
      </div>

      {/* Income Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Income:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Salaried Person - Minimum Rs. 10,000 per month</li>
          <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
        </ul>
      </div>

      {/* Employment Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Employment:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Salaried Person - Minimum 2 to 3 years of Experience in MNC, or a Private or Public Limited Company</li>
          <li>Self-Employed Person - Minimum 3 years of Experience in the current field</li>
        </ul>
      </div>

      {/* Credit Score Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Credit Score:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>A credit score of 750 is considered a good score for approval.</li>
        </ul>
      </div>
    </section>

    <section className="max-w-full mx-36 p-6 bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Documentation for Home Loan</h2>

      {/* Subtitle */}
      <h3 className="text-xl font-semibold mb-4">Income Proof Documents</h3>

      {/* Salaried Individuals */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">1. Salaried Individuals</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Form 16</li>
          <li>Employee Identity Card</li>
          <li>3 Months Salary Slip</li>
          <li>6 Month Bank Account Statement</li>
          <li>Duration of Employment Evidence</li>
        </ul>
      </div>

      {/* Self-Employed Individuals */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">2. Self-Employed Individuals</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>PAN</li>
          <li>Trade License</li>
          <li>Partnership Deed</li>
          <li>Article of Association</li>
          <li>Memorandum of Association</li>
          <li>Import Export Code</li>
          <li>SEBI Registration Certificate</li>
          <li>ROC Registration Certificate</li>
          <li>Financial Statement Audited by CA</li>
          <li>Profit & Loss Account Statement</li>
          <li>Balance Sheet</li>
          <li>6 Months Bank Account Statement</li>
          <li>Professional Practice License for Doctors, Consultants, etc</li>
          <li>Registration Certificate of Establishment for Shops, Factories, and Other Establishments</li>
          <li>Business Address Proof</li>
        </ul>
      </div>

      {/* NRI Documentation */}
      <div>
        <h4 className="text-lg font-semibold mb-2">
          3. Documents Required from all Non-Resident Indians (NRIs) Applicants
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Income Proof Documents for NRI</li>
          <li>Property Papers</li>
          <li>Property Documents</li>
          <li>Sale Deed</li>
          <li>Stamped Agreement of Sale</li>
          <li>Allotment Letter</li>
          <li>No Objection Certificate or NOC</li>
          <li>Housing Society</li>
          <li>Builder</li>
          <li>Possession Certificate</li>
          <li>Land Tax Receipt</li>
          <li>Construction Cost Estimate</li>
          <li>Bank Account Statement of Payment Made to Seller or Builder</li>
          <li>Payment Receipt of Payment Made to Seller or Builder</li>
          <li>In case of resale property, share certificate is required</li>
          <li>Occupancy Certificate</li>
        </ul>
      </div>
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Fees and Charges for Home Loan</h2>
    
        <img src={Homeloan} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutHomeLoan
