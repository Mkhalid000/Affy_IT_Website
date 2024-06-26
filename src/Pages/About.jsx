import "../App.css";
import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Aboutus } from '../Componants/Aboutus';
import { Footer } from '../Componants/Footer';

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '50px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">About Us</h1>
                            <a  className="h5 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h5 text-white">About</a>
                        </div>
                    </div>
                </div>
            </div>
            <Aboutus />
            <Footer/>
        </div>
    );
};
