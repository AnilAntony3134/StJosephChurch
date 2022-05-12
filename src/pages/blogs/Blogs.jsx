import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from "react-markdown"
import Chip from '../../components/common/Chip/Chip';
import EmptyList from '../../components/common/EmptyList/EmptyList';
// import {blogList} from '../../config/data';
import postlist from "../../posts.json";
import './blogs.css';

const Blogs = () => {
  const {id}=useParams();
  
  const blog = {}
  let postExists = false
    postlist.forEach((post,i)=>{ 
        console.log("this is the post id " + post.id); 
        if (post.id === parseInt(id)){
            // blog.id = post.id
            blog.title = post.title ? post.title : "No title given"
            blog.date = post.date ? post.date : "No date given"
            blog.author = post.author ? post.author : "No author given"
            blog.content = post.content ? post.content : "No content given"
            blog.thumbnail = post.thumbnail ? post.thumbnail : "No image Given"

            postExists = true;
         
    }
    })
    console.log("this is the regular " + id);
    console.log(postExists);
if (postExists === false){
    <Link to='/aboutus'><span>&#8592;</span> <span>Go Back </span></Link>
    return  <EmptyList /> 
}  

  return (
    <div className='blog1-wrap'>
      <Link to='/aboutus'><span>&#8592;</span> <span>Go Back </span></Link>
      <header>
        <p className='blog-date'>Published {blog.date}</p>
        <h1>{blog.title}</h1>
        {/* <div className="blog-subCategory">
          {blog.subCategory.map((category,index)=>
          <div>
          <Chip key={index} label={category}/>
          </div>
          )}
        </div> */}
        
      </header>

      <img src={blog.thumbnail} alt='cover'/>
      <Markdown className='blog-desc' children={blog.content}/>
    </div>
    
    );
    };
export default Blogs