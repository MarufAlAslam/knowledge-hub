import React from 'react'
import avatar from "../../assets/img/avatar.png"

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="title">
                    <h2 className='text-4xl font-bold'>Knowledge Hub</h2>
                </div>
                <div className="action">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header