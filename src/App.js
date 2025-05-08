//App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componunt
import Navbar from './layout/Navbar';
import Discover from './pages/Discover';
import About from './pages/About';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import Join from './pages/Join';
import {PopupProvider} from './components/Popup';
import UserInfo from './pages/UserInfo';

//css
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login/>}/>
          <Route path='join' element={<Join/>}/>
          <Route path='user_info' element={<UserInfo userName={localStorage.getItem('userName')}/>}/>
        </Routes>
      </Router>
      <PopupProvider/>
    </div>
  );
}

export default App;