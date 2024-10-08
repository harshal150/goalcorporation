import React from 'react'
import PersonalHeroSection from '../components/personalloan/PersonalHeroSection'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPersonalLoan from '../components/personalloan/AboutPersonalLoan'
import PersonalFAQ from '../components/personalloan/PersonalFAQ'

const PersonalLoan = () => {
  return (
    <div>
    <Navbar/>
      <PersonalHeroSection/>
      <AboutPersonalLoan/>
      <PersonalFAQ/>
      <Footer/>
    </div>
  )
}

export default PersonalLoan
