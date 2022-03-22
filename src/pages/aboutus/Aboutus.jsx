import React, { useState } from 'react';
import {Bloglist, Search, Header1, EmptyList} from '../../components';
import './aboutus.css';
import {blogList} from '../../config/data'; 



const Aboutus = () =>{
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');


  //search submit
  const handleSearchSubmit=event=>{
    event.preventDefault();
    handleSearchResults()
  }

//search for blog by category
  const  handleSearchResults=()=>
  {
    const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  }

  //clear search and show all blogs

  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchKey('');

  }

return (

  <div className='Aboutus-wrap'>
    <Header1 title="AboutUs" subtitle="This is the word of jesus and thou you shall heal"/>
    <Search value={searchKey} clearSearch={handleClearSearch} 
    formSubmit={handleSearchSubmit} handleSearchKey={e=>setSearchKey(e.target.value)}/>
    {!blogs.length ? <EmptyList/> : <Bloglist blogs={blogs} />}
  </div>
  )
}
export default Aboutus