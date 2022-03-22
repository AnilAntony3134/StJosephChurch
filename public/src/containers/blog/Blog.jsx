
import Article from '../../components/article/Article';
import './blog.css';
import React, { useState } from 'react';
import {Bloglist, Search, Header1, EmptyList} from '../../components';
import './blog.css';
import {blogList} from '../../config/data'; 
const Blog = () =>{

  const searchKey='Services';

  const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

return (

  <div className='Aboutus-wrap'>
      <h2 className='gradient__text'>Our Services</h2>

    <Bloglist blogs={filteredBlogs} />
  </div>
  )
}
export default Blog