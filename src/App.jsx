import Swal from 'sweetalert2'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog => {
    const isExist = bookmarks.find(b => b.id === blog.id)
    if (!isExist) {
      setBookmarks([...bookmarks, blog])
      Swal.fire({
        title: 'Success!',
        text: 'Successfully Bookmarked!',
        icon: 'success',
        confirmButtonText: 'Close'
      })
      

    }
    else{ Swal.fire({
      title: 'Error!',
      text: 'Already Bookmarked!',
      icon: 'error',
      confirmButtonText: 'Close'
    })}
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time)
    //remove bookmark id 
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
