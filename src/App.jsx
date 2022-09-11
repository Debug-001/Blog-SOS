import React from 'react'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Event1 from '../src/components/Event1'
import Event2 from '../src/components/Event2'
import Event3 from '../src/components/Event3'
import Footer from '../src/components/Footer'


function App () {
  return (
    <div>
   <Navbar/>
   <About/>
   <Event1/>
   <Event2/>
   <Event3/>
   <Footer/>
   </div>
  )
}

export default App