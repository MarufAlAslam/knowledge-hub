import React from 'react'
import { BsBookmarkCheck } from 'react-icons/bs'

const Blogs = ({blogs, updateReadTime, updateBookmarks}) => {

    const readTimeUpdateHandler = (id) => {
        const blog = blogs.find(blog => blog.id === id)
        updateReadTime(blog.minutesToRead)
    }

    const bookmarkUpdateHandler = (id) => {
        const blog = blogs.find(blog => blog.id === id)
        updateBookmarks(blog)
    }
    // console.log(blogs)
    return (
        <div className='lg:pr-10 pr-0'>
            {
                blogs.map(blog => (
                    <div key={blog.id} className="blog-container mb-5">
                        <img src={blog.image} className='w-full h-[350px] object-left-top object-cover rounded-md mb-4' alt="" />
                        <div className="flex justify-between items-center">
                        <div className="flex items-center justify-start">
                            <img src={blog.avatar} className='w-10 h-10 rounded-full mr-4' alt="" />
                            <div className="flex flex-col">
                                <h1 className='text-lg font-bold'>{blog.name}</h1>
                                <p className='text-sm text-gray-500'>{blog.postedOn}</p>
                            </div>
                        </div>
                        <div className="bookmark flex justify-end items-center">
                            <p>
                                {blog.minutesToRead < 10 ? `0${blog.minutesToRead}` : blog.minutesToRead} min read
                            </p>
                            <button className='btn ml-2' onClick={()=>bookmarkUpdateHandler(blog.id)}>
                                <BsBookmarkCheck/>
                            </button>
                        </div>
                        </div>

                        <h1 className='text-2xl font-bold mt-4'>{blog.title}</h1>
                        <p>
                        {
                            blog.tags.map(tag => (
                                <button key={tag} className='btn btn-sm btn-outline-primary ml-0 mr-3 text-gray-500 mt-2'>#{tag}</button>
                            ))
                        }
                        </p>
                        <button className='btn font-semibold underline mt-3 text-[#6047EC]' onClick={()=>readTimeUpdateHandler(blog.id)}>
                            Mark as read
                        </button>
                        <hr className='mt-5' />
                    </div> ))
            }
        </div>
    )
}

export default Blogs