import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portofolio from './components/portofolio/Portofolio'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
