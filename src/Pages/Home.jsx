import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Counting } from '../Componants/Counting';
import "../App.css"
import { Aboutus } from '../Componants/Aboutus';
import { Services } from '../Componants/Services';
import { Testimonial } from '../Componants/Testimonial';
import { TopNavbar } from '../Componants/TopNavbar';
import { Navbar } from '../Componants/Navbar';
import { Footer } from '../Componants/Footer';
import { Contactus } from '../Componants/Contactus';
import { Link } from 'react-router-dom';
import { Technologies } from '../Componants/Technologies';
import craousel1 from "../img/crasel1.jpg"
import caraousel2 from "../img/carsel2.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const heading = useRef(null);
    const heading1 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.8 },
            {
                scale: 1.1,
                duration: 1,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );
        gsap.fromTo(
            heading1.current,
            { scale: 0.8 },
            {
                scale: 1.1,
                duration: 1,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading1.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );
      

    }, []);

    return (
        <div>
            <TopNavbar />
            <div class="container-fluid position-relative p-0">
                <Navbar />
                <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={craousel1} alt="" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Affy Solution</h1>
                                    <Link to="/contact"><a class="btn  py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Free Quote</a></Link>
                                    <Link to="/contact"><a class="btn btn-outline-light py-md-3 px-md-5 animated quote_btn1 border rounded-pill slideInRight">Contact Us</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={caraousel2} alt="" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3 " style={{ maxWidth: '900px' }}>
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative IT Solution</h1>
                                    <Link to="/contact"><a class="btn  py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Free Quote</a></Link>
                                    <Link to="/contact"><a class="btn btn-outline-light py-md-3 px-md-5 animated quote_btn1 border rounded-pill slideInRight">Contact Us</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Counting />
            <Aboutus />
            <Services />
            <Technologies />
            <div>
                <div className="container-fluid  aboutback fadeInUp" >
                    <div className="container ">
                        <div className="row">
                            <div class="section-title text-center position-relative pb-3 mb-5 mt-5 mx-auto" style={{ maxWidth: '600px' }}>
                                <h1 class="mb-4" ref={heading}>What Clients Say</h1>
                                <p className='text-white mb-3 text-center lead fs-4' ref={heading1}>We place huge value on strong relationships and have seen the benefit they
                                bring to our business. Customer feedback is vital in helping us to get it right.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title position-relative pb-3 mb-4 ">
                                    <h2 className="mb-0 heading-hover mt-5">What Our Clients Say About Our Digital Services</h2>
                                </div>
                                <p className="mb-4 fw-semibold fs-5">
                                    We place huge value on strong relationships and have seen the benefit they
                                    bring to our business. Customer feedback is vital in helping us to get it right.
                                </p>

                            </div>
                            <div className="col-lg-6 border bg-white" style={{ minHeight: '350px' }}>
                                <div className="position-relative h-100 bg-white">
                                    <Testimonial />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contactus />

            <Footer />


        </div>
    )
}
