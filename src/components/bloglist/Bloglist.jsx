import React from 'react';
import Blogitem from './blogitem/Blogitem';
import './bloglist.css';
import postlist from "../../posts.json";

const Bloglist = ({blogs}) => {
  return (
    <div className="bloglist-wrap">
        {/* {blogs.map((blog)=>(<Blogitem blog={blog} key={blog.id}/>))} */}
        
        {postlist.map((blog)=>(<Blogitem blog={blog} key={blog.id}/>))}

        {/* {blogs.map((blog)=>(<postlist blog={blog} key={blog.id}/>))} */}
    </div>
  );
};

export default Bloglist;