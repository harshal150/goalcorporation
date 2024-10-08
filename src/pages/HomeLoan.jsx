import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/homeloan/HeroSection'
import Footer from '../components/Footer'
import AboutHomeLoan from '../components/homeloan/AboutHomeLoan'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import HomeFAQ from '../components/homeloan/HomeFAQ'


const HomeLoan = () => {
  return (
    <div>
      <Navbar/>

      <HeroSection/>
      <AboutHomeLoan/>
      <HomeFAQ/>
      {/* <TestimonialSlider/> */}
      <Footer/>
    </div>
  )
}

export default HomeLoan
