import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import DebtRestructureHeroSection from '../components/debtrestructure/DebtRestructureHeroSection'
import AboutDebtRestructure from '../components/debtrestructure/AboutDebtRestructure'
import DebtFAQ from '../components/debtrestructure/DebtFAQ'

const DebtRestructure = () => {
  return (
    <div>
      <Navbar/>
      <DebtRestructureHeroSection/>
      <AboutDebtRestructure/>
      <DebtFAQ/>
      <Footer/>
    </div>
  )
}

export default DebtRestructure
