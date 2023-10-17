import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/knowledgeCafe.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl font-bold m-2">BLOG: {blogs.length}</h1>
      {
        blogs.map(blog => <Blog
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
          key={blog.id} blog={blog}></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blogs;