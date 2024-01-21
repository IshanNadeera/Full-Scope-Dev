import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Home from '../components/Home'
import Services from '../components/Services'
import Projects from '../components/Projects'
import ContactUs from '../components/ContactUs'

export default function Main() {
  return (
    <div>
        <Header/>
        <Home/>
        <AboutUs/>
        <Services/>
        <Projects/>
        <ContactUs/>
    </div>
  )
}
