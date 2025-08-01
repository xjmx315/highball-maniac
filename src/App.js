//App.js
import React from 'react';
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
import {UserProvider} from './common/UserContext';

//css
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <Navbar />
        <div className='page-content'>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/recipe' element={<Recipes />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login/>}/>
          <Route path='join' element={<Join/>}/>
          <Route path='user_info/:userName' element={<UserInfo/>}/>
          <Route path='user_info' element={<UserInfo isSelfPage={true}/>} />
        </Routes>
        </div>
      </Router>
      </UserProvider>
      <PopupProvider/>
    </div>
  );
}

export default App;
