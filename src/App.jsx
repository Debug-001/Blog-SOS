import React from 'react'
import Home from './pages/Home';
import Dsa from './pages/Dsa'
import ScienceClub from './pages/ScienceClub' 
import Faculty from './pages/Faculty'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/dsa' element={<Dsa/>} />
       <Route path='/scienceclub' element={<ScienceClub/>} />
       <Route path='/faculty' element={<Faculty/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App