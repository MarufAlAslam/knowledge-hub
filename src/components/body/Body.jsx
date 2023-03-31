import React, { useEffect, useState } from 'react'
import Blogs from './Blogs'
import Sidebar from './Sidebar'


const Body = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState(0)
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [])

    const updateReadTime = (time) => {
        setReadTime(readTime + time)
    }

    const updateBookmarks = (blog) => {
        // check if aleady bookmarked
        const isBookmarked = bookmarks.find(bookmark => bookmark.id === blog.id)
        if(isBookmarked){
            alert('Already Bookmarked')
        }
        else{
            setBookmarks([...bookmarks, blog])
        }
    }

    console.log(bookmarks)


    // console.log(blogs)

    return (
        <div>
            <hr className='my-4' />
            <div className="lg:flex md:block mt-4">
                <div className="blogs-container lg:w-3/4 w-full">
                    <Blogs blogs={blogs} updateReadTime={updateReadTime} updateBookmarks={updateBookmarks}/>
                </div>
                <div className="sidebar-container lg:w-1/4 w-full">
                    <Sidebar readTime={readTime} bookmarks={bookmarks}/>
                </div>
            </div>
        </div>
    )
}

export default Body