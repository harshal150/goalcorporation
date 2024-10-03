import React from 'react'
import { Navbar } from '../components/Navbar'
import AboutMainSection from '../components/about/AboutMainSection'
import LoanInfo from '../components/about/LoanInfos'
import Footer from '../components/Footer'
import VisionMission from '../components/about/VissionMission'
import DirectorMsg from '../components/about/DirectorMsg'
import Ourteam from '../components/about/OurTeam'


const About = () => {
  return (
    <div>
        <Navbar />
        <AboutMainSection/>
        {/* <LoanInfo/> */}
        <DirectorMsg/>
        <VisionMission/>
        <Ourteam/>
        <Footer/>
    </div>
  )
}

export default About
