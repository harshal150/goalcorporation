import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure BrowserRouter is imported
import './App.css';
import { Home } from './pages/Home';
import About from './pages/About';
import HomeLoan from './pages/HomeLoan';
import PersonalLoan from './pages/PersonalLoan';
import BusinessLoan from './pages/BusinessLoan';
import WorkingCapital from './pages/WorkingCapital';
import LoanAgaints from './pages/LoanAgaints';
import DebtRestructure from './pages/DebtRestructure';
import BecomePartner from './pages/BecomePartner';
// import { Home2 } from './pages/Home2';
import ScrollToTop from './components/ScrollToTop';
import AboutContact from './components/ContactUs';


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Home2 />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<AboutContact />} />
        <Route path="/homeloan" element={<HomeLoan />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/workingcapital" element={<WorkingCapital />} />
        <Route path="/loanagaints" element={<LoanAgaints />} />
        <Route path="/debtrestructure" element={<DebtRestructure />} />
        <Route path="/becomepartner" element={<BecomePartner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

