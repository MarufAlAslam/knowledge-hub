import React from 'react'
import Header from '../Header/Header'
import Body from '../body/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='container mx-auto py-8'>
            <Header/>
            <Body/>
            <ToastContainer />
        </div>
    )
}

export default Main