import React from 'react'
import Nav from './component/Nav'
import Header from './component/Header'
import Home from './component/Home'
import Top from './component/Top'
import Footer from './component/Footer'
import Bottom from './component/Bottom'
import SchemeBenefits from './component/SchemeBenefits'
import WhatsNew from './component/WhatsNew'
import { Routes, Route } from 'react-router-dom'

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
      </Routes>

      <Footer />
      <Bottom />
    </div>
  )
}

export default App
