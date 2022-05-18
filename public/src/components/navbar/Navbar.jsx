import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
const Menu = () =>(
  <>
  <p>
  <Link to="/"> Home </Link> </p>
  <p><Link to="/aboutus"> Blog & News</Link></p>
  <p><Link to="/priests"> Priests </Link></p>
  <p><Link to="/contactus"> Contact Us </Link></p>
  <p><a href="https://www.facebook.com/Palayampalli">Facebook</a></p>
  <p><Link to="/admin"> Admin </Link></p>

</>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gradient_bg">
    <div className="stjoseph__navbar">
                <h1><Link to="/">St. Joseph’s Metropolitan Cathedral</Link></h1>
      <div className="stjoseph__navbar-links">
        <div className='stjoseph__navbar-links_logo'>
          </div>
          <div className='stjoseph__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className="stjoseph__navbar-sign">
          {/* <p>Contact Us</p> */}
          <button type="button"><Link to="/contactus"> Queries</Link></button>
        </div>
        <div className="stjoseph__navbar-menu">
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="stjoseph__navbar-menu_container scale-up-center">
              <div className="stjoseph__navbar-menu_container-links ">
              <Menu />
              <div className="stjoseph__navbar-menu_container-links-sign">
          {/* <p>Contact Us</p> */}
          <button type="button">Querie</button>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
  )
}

export default Navbar