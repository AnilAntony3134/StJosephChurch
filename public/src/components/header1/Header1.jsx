import React from 'react';
import './header1.css';

const Header1 = ({title,subtitle}) => {
  return (
    <div className='page__aboutus'>
      <div className='page__aboutus_title'>
      <h1 className='gradient__text'>{title}</h1>
      <p>" {subtitle}"</p>
      <p>psalm 18:32</p>
      </div>
      </div>
  )
}

export default Header1