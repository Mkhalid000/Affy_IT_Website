import React, { useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { TopNavbar } from '../Componants/TopNavbar'
import { Footer } from '../Componants/Footer';
import cloud1 from "../img/cloud1.webp"
import cloud2 from "../img/cloud2.jpg"

export const Cloud = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '60px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Cloud Service</h1>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Cloud Service</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">Cloud Services</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to our cloud services! We're here to help your business grow by making things easier and more flexible. With our range of cloud solutions, we make it simple for businesses of any size to take advantage of the cloud's power, unlocking new ways to grow and work smarter.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud, we team up with top cloud providers to craft unique solutions that fit your needs perfectly. Whether you're aiming to transition to the cloud, enhance your current setup, or develop apps designed specifically for cloud use, we're here to guide you every step of the way.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={cloud1} style={{ objectFit: 'cover' }} alt="" />
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
                                <img className="position-absolute img-fluid w-100 h-100" src={cloud2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">What are Cloud Services?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Cloud services are like having a magic toolbox in the sky, where you can access all your tools and files from anywhere with internet. It's like having a virtual office that can expand or shrink whenever you need, without worrying about buying new equipment.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of Cloud Services</h5>
                                    <h5>Think of your business as a swift runner, always ready to adapt to changes in the market. With our cloud services, you can quickly roll out new apps and services, staying ahead of the competition.<br /> <br />Picture your team as a well-oiled machine, smoothly working together no matter where they are. Our cloud services make teamwork seamless, allowing your employees to collaborate effortlessly.</h5>
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
