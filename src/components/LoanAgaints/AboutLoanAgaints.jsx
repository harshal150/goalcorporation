import React from 'react'
import LoanCalculator from '../LoanCalculator'
import Homeloan from '../../assets/fee&charges/Homeloan.png'

const AboutLoanAgaints = () => {
  return (
    <div>
       <h1 className='text-[60px] font-extrabold text-center mt-12'>Loan Againts Property</h1>
       <p className=' text-left  mx-36 mb-8 font-bold mt-10'>
       Unlock the Potential of Your Property with Loan Against Property from Goal Corporation
       </p>
       <p className='text-left font-bold mx-36  mb-10'>
       At Goal Corporation, we are a leading corporate loan distribution company dedicated to providing you with the best financial solutions. We bring you Loan Against Property offerings from top Banks and NBFCs across India, ensuring you have access to the funds you need. With our competitive interest rates starting as low as 9%* p.a., we make borrowing against your property affordable and convenient.
       </p>





       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       <LoanCalculator/>


       <section className="max-w-full mx-36 p-6 bg-white rounded-lg shadow-md mt-10">
       <h2 className="text-3xl font-bold mb-6">Eligibility Criteria for Loan against Property</h2>
      
      <ul className="list-none space-y-4 text-gray-700">
        <li>
          <strong>Nationality:</strong> You need to be a Citizen of India with documents to prove your claim.
        </li>
        <li>
          <strong>Occupation and Income:</strong> Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.
        </li>
        <li>
          <strong>Credit History:</strong> Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.
        </li>
        <li>
          <strong>Banking Relationship:</strong> Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.
        </li>
        <li>
          <strong>Market Value of Property:</strong> Your lender retains the right to decide the loan amount and terms and conditions of your mortgage loan based on the market value of your collateral property. Besides, the market value of the mortgaged property must be higher than the loan amount calculated on the current value of your property.
        </li>
        <li>
          <strong>Title of Property:</strong> Your lender will require you to be the current existent owner of the property, and in case of a co-application, you will require to prove multiple ownership clear title. Besides, the property must not be mortgaged with any other financial institution.
        </li>
      </ul>
    </section>

    <section className="max-w-full mx-36 p-6 bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Documents required to apply for Loan Against Property
</h2>


      
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Proof of identity/residence</li>
        <li>Proof of income</li>
        <li>Property-related documents</li>
        <li>Proof of Business (for self-employed)</li>
        <li>Account statement for the last 6 months</li>
      
       
      </ul>
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center mt-8 ">Fees and Charges for Home Loan</h2>
    
        <img src={Homeloan} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutLoanAgaints


