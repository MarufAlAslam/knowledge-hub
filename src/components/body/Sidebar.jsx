import React from 'react'

const Sidebar = ({readTime}) => {
    return (
        <div>
            <div className="readtime p-4 bg-[#6047EC1a] rounded-md text-[#6047EC] font-bold border-[#6047EC] border-2 text-center">
                <p>
                Spent time on read : {readTime} min
                </p>
            </div>
        </div>
    )
}

export default Sidebar