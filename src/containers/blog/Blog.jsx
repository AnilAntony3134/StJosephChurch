import './blog.css';
import {Bloglist} from '../../components';
import './blog.css';
import {blogList} from '../../config/data'; 
const Blog = () =>{

  const searchKey='History';

  const allBlogs=blogList;
    const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

return (

  <div className='Aboutus-wrap'>
      <h2 className='gradient__text'>Articles</h2>

    <Bloglist blogs={filteredBlogs} />
  </div>
  )
}
export default Blog