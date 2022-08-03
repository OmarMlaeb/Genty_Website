import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Routes from '../routes/Routes.jsx';

const Layout = () => {
    return (
        <BrowserRouter> {/* enables navigation between views from different components, as it allows the browser URL to be changed, and keeps the UI in sync with the URL */}
            <Route render={ props => ( // to pass data from one component to another (from a parent component to a child components)
                <div>
                    <Header {...props}/>  {/* pass all the props set by Route to header using spread operator as a shortcut to listing all the Route props manually */}
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