import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Event1 from '../components/Event1'
import Event2 from '../components/Event2'
// import Event3 from '../components/Event3'
import Footer from '../components/Footer'


function Home () {
    return (
      <>
     <Navbar/>
     <About/>
     <Event1/>
     <Event2/>
     <Footer/>
     </>
    )
  }
  
  export default Home