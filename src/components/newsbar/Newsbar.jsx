import Article from '../../components/article/Article';

import React, { useState } from 'react';
import {Bloglist, Search, Header1, EmptyList} from '../../components';
import {blogList} from '../../config/data'; 
import './newsbar.css';
const Newsbar = () =>{

  const searchKey='Updates';

  const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

return (

  <div className='Aboutus-wrap'>
      <h2 className='gradient__text'>News & Updates</h2>

    <Bloglist blogs={filteredBlogs} />
  </div>
  )
}
export default Newsbar