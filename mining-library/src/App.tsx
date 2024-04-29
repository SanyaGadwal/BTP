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
import MN321 from './components/Courses/MN321/mn321';
import MN361 from './components/Courses/MN361/mn361';
import MN333 from './components/Courses/MN333/mn333';
import MN341 from './components/Courses/MN341/mn341';
import MN342 from './components/Courses/MN342/mn342';
import MN332 from './components/Courses/MN332/mn332';

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
          <Route path='/sem5/mn321' element={<MN321 />}></Route>
          <Route path='/sem5/mn361' element={<MN361 />}></Route>
          <Route path='/sem5/mn333' element={<MN333 />}></Route>
          <Route path='/sem5/mn341' element={<MN341 />}></Route>
          <Route path='/sem6/mn342' element={<MN342 />}></Route>
          <Route path='/sem6/mn332' element={<MN332 />}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
