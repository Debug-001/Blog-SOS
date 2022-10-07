import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Vision from '../components/Vision'
import Footer from '../components/Footer'


function Home () {
    return (
      <>
     <Navbar/>
     <About/>
     {/* <Vision/> */}
     <Footer/>
     </>
    )
  }
  
  export default Home