import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { useAuth } from '../../context/AuthContext';
function Layout({ children }) {
    const { state } = useAuth();

    return (
        <div className='bg-white'>
            <Navbar isAuthenticated={state.isAuthenticated} /> 
            <div className="content flex items-center justify-center">
                {children}
            </div>
            <Footer isAuthenticated={state.isAuthenticated} /> 
        </div>
    );
}

export default Layout;
