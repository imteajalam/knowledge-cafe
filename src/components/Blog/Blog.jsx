import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {id, title, author, author_img, reading_time, posted_times, hash_tag, cover } = blog;
  return (
    <div>
      <img className='w-full my-3' src={cover} alt={`cover picture of the title ${title}`} />

      <div className="flex justify-between">
        <div className='flex m-4 '>
          <img className='w-14' src={author_img} alt="" />
          <div className='ml-4'>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_times}</p>
          </div>
        </div>
        <div className='justify-center'>
          <span>{reading_time}min</span>
          <button onClick={() => handleAddToBookmark(blog)}
            className='ml-2 text-2xl text-blue-600'
          > <FaBookmark /></button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      <p>
        {
          hash_tag.map((hash, idx) => <span key={idx}><a className='text-red-600' href="">{hash}</a></span>)
        }
      </p>
      <button
        className='underline text-blue-700 font-bold'
        onClick={() => handleMarkAsRead(reading_time,id)}
      >Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;