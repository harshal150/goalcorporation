import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import WorkingCapitalHeroSection from '../components/workingcapital/WorkingCapitalHeroSection'
import AboutWorkingCapital from '../components/workingcapital/AboutWorkingCapital'
import WorkCapFAQ from '../components/workingcapital/WorkCapFAQ'

const WorkingCapital = () => {
  return (
    <div>
         <Navbar/>

<WorkingCapitalHeroSection/>
<AboutWorkingCapital/>
<WorkCapFAQ/>
<Footer/>
    </div>
  )
}

export default WorkingCapital
