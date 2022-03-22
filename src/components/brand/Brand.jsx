import React from 'react';
import Feature from '../../components/feature/Feature';
import './brand.css';
import bishop1 from '../../assets/DSC01943.JPG';
import bishop2 from '../../assets/011.JPG';
import bishop3 from '../../assets/DSC00595.jpg';
import Article from '../article/Article';
const Brand = () => {
  return (
  <div className="stjoseph__brand_container">
    {/* <Feature title="Principles" text=" The principles which will be followed to give a democratic progressive and Secular vision to all the youth of our generation" /> */}
    <h1 className='gradient__text'> "OUR SPIRITUAL FATHERS" </h1>
    <p>-Walk by faith not by light-</p>

    <div className='stjoseph__brand_container-cards'>
    <Article imgUrl={bishop3} text="Most Rev. Dr. Thomas J Netto " text2="Arch Bishop"/>
        <Article imgUrl={bishop2} text="Most Rev. Dr. Christudas Rajappan" text2="Auxiliary Bishop"/>
       
        <Article imgUrl={bishop1}  text="Very Rev. Msgr. Nicholas T" text2="Parish Priest"/>
        {/* <Article imgUrl={bishop3} text="Most Rev. Dr. Thomas J Netto " text2="2021-"/> */}

        </div>
    </div>
  )
}

export default Brand