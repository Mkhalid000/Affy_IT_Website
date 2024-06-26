import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import "../App.css";
import about1 from "../img/about1.jpg"
import about0 from "../img/about0.avif"

gsap.registerPlugin(ScrollTrigger);

export const Aboutus = () => {
    const imageRef = useRef(null);
    const imageRef1 = useRef(null);
    const imageRefl = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            imageRef1.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRef1.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                },
            }
        );
        gsap.fromTo(
            imageRefl.current,
            { scale: 0.8 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: imageRefl.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                },
            }
        );
       
    }, []);

    return (

        <div>
            <div className="container-fluid  aboutback wow fadeInUp">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">                              
                                <h2 className="mb-0 heading-hover" >The Best IT Solutions Providers With 6 Years of Experience</h2>
                            </div>
                            <p className="mb-4">
                                Affy Cloud IT Solution is a hub of innovation, driven by a skilled team dedicated to making a significant impact in strategy, consulting, and infrastructure solutions. We're committed to startups, SMEs, and enterprises, using our unique skills and visionary ideas to create transformative solutions.
                            </p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-6 wow zoomIn" >
                                    <h5 className="mb-3"><i className="fa fa-check color me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check color me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3"><i className="fa fa-check color me-3"></i>24/7 Support</h5>
                                    <h5 className="mb-3"><i className="fa fa-check color me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow fadeIn" >
                                <div className="bg-white d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-phone-alt text-black"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className=" mb-0">+91-8349113331
                                    </h4>
                                </div>
                            </div>
                            <Link to="/contact"><a className="btn colorb colohover rounded-pill py-3 px-4 mt-3">Request A Quote</a></Link>
                        </div>
                        <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img ref={imageRef} className="position-absolute w-100 h-100 rounded wow zoomIn aboutus-image" data-wow-delay="0.9s" src={about0} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Features Start --> */}
            <div class="container-fluid wow fadeInUp" >
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 class="mb-0" ref={imageRefl}>We Are Here to Grow Your Business Exponentially</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 "  >
                            <div class="row g-5">
                                <div class="col-12 wow zoomInfeatures-item" data-wow-delay="0.2s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-cubes text-black"></i>
                                    </div>
                                    <h4>Best In Industry</h4>
                                    <p class="mb-0">Unparalleled excellence, innovative solutions, highest standards, expert craftsmanship, and top-tier performance in the industry.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-award text-black"></i>
                                    </div>
                                    <h4>Award Winning</h4>
                                    <p class="mb-0">Recognized for excellence, our award-winning team delivers innovative, high-quality solutions that set industry standards.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                            <div class="position-relative h-100">
                                <img ref={imageRef1}  class="position-absolute w-100 h-100 rounded wow zoomIn" src={about1} style={{ objectFit: 'cover' }} alt=''/>
                            </div>
                        </div>
                        <div class="col-lg-4 "   >
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-users-cog text-black"></i>
                                    </div>
                                    <h4>Professional Staff</h4>
                                    <p class="mb-0">Highly skilled, experienced professionals delivering exceptional service with dedication, expertise, and attention to detail.</p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div class="colorb rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fs-4 fa-phone-alt text-black"></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p class="mb-0">Reliable, around-the-clock assistance ensuring continuous availability, prompt responses, and comprehensive support anytime, anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features Start --> */}
        </div>
    );
};
