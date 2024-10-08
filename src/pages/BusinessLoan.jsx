import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutBuisnessLoan from '../components/businessloan/AboutBuisnessLoan'
import BusinessHeroSection from '../components/businessloan/BusinessHeroSection'
import BusinessFAQ from '../components/businessloan/BuissnessFAQ'

const BusinessLoan = () => {
  return (
    <div>
       <Navbar/>
       <BusinessHeroSection/>
<AboutBuisnessLoan/>
<BusinessFAQ/>
      <Footer/>
    </div>
  )
}

export default BusinessLoan
