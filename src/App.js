import React from 'react'
import Nav from './component/Nav'
import Header from './component/Header'
import Top from './component/Top'
import About from './component/About'
import KeyIndicators from './component/KeyIndicators'
import Partners from './component/Partners'
import Footer from './component/Footer'
import Bottom from './component/Bottom'

function App() {
  return (
    <div>
      <Top/>
      <Header/>
      <Nav/>
      <About/>
      <KeyIndicators/>
      <Partners/>
      <Footer/>
      <Bottom/>
    </div>
  )
}

export default App
