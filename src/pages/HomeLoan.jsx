import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/homeloan/HeroSection'
import Footer from '../components/Footer'
import AboutHomeLoan from '../components/homeloan/AboutHomeLoan'


const HomeLoan = () => {
  return (
    <div>
      <Navbar/>

      <HeroSection/>
      <AboutHomeLoan/>
      <Footer/>
    </div>
  )
}

export default HomeLoan
