import React from 'react';
import './headercard.css';
import { Link } from 'react-router-dom';

const Headercards= ({title,text1,text,text2,text3})=>(
    <div className='Headercards-wrap'>
      {/* <div className=''> */}

              <div className='card1'>
              <p> <Link to="/aboutus">Blogs & News </Link>  </p>
              </div>
       
          <div className='card2'>
          <p>  <Link to="/priests">Priests </Link>  </p>
          </div>
          <div className='card3'>
          <p>   <Link to="/contactus">Queries </Link>  </p>
          </div>
          <div className='card4'>
          <p>  <Link to="/aboutus">History </Link>  </p>
          </div>
     
      </div>

  )


export default Headercards