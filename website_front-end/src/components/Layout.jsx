import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Routes from '../routes/Routes.jsx';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={ props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout