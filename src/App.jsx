import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Header/Hero'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import About from './components/AboutTemp/About'
import People from './components/People/People'
// import {Navbar} from "./components/Navbar"


function App() {

  return (
    <div> 
      {/* <p>hi its me</p> */}
      <Navbar/>
      <Hero/>
      <Cards/>
      <About/>
      <People/>
      <Footer/>
    </div>
  )
}

export default App
