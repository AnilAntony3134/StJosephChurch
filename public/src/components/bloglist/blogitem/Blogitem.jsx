import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../common/Chip/Chip';
import './blogitem.css';

const Blogitem = ({ blog:{id,description,title,createdAt,authorName,authorAvatar,category,cover}, }) =>{
return (
    <div className='blogitem-wrap'>
        <img src={cover} alt="cover" className='blogitem-cover'/>
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>
            {description}
        </p>
       
      
        <footer>
            <div className="blogitem-author">
                <img src={authorAvatar} alt="avatar" />
                <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <Link className='blogItem-link' to={`/blog/${id}`}>
            ReadMore
            </Link>
        </footer>
    </div>
);
};

export default Blogitem