import React from 'react'
// import About from './componetn/about' 
// import {Routes,Route} from 'react-router';
// import {BrowserRouter as Router} from 'react-router-dom'
// import Home from './componetn/home'
// import Contact from './componetn/contact';
// import {Link} from 'react-router-dom';
import Api from './componetn/Api';
import RoutePractice from './config/route';
const App=()=>{
  return (
    <>
    {/* <Router>
      <Link to="/">HOme</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
      
          <Route><Home path='/home'/></Route>
          <Route><About path='/about'/></Route>
          <Route><Contact path='/contact'/></Route>
      </Routes>
    </Router> */}
    {/* <Api/> */}
    <RoutePractice/>
    </>
  )
}
export default App;