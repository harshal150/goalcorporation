import React from 'react'
import PersonalHeroSection from '../components/personalloan/PersonalHeroSection'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPersonalLoan from '../components/personalloan/AboutPersonalLoan'

const PersonalLoan = () => {
  return (
    <div>
    <Navbar/>
      <PersonalHeroSection/>
      <AboutPersonalLoan/>
      <Footer/>
    </div>
  )
}

export default PersonalLoan
