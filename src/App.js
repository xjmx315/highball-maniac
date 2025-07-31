//App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componunt
import Navbar from './layout/Navbar';
import Discover from './pages/Discover';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Join from './pages/Join';
import {PopupProvider} from './components/Popup';
import UserInfo from './pages/UserInfo';

//css
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='page-content'>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/recipe' element={<Recipes />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login/>}/>
          <Route path='join' element={<Join/>}/>
          <Route path='user_info' element={<UserInfo userName={localStorage.getItem('userName')}/>}/>
        </Routes>
        </div>
      </Router>
      <PopupProvider/>
    </div>
  );
}

export default App;