import React, { useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { TopNavbar } from '../Componants/TopNavbar';
import { Footer } from '../Componants/Footer';

import app1 from "../img/app1.webp"
import app2 from "../img/app2.png"

export const Application = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNavbar/>
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">App Development</h1>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">App development</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature  px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">App Development</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to our app development service! We're here to make your business shine in the digital world. Our specialty is building mobile apps that grab attention, keep users interested, and help your business grow. Let's work together to create something amazing.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud, we're in this together. We collaborate with you to understand your business objectives, your audience, and what your app needs to do. From start to finish, our team is dedicated to creating top-notch apps that prioritize user satisfaction and exceed your expectations.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={app1} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden mt-5 mb-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                    <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100"src={app2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">What is App Development?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>App development is all about making software for mobile devices like smartphones and tablets. Whether you need an app for iPhones, Android phones, or both, our team is skilled in creating custom apps just for you. We'll make sure your app fits your needs perfectly and helps you achieve your goals.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of App Development</h5>
                                    <h5>A custom-made app can make your business look special in the sea of other apps. It's like having your own unique style that people remember.<br/><br/>With an app, you can chat directly with your customers. You can send them messages, offers, and things they might like, making them feel special and keeping them interested in your business.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
