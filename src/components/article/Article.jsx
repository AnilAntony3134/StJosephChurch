import React from 'react';
import './article.css';

const Article = ({ imgUrl, text, text2}) => {
  return (
    <div className='stjoseph__blog-container__article'>
      <div className='stjoseph__blog-container__article-image'>
        <img src={imgUrl} alt="blog"/>
      </div>
      <div className='stjoseph__blog-container__article-content'>
        <div>
        <h3>{text}</h3>
        <p>{text2}</p>
        </div>
       
      </div>
    </div>
  )
}

export default Article