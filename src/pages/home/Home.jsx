import React from 'react';
import { useState, useEffect } from 'react';
import { Footer , Blog ,Possiblity ,Features, WhatGPT, Header} from '../../containers';
import { CTA, Brand, Navbar, Bloglist, Headercards,Popup } from '../../components';
import { Aboutus, Blogs, Contactus, History, Management} from '../../pages';
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import {blogList} from '../../config/data'; 
import './home.css';
import Gallery from '../../containers/gallery/Gallery';
import Newsbar from '../../components/newsbar/Newsbar';
const Home = () => {
  const [buttonPopup, SetButtonPopup] = useState(false); 



  useEffect(()=>{
    setTimeout(() => {
      SetButtonPopup(true);
    }, 1000);

  }, []);


  return ( 

    <div className="App">
      <div className="gradient_bg">

    {/* <Popup trigger={buttonPopup} setTrigger={SetButtonPopup}>
         <img className='popup-image' src="../../assets/Easter Updates.jpg" alt="x" />
       </Popup> */}
       <Header />
        </div>
        {/* <Headercards /> */}
        <Newsbar />
     
        <Possiblity />
        <Gallery />
       



        <Brand />
      
       
        
        <WhatGPT />
        <Blog />


      </div>
      
  )
}

export default Home
