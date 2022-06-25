import React from 'react';
import church from '../../assets/churchp.png';
import './header.css';
const Header = () => {
  return (
    <div className="stjoseph__header section__padding" id="home">
      <div className="stjoseph__header-content">
        <h1 className='gradient__text'>“Everything should be done in love.” — 1 Corinthians 16:14</h1>
        <p>Welcome to the official website of the St. Joseph’s Metropolitan Cathedral, Trivandrum, Kerala. The
St. Joseph’s Cathedral located at Palayam is an ancient church in India where believers from far and
wide flock to receive heavenly blessings.
</p>
        <div className="stjoseph__header-content__input">
        {/* <input type="email" placeholder='Enter email for queries'/> */}
        <button type='button'>For Queries</button>
        </div>

      </div>
      <div className='stjoseph__header-image'>
      <img src={church} />
  
      </div>
    </div>
  )
}
export default Header
