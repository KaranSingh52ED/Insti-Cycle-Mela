import React from 'react'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';


function Layout({ children }) {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className="content">
                {children} 
            </div>
            <Footer />
        </div>
    )
}

export default Layout