import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt.css';

const WhatGPT = () => (
  // <div className="gpt3__whatgpt3 section__padding-container" id="wgpt3">
  <div className="gpt3__whatgpt3 section__paddings" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Mass Timings</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
    <div className="gpt3__whatgpt3-contained">
      <Feature title="St.Joseph’s Cathedral, Palayam" text1="Sunday " text="  5:45am  (English)  7.00 am 8.45 am 5.00pm" text2="Weekdays" text3="5.45am 6.30am  5.30pm" />
      </div>
      <div className="gpt3__whatgpt3-contained">
      <Feature title="St.Antony’s Chapel, Alummoodu" text1="Sunday " text="8.30 am" />
      
      <Feature title="SantaMaria Oldage Home" text1="Sunday " text="6.00 am"  text2="Weekdays" text3= "6.30 pm"  />
      </div>
      <div className="gpt3__whatgpt3-contained">
      <Feature title="Kunnukuzhi Chapel" text1="Sunday " text="10.30 am" />
      
      <Feature title="St.Joseph’s HSS Chapels" text1="Sunday " text="6.30 am"  text2="Tuesday" text3= "6.00 pm" />
      </div>
      <div className="gpt3__whatgpt3-contained">
      <Feature title="Jubilee Hospital Chapel" text1="Everyday " text="6.00 am"  />
  
      <Feature title="FatimaMata Chapel, VanrosJn" text1="Sunday " text="5.30 pm"  text2="Saturday" text3= "5.30 pm"  />
    </div>  
    </div>
  
          </div>
  );

export default WhatGPT;