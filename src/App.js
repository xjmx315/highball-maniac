//App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componunt
import Navbar from './layout/Navbar';
import Discover from './pages/Discover';
import About from './pages/About';
import Recipe from './pages/Recipe';
import {PopupProvider} from './components/Popup';

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
        </Routes>
      </Router>
      <PopupProvider/>
      <div id='todolist'>
        <h1>간단한 투두 리스트</h1>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;