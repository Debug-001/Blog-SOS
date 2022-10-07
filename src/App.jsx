import React from 'react'
import Home from './pages/Home';
import Dsa from './pages/Dsa'
import Cic from './pages/Cic'
import ScienceClub from './pages/ScienceClub' 
import Faculty from './pages/Faculty'
import TechnicalClub from './pages/Technicalclub'
import Culturalclub from './pages/Culturalclub'
import Sportsclub from './pages/Sportsclub'


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App () {
  return (
    <>
   <Router>
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/dsa' element={<Dsa/>} />
       <Route path='/sportsclub' element={<Sportsclub/>} />
       <Route path='/technicalclub' element={<TechnicalClub/>} />
       <Route path='/culturalclub' element={<Culturalclub/>} />
       <Route path='/cic' element={<Cic/>} />
       <Route path='/scienceclub' element={<ScienceClub/>} />
       <Route path='/faculty' element={<Faculty/>} />
   </Routes>
   </Router>
   </>
  )
}

export default App