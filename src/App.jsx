import React from 'react'
import Home from './components/Home';
import Dsa from './components/Dsa'
import Sc from './components/Sc' 
import Faculty from './components/Faculty'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/dsa' element={<Dsa/>} />
       <Route path='/sc' element={<Sc/>} />
       <Route path='/faculty' element={<Faculty/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App