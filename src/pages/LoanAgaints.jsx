import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutLoanAgaints from '../components/LoanAgaints/AboutLoanAgaints'
import LoanAgaintHeroSection from '../components/LoanAgaints/LoanAgaintHeroSection'

const LoanAgaints = () => {
  return (
    <div>
         <Navbar/>
<LoanAgaintHeroSection/>
<AboutLoanAgaints/>
<Footer/>
    </div>
  )
}

export default LoanAgaints
