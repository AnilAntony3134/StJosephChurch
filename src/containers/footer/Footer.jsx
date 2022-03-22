import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="gpt3__footer section__padding1">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
      <h1 className='gpt3__footer-heading'>St Joseph Metropolital Cathedral</h1>
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>
          <a href="https://www.facebook.com/Palayampalli">Facebook</a>
        </p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Website Design</h4>
        <p>Anil Antony</p>
        <p>9037210582</p>
        <p>anilantony3134@gmail.com</p>
      </div>
    </div>

  </div>
);

export default Footer;