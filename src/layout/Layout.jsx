import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import Footer from './footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Main>{children}<Main />
            </Main >
            <Footer />
        </>
    )
}
