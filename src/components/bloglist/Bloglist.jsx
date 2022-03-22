import React from 'react';
// import Blog1  from '../../containers';
import Blogitem from './blogitem/Blogitem';
import './bloglist.css';

const Bloglist = ({blogs}) => {
  return (
    <div className="bloglist-wrap">
        {blogs.map((blog)=>(<Blogitem blog={blog} key={blog.id}/>))}
    </div>
  );
};

export default Bloglist;