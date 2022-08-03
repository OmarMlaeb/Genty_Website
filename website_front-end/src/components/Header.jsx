import React from 'react'

import { Link } from "react-router-dom";

import logo from '../assets/images/Logo-2.png';

const mainNav = [ /* declaring variables to be displayed on the page with its path */
    {
        display: "Home Page",
        path: "/"
    },
    {
        display: "Products",
        path: "/catalog"
    },
    {
        display: "Accessory",
        path: "/accessories"
    },
    {
        display: "Contact",
        path: "/contact"
    },
]

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/"> {/* locating image resource */}
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__left">
                        <div className="header__menu__mobile-toggle">
                            <i className='bx bx-menu-alt-left'></i> {/* adding menu icon */}
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className="header__menu__left__item"> {/* assigning key to the list items */}
                                    <Link to={item.path}>
                                        <span>{item.display}</span> {/* linking each item to its path */}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__right__item">
                            <i className='bx bx-search'></i>
                        </div>
                        <div className="header__menu__right__item">
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag'></i>
                            </Link>
                        </div>
                        <div className="header__menu__right__item">
                            <i className='bx bx-user'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header