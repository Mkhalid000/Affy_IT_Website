import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import uiux1 from "../img/uiux1.png"
import uiux2 from "../img/uiux2.jpeg"


export const Uiux = () => {  

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
                            <h1 className="display-4 text-white animated zoomIn">UI / UX</h1>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">ui/ux</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">User I/U Experience</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to Affy Cloud IT Solution's 
                               UI/UX design service! We're your partners in creating tailored designs to boost your digital footprint.
                                Whether you're launching a startup or rebranding, our team is dedicated to delivering intuitive and visually striking solutions. Let's collaborate and create a memorable digital journey together.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud we're all about making digital experiences that users absolutely love. Our secret sauce? We put your users at the heart of everything we design. That means we create interfaces that not only look awesome but also make sense and are easy to use. From sketching out ideas to testing prototypes, we're dedicated to making designs that stand out and make your audience say wow. Let's make your brand shine online.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={uiux1} style={{ objectFit: 'cover' }} alt="" />
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
                                <img className="position-absolute img-fluid w-100 h-100" src={uiux2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">What is UI/UX Design?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>In the digital world, UI/UX design is like the mastermind behind creating websites and apps that people love to use. It's all about understanding what users want and making sure everything looks good and works smoothly. Think of it as the secret sauce that makes digital stuff awesome and keeps people coming back for more. At Affy Cloud, we focus on developing beautiful and practical UI/UX designs that enhance consumer pride and power enterprise success.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of UI/UX Design</h5>
                                    <h5>At Affy Cloud IT Solution , we work together on 3D website development. We combine creativity and technical expertise to turn your ideas into reality. From planning to execution, our team collaborates closely with you to ensure your website represents your brand and resonates with your target audience.</h5>
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
