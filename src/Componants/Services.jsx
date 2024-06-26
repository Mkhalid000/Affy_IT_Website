import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import "../App.css"
import web from "../img/web.webp"
import uiux from "../img/uiuxp.png"
import soft from "../img/software.webp"
import app from "../img/app.png"
import digital from "../img/digital.png"
import cloud from "../img/cloud.png"
import block from "../img/block.png"
import data from "../img/data.png"



gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const heading = useRef(null);



    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.7 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );

    }, []);
    return (
        <div class="container-fluid  wow fadeInUp" >
            <div class="container py-5">
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h1 class="mb-4" ref={heading}>Custom IT Solutions for Your Successful Business</h1>
                    <p className='text-white mb-3 text-center lead fs-4'>We offer premier services where excellence meets affordability.</p>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon bg-white">
                                <img className='w-75 h-75' src={web} alt='' />
                            </div>
                            <h4 class="mb-3">3D Web Design</h4>
                            <p class="m-0">Creating immersive web experiences with interactive 3D elements for enhanced engagement and captivating user journeys.</p>
                            <Link to="/web"><a class="btn btn-lg arrow colorb rounded">
                                <i class="bi bi-arrow-right"></i>
                            </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon bg-white">
                                <img className='w-75 h-75' src={uiux} alt=''/>
                            </div>
                            <h4 class="mb-3">UI/UX</h4>
                            <p class="m-0">Elevating user experience through intuitive interfaces, seamless interactions, and visually engaging design for optimal engagement.</p>
                            <Link to="/uiux"><a class="btn btn-lg colorb arrow rounded">
                                <i class="bi bi-arrow-right"></i>
                            </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon bg-white">
                                <img className='w-75 h-75 ' src={soft} alt=''/>
                            </div>
                            <h4 class="mb-3">Software Development</h4>
                            <p class="m-0">Crafting robust software solutions, driving innovation, efficiency, and meeting diverse user needs with expertise.</p>
                            <Link to="/software"><a class="btn btn-lg colorb arrow rounded">
                                <i class="bi bi-arrow-right"></i>
                            </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon  bg-white">
                                <img className='w-75 h-75' src={app} alt=''/>
                            </div>
                            <h4 class="mb-3">App Development</h4>
                            <p class="m-0">Creating user-friendly apps, blending innovation and functionality to deliver seamless experiences across platforms.</p>
                            <Link to="/app">
                                <a class="btn btn-lg colorb arrow rounded">
                                    <i class="bi bi-arrow-right"></i>
                                </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon  bg-white">
                                <img className='w-75 h-75 ' src={cloud} alt=''/>
                            </div>
                            <h4 class="mb-3">Cloud Services</h4>
                            <p class="m-0">Efficiently scale operations, storage, and computing power with secure, flexible cloud services infrastructure.</p>
                            <Link to="/cloud">
                                <a class="btn btn-lg colorb arrow rounded">
                                    <i class="bi bi-arrow-right"></i>
                                </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon  bg-white">
                                <img className='w-75 h-75 ' src={digital} alt='' />
                            </div>
                            <h4 class="mb-3">Digital Marketing</h4>
                            <p class="m-0">Online promotion of products/services using digital channels to reach and engage target audiences.</p>
                            <Link to="/digital">
                                <a class="btn btn-lg colorb arrow rounded">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon">
                                <img className='w-75 h-75' src={block}  alt=''/>
                            </div>
                            <h4 class="mb-3 text-black">Blockchain Development</h4>
                            <p class="m-0 text-black">Secure, decentralized applications using blockchain technology for transparent and efficient transactions.</p>
                            <Link to="/blockchain">
                                <a class="btn btn-lg colorb arrow rounded">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="service-item colorb1 rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon  bg-white">
                                <img className='w-75 h-75 ' src={data} alt=''/>
                            </div>
                            <h4 class="mb-3">Data Analytics</h4>
                            <p class="m-0">Insights extraction from data for informed decision-making, optimizing strategies and operations.</p>
                            <Link to="/data">
                                <a class="btn btn-lg colorb arrow rounded">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1">
                        <div class="position-relative border bg-white rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <h3 class="text-black mb-3">Call Us For Quote</h3>
                            <p class="text-black mb-3">Please Feel Free to Contact Us</p>
                            <h2 class="text-black mb-0">8349113331</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
