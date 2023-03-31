import React from 'react'

const Sidebar = ({readTime, bookmarks}) => {
    
    return (
        <div>
            <div className="readtime p-4 bg-[#6047EC1a] rounded-md text-[#6047EC] font-bold border-[#6047EC] border-2 text-center">
                <p>
                Spent time on read : {readTime} min
                </p>
            </div>

            <div className="bookmarks p-6 bg-[#11111110] mt-5 rounded-md">
                <p className='font-bold text-xl mb-4'>Bookmarked Blogs : {bookmarks.length}</p>
                {
                    bookmarks.length > 0 ? (
                        bookmarks.map(bookmark => (
                            <p key={bookmark.id} className='bg-white p-3 rounded-md mb-3 font-semibold'>
                                {bookmark.title}
                            </p>
                        ))
                    ) : (
                       (<p className='text-md font-semibold'>
                        No Bookmarks Added
                       </p>)
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar