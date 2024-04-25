// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Homepage/Home'
import Sem2 from './components/Coursepage/Sem2/sem2';
import Sem3 from './components/Coursepage/Sem3/sem3';
import Sem4 from './components/Coursepage/Sem4/sem4';
import Sem5 from './components/Coursepage/Sem5/sem5';
import Sem6 from './components/Coursepage/Sem6/sem6';
import MN111 from './components/Courses/MN111/mn111';
import MN322 from './components/Courses/MN322/mn322';
import MN112 from './components/Courses/MN112/mn112';
import MN231 from './components/Courses/MN231/mn231';
import MN241 from './components/Courses/MN241/mn241';
import MN221 from './components/Courses/MN221/mn221';
import MN211 from './components/Courses/MN211/mn211';
import MN212 from './components/Courses/MN212/mn212';
import MN251 from './components/Courses/MN251/mn251';
import MN331 from './components/Courses/MN331/mn331';
import './App.css'




function App() {

  return (
    <>

   
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/sem1' element={<Sem1 />}></Route> */}
          <Route path='/sem2' element={<Sem2 />}></Route>
          { <Route path='/sem3' element={<Sem3 />}></Route>}
          <Route path='/sem4' element={<Sem4 />}></Route> 
          <Route path='/sem5' element={<Sem5 />}></Route>
          <Route path='/sem6' element={<Sem6 />}></Route>
          {/* <Route path='/sem7' element={<Sem7 />}></Route>
          <Route path='/sem8' element={<Sem8 />}></Route> */}
          <Route path='/sem6/mn322' element={<MN322 />}></Route>
          <Route path='/sem2/mn111' element={<MN111 />}></Route>
          <Route path='/sem2/mn112' element={<MN112 />}></Route>
          <Route path='/sem4/mn231' element={<MN231 />}></Route>
          <Route path='/sem4/mn241' element={<MN241 />}></Route>
          <Route path='/sem4/mn221' element={<MN221 />}></Route>
          <Route path='/sem3/mn211' element={<MN211 />}></Route>
          <Route path='/sem3/mn212' element={<MN212 />}></Route>
          <Route path='/sem3/mn251' element={<MN251 />}></Route>
          <Route path='/sem5/mn331' element={<MN331 />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
