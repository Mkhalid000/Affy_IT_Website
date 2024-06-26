import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Import jQuery if not already imported
import "../App.css"
import logo from "../img/affy_logo.png"

export const Navbar = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // State to track Solutions dropdown

    useEffect(() => {
        // Sticky Navbar
        const handleScroll = () => {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
            } else {
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        };

        $(window).on('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleSolutionsToggle = () => {
        setIsSolutionsOpen(!isSolutionsOpen); // Toggle the Solutions dropdown
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <img className='logo_img' src={logo} alt="Logo"></img>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded={!isNavbarCollapsed}
                aria-label="Toggle navigation"
                onClick={handleToggle}
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`}>
                <div className="navbar-nav ms-auto navvvv py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <div className={`nav-item dropdown ${isSolutionsOpen ? 'show' : ''}`}>
                        <a href="/" className="nav-link kkk dropdown-toggle" data-bs-toggle="dropdown" onClick={handleSolutionsToggle}>Services</a>
                        <div className={`dropdown-menu m-0 ${isSolutionsOpen ? 'show' : ''}`}>
                            <Link to='/web' className="dropdown-item">3D Website design</Link>
                            <Link to='/uiux' className="dropdown-item">UI/UX</Link>
                            <Link to="/software" className="dropdown-item">Software Development</Link>
                            <Link to='/app' className="dropdown-item">APP Development</Link>
                            <Link to="/cloud" className="dropdown-item">Cloud Service</Link>
                            <Link to="/digital" className="dropdown-item">Digital Marketing</Link>
                            <Link to="/data" className="dropdown-item">Data Analytics</Link>
                            <Link to="/Blockchain" className="dropdown-item">Blockchain Development</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="/blogs"><a className="nav-item nav-link">Blogs</a></Link>
                    </div>
                    <a href="https://affycloudsolution.com/" target="_blank"  className="nav-item nav-link">SAP Consultant</a>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    <Link to="/login"><a className="nav-item nav-link">Login</a></Link>
                </div>
            </div>
        </nav>
    )
}
