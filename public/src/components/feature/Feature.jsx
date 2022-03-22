import React from 'react';
import './feature.css';

const Feature = ({title,text1,text,text2,text3})=>(
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
      
          <h1>
            {title}
          </h1>
          <div />
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p className='text1 gradient__text'>
          {text1}
        </p>
        <p>
        {text}
        </p>
        <p className='text1 gradient__text'>
          {text2}
        </p>
        <p>
        {text3}
        </p>
      </div>

    </div>
  )


export default Feature