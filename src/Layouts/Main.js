import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;