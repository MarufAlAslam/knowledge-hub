import React, { useEffect, useState } from 'react'
import Blogs from './Blogs'
import Sidebar from './Sidebar'


const Body = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState(0)

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    }, [])

    const updateReadTime = (time) => {
        setReadTime(readTime + time)
    }

    // console.log(blogs)

    return (
        <div>
            <hr className='my-4' />
            <div className="lg:flex md:block mt-4">
                <div className="blogs-container lg:w-3/4 w-full">
                    <Blogs blogs={blogs} updateReadTime={updateReadTime}/>
                </div>
                <div className="sidebar-container lg:w-1/4 w-full">
                    <Sidebar readTime={readTime}/>
                </div>
            </div>
        </div>
    )
}

export default Body