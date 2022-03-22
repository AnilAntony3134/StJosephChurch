import React from 'react';
import { Aboutus, Blogs, Contactus, History, Management, Home} from './pages';
import { Footer , Blog ,Possiblity ,Features, WhatGPT, Header, Blog1} from './containers';
import { CTA, Brand, Navbar } from './components';

import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import './App.css';
const app = () => {
  return (
    <Router>
         
    <div className="App">
      <div className="gradient_bg">
      <Navbar />
      <Routes>
    
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/blog/:id' element={<Blog1 />} />
            <Route path='/priests' element={<History />} />
            <Route path='/contactus' element={<Contactus />} />

            </Routes>
        </div> 
        <Footer />
      </div>
      
    </Router>
  )
}

export default app