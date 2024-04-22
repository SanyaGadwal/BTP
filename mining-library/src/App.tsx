// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Homepage/Home'
import Sem2 from './components/Coursepage/Sem2/sem2';
import Sem6 from './components/Coursepage/Sem6/sem6';
import MN111 from './components/Courses/MN111/mn111';
import './App.css'




function App() {

  return (
    <>

   
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/sem1' element={<Sem1 />}></Route> */}
          <Route path='/sem2' element={<Sem2 />}></Route>
          {/* <Route path='/sem3' element={<Sem3 />}></Route>
          <Route path='/sem4' element={<Sem4 />}></Route>
          <Route path='/sem5' element={<Sem5 />}></Route> */}
          <Route path='/sem6' element={<Sem6 />}></Route>
          {/* <Route path='/sem7' element={<Sem7 />}></Route>
          <Route path='/sem8' element={<Sem8 />}></Route> */}
          <Route path='/mn111' element={<MN111 />}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
