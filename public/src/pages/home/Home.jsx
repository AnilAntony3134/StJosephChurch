import React from 'react';

import { Footer , Blog ,Possiblity ,Features, WhatGPT, Header} from '../../containers';
import { CTA, Brand, Navbar, Bloglist, Headercards } from '../../components';
import { Aboutus, Blogs, Contactus, History, Management} from '../../pages';
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import {blogList} from '../../config/data'; 
import './home.css';
import Gallery from '../../containers/gallery/Gallery';
const Home = () => {
  return (
    
     
    <div className="App">
      <div className="gradient_bg">

       <Header />
     

        </div>
        {/* <Headercards /> */}
     
        <Possiblity />
        <Gallery />
       



        <Brand />
      
       
        
        <WhatGPT />
        <Blog />


      </div>
      
  )
}

export default Home