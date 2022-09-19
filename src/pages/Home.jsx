import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
// import Event1 from '../components/Event1'
import Event2 from '../components/Event2'
import Event3 from '../components/Event3'
import Vision from '../components/Vision'
import Footer from '../components/Footer'


function Home () {
    return (
      <>
     <Navbar/>
     <About/>
     {/* <Event1/> */}
     <Event2/>
     <Event3/>
     <Vision/>
     <Footer/>
     </>
    )
  }
  
  export default Home