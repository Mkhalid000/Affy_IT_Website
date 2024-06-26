import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import soft1 from "../img/soft1.jpg"
import soft2 from "../img/soft2.jpg"



export const Software = () => {
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
                            <h1 className="display-4 text-white animated zoomIn">Software Development</h1>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">software development</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">Software Development</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to Affy Cloud Software Development Services!   We're here to help your business grow by making things easier, faster, and smarter. Whether you need to organize your work, get more done, or come up with new ideas, our custom software solutions are made just for you. Let's make your business shine in the digital world together.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud , we believe in teamwork when creating software. We'll work closely with you to understand what you want to achieve with your business and what challenges you face. From the start of the idea to when it's all finished and ready to use, our team is dedicated to giving you solutions that go above and beyond what you expect and make a real difference to your business.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={soft1} style={{ objectFit: 'cover' }} alt="" />
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
                                <img className="position-absolute img-fluid w-100 h-100"  src={soft2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">What is Software Development?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Software development is like creating a Map we design, write, test, and keep things running smoothly to make sure your software does what you need it to. Whether it's a website, phone app, or computer program, our team of experts is here to turn your ideas into reality.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of Software <br /> Development</h5>
                                    <h5>Custom software is like having a personal assistant tailored just for your business. It takes care of repetitive tasks so your team can focus on the important stuff. That means getting things done faster and with less hassle.<br /> <br />By eliminating manual processes and reducing human error, software solutions help improve the accuracy and reliability of your business operations.</h5>
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
