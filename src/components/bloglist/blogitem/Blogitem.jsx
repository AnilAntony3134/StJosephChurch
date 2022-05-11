import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../common/Chip/Chip';
import './blogitem.css';

const Blogitem = ({ blog:{id,description,title,createdAt,author,category,thumbnail}, }) =>{
return (
    <div className='blogitem-wrap'>
        <img src={thumbnail} alt="cover" className='blogitem-cover'/>
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>
            {description}
        </p>
       
      
        <footer>
            <div className="blogitem-author">
                <div>
                    <h6>{author}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <Link className='blogItem-link' to={`/${id}`}>
            ReadMore
            </Link>
        </footer>
    </div>
);
};

export default Blogitem