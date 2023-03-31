import React from 'react'
import Header from '../Header/Header'
import Body from '../body/Body'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='container mx-auto py-8 lg:px-0 px-3'>
            <Header/>
            <Body/>
            <ToastContainer />
        </div>
    )
}

export default Main