import React, { useState, useEffect, useRef } from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navRef = useRef(null);
    const [showNav, setShowNav] = useState(false);
    const [displayNav, setDisplayNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 200) {
                setDisplayNav(true)
            }
            else if (scrollY > 200 && scrollY <= 300) {
                setDisplayNav(false);
            } else {
                setDisplayNav(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handclick() {
        setShowNav((prev) => !prev);
    }

    return (
        <nav
            ref={navRef}
            className={`nav-placeholder ${displayNav ? "show" : "hide"}`}
        >
            <div
            className={`nav-area ${displayNav ? 'fixed' : ''}`}
            ></div>
            <div className="nav-container">
                <div className='nav-content1'>
                    <h1>Menu</h1>
                </div>
                <div className="nav-content2">
                    <button className='nav-menu' onClick={handclick}>
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
    );
};

export default Nav;
