import React from 'react'
import '../css/Nav.css'
import {Link} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Nav = () => {

    const [showNav, setShowNav] = useState(false)

    function handclick(){
        setShowNav((prev) => !prev)
    }

    return (
        <nav>
            <div className="nav-container">
                <div
                    className='nav-content1'
                >
                    <h1>
                        Menu
                    </h1>
                </div>
                <div className="nav-content2">
                  
                        <button className='nav-menu'
                        onClick={handclick}
                        >
                            <div className="bars"></div>
                            <div className="bars"></div>
                            <div className="bars"></div>
                        </button>
            
                </div>
            </div>
            <div className={`nav-link ${showNav ? 'show' : 'hide'}`}>
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/project">Projects</Link>
                <Link className="nav-item" to="/service">Services</Link>
                <Link className="nav-item page-nav" to="/pages">Page
                <ul className='page-link'>
                    <li>Features</li>
                    <li>Teams</li>
                    <li>Testimonial</li>
                    <li>404 Page</li>
                </ul>
                </Link>
                <Link className="nav-item" to="/contact">Contact</Link>
            </div>
           
        </nav>
    )
}

export default Nav