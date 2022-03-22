import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Chip from '../../components/common/Chip/Chip';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import {blogList} from '../../config/data';
import './blogs.css';

const Blogs = () => {
  const {id}=useParams();
  const [blog, setBlog] = useState(null)

  useEffect(()=>{
    let blog=blogList.find(blog=>Blogs.id===parseInt(id));

    if(blog){
      setBlog(blog);
    }

  },[]);
  return (
    
    <div>
      <Link to='/aboutus'><span>&#8592;</span> <span>Go Back </span></Link>
   
    {
      blog ? (<div className="blog-wrap">
      <header>
        <p className='blog-date'>Published {blog.createdAt}</p>
        <h1>{blog.title}</h1>
        <div className="blog-subCategory">
          {blog.subCategory.map((category,index)=>
          <div>
          <Chip key={index} label={category}/>
          </div>
          )}
        </div>
        
      </header>

      <img src={blog.cover} alt='cover' />
      <p className='blog-desc'>{blog.description}</p>
    </div>
    )
    :(
    <EmptyList />
    )}
    </div> 
    
  );
    };
export default Blogs