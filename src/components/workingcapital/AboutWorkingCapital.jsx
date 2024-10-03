import React from 'react'
import LoanCalculator from '../LoanCalculator'
import Homeloan from '../../assets/fee&charges/Homeloan.png'

const AboutWorkingCapital = () => {
  return (
    <div>
       <h1 className='text-[60px] font-extrabold text-center mt-12'>Working Capital Loan</h1>
       <p className=' text-left  mx-36 mb-8 font-bold mt-10'>
       A working capital loan is a valuable financial tool that helps SMEs bridge the gap between expenses and revenue. Whether it's due to delayed payments from clients or any other reason, our working capital loans ensure that your business has the necessary funds to meet its immediate financial obligations and sustain its operations.


       </p>
       <p className='text-left font-bold mx-36  mb-10'>
       At Goal Corporation, we have a deep understanding of you and your business needs. We strive to provide you with a swift and seamless experience, ensuring that your SME finance requirements are met effectively. Here's how we make sure your experience with us is exceptional:


       </p>





       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       <LoanCalculator/>


       <section className="max-w-full mx-36 p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
       Working Capital Loan Eligibility
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
      <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Documents required to apply for Working Capital Loan
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
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Fees and Charges for Working Capital Loan</h2>
    
        <img src={Homeloan} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutWorkingCapital


