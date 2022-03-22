import React from 'react';
import './contactus.css';
import {Article, Header1} from '../../components';
import Contactform from '../../components/contactform/Contactform';
import { blog01, blog02, blog03, blog04, blog05} from './import';

const Contactus = () => {
  return (
    <div className='contactus-wrap'>
          <Header1 title="Contact Us" subtitle="This is the word of jesus and thou you shall heal"/>
          <Contactform />
{/*        
          <h1 className='h1h1'>Commitee Members</h1>
          <div className='contactus-cards'>
          <Article imgUrl={blog05} text="Rt. Rev Dr. Vincent Dereira" text2="1880-1974"/>
        <Article imgUrl={blog04} text="Rt. Rev Dr. Peter Bernard Pereira" text2="1966-1978"/>
        <Article imgUrl={blog03}  text="Rt. Rev Dr. Jacob Acharuparambil" text2="1978-2002"/>
        <Article imgUrl={blog02} text="Rt. Rev. Dr. Soosai M Pakiam" text2="2002-2021"/>
        <Article imgUrl={blog01} text="Most Rev. Dr. Thomas J Netto " text2="2021-"/>
        </div> */}
       
    </div>

  )
}
export default Contactus