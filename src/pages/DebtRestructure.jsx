import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import DebtRestructureHeroSection from '../components/debtrestructure/DebtRestructureHeroSection'

const DebtRestructure = () => {
  return (
    <div>
      <Navbar/>
      <DebtRestructureHeroSection/>
      <Footer/>
    </div>
  )
}

export default DebtRestructure
