import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Footer } from '../Componants/Footer';
import React, { useEffect } from 'react';
import "../App.css"

export const Web = () => {
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
                            <h1 className="display-4 text-white animated zoomIn">3D Website design</h1>
                            <a className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">web design</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden mb-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100 w-100" style={{ position: 'relative', height: '100%', width: '100%' }}>
                                <iframe
                                    src='https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/' title="3D website"
                                    frameBorder='0'
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                ></iframe>
                                <img
                                    src='https://affyclouditsolutions.com/assets/affy-logo.png'
                                    alt='Logo'
                                    style={{ position: 'absolute', bottom: '10px', right: '10px', width: '60px', height: '60px', backgroundColor: '#191A1E', borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">3D Website Development?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>In 3D website development, we take regular websites and transform them into engaging experiences by adding moving graphics, interactive elements, and realistic settings. This innovative approach boosts user interest and ensures your website stands out with its unique visual appeal.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='fs-4 fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud IT Solution , we work together on 3D website development. We combine creativity and technical expertise to turn your ideas into reality. From planning to execution, our team collaborates closely with you to ensure your website represents your brand and resonates with your target audience.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};
