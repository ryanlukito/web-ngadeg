import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {BrowserRouter, Route, Routes, useNavigate}from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/header' element={<Header/>}/>
          <Route path='/nav' element={<Nav/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/post' element={<NewPost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Missing/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
