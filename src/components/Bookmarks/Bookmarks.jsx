
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

  return (

    <div className="md:w-1/3 bg-gray-200 rounded-md m-6">
      <h3 className="text-3xl text-center p-4">Reading Time: {readingTime}</h3>
      <h1 className="text-3xl text-center p-4">Bookmarked Blogs: {bookmarks.length}</h1>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>

  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;