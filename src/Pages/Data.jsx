import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';
import data1 from "../img/data1.jpg"
import data2 from "../img/data2.jpg"



export const Data = () => {

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
                            <h1 className="display-4 text-white animated zoomIn">Data Analytics</h1>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Services</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a  className="h6 text-white">Data Analytics</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">Data Analytics</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to our Data Analytics services! We're here to help your business grow and  improving a website's position in search engine results pages (SERPs) to increase its visibility and drive traffic.  The goal is to make a website more discoverable and relevant to user search queries so that search engines rank it higher</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud, we start by understanding your audience and goals. Our approach is to data analytics include descriptive analytics, diagnostic analytics, predictive analytics, and prescriptive analytics. Data analytics relies on a variety of software tools including spreadsheets, data visualization, reporting tools, data mining programs, and open-source languages.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={data1} style={{ objectFit: 'cover' }} alt="" />
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
                                <img className="position-absolute img-fluid w-100 h-100"  src={data2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">What is Data Analytics ?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Data analytics is the process of collecting, modeling, and analyzing data to gain insights that can help organizations make decisions, optimize processes, and gain a competitive edge. A data analytics strategy is a plan that involves establishing goals, determining what data to collect, selecting analytical techniques and tools, and defining the processes and resources required to extract meaningful information</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of Data Analytics</h5>
                                    <h5>As a result, data analysis helps companies make informed decisions, create a more effective marketing strategy, improve customer experience, streamline operations, among many other things.</h5>
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
