import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Header from './component/Header'
import Home from './component/Home'
import Top from './component/Top'
import Footer from './component/Footer'
import Bottom from './component/Bottom'
import SchemeBenefits from './component/SchemeBenefits'
import WhatsNew from './component/WhatsNew'
import HowToRegister from './component/HowToRegister'

function App() {
  return (
    <div>
      <Top />
      <Header />
      <Nav />

      < Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/schemebenifits" element={<SchemeBenefits />} />
        <Route path="/register" element={<HowToRegister />} />
      </Routes>

      <Footer />
      <Bottom />
    </div>
  )
}

export default App
