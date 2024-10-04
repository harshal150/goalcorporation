import React from 'react'
import { Navbar } from '../components/Navbar'
import { MainSection } from '../components/MainSection'
import Services from '../components/Services'
import Message from '../components/Message'
import Footer from '../components/Footer'
import { Descciption } from '../components/Descciption'
import { Equipment } from '../components/Equipment'
import Howitworks from '../components/Howitworks'
import LoanCalculator from '../components/LoanCalculator'
import Timeline from '../components/Timeline'
import About from '../components/About'
import MapComponent from '../components/MapComponent'
import ApplyForLoan from '../components/ApplyForLoan'
import Header from '../components/Header'
export const Home = () => {
  return (
    <div>
       <Navbar />
       <Header/>
        {/* <MainSection/> */}
        <ApplyForLoan/>
        <Services/>
        {/* <Descciption /> */}
      <Howitworks />
      <LoanCalculator />
      <About />
      <Timeline />

      <MapComponent />
        <Message />
        <Footer />
    </div>
  )
}
