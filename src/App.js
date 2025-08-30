//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componunt
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Discover from './pages/Discover';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Join from './pages/Join';
import NewRecipe from './pages/NewRecipe';
import Recipe from './pages/Recipe';
import RecipesWithTag from './pages/RecipesWithTag';
import TagSearch from './pages/TagSearch';
import SearchUser from './pages/SearchUser';
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
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/recipe' element={<Recipes />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login/>}/>
          <Route path='join' element={<Join/>}/>
          <Route path='user_info/:userName' element={<UserInfo/>}/>
          <Route path='user_info' element={<UserInfo isSelfPage={true}/>} />
          <Route path='new_recipe' element={<NewRecipe/>} />
          <Route path='/recipe/:recipeId' element={<Recipe />}/>
          <Route path='/tag/:tagId' element={<RecipesWithTag/>}/>
          <Route path='/tag_search' element={<TagSearch/>}/>
          <Route path='/user_search' element={<SearchUser/>}/>
        </Routes>
        </div>
      </Router>
      </UserProvider>
      <PopupProvider/>
    </div>
  );
}

export default App;
