import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Team.css"
import image from '../img/khizar.png'
import image1 from "../img/anas.jpeg"
import image2 from "../img/mubashir.jpeg"
import image3 from "../img/arsalan.jpeg"


gsap.registerPlugin(ScrollTrigger);


export const Team = () => {
    const heading = useRef(null);
    const heading2 = useRef(null);
    
    


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
            heading2.current,
            { scale: 0.8 },
            {
                scale: 1.1,
                duration: 1,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading2.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        ); 
               
    }, []);
    return (
        // <!-- Team 1 - Bootstrap Brain Component -->
        <section class=" py-3 py-md-5 py-xl-8 mt-3">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 class="mb-4 display-6 text-center" ref={heading}>Our Team</h2>
                        <p class="text-white mb-5 text-center lead fs-4"  ref={heading2}>We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
                        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>

            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0 gx-xxl-5">
                    <div class="col-12 col-md-6 col-lg-3 cardb">
                        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div class="card-body p-0">
                                <figure class="m-0 p-0">
                                    <img class="img-fluid" loading="lazy" src={image} alt="Flora Nyra" />
                                    <figcaption class="m-0 p-4">
                                        <h4 class="mb-1">Khizar Saeed Khan</h4>
                                        <p class="text-secondary mb-0 fw-semibold">CEO</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div class="card-body p-0">
                                <figure class="m-0 p-0">
                                    <img class="img-fluid" loading="lazy" src={image1} alt="Evander Mac" />
                                    <figcaption class="m-0 p-4">
                                        <h4 class="mb-1">Mohd Anas Shaikh</h4>
                                        <p class="text-secondary mb-0 fw-semibold">CTO</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div class="card-body p-0">
                                <figure class="m-0 p-0">
                                    <img class="img-fluid" loading="lazy" src={image2} alt="Taytum Elia" />
                                    <figcaption class="m-0 p-4">
                                        <h4 class="mb-1">Mubashir Khan</h4>
                                        <p class="text-secondary mb-0 fw-semibold">Practice Lead</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div class="card-body p-0">
                                <figure class="m-0 p-0">
                                    <img class="img-fluid" loading="lazy" src={image3} alt="Wylder Elio" />
                                    <figcaption class="m-0 p-4">
                                        <h4 class="mb-1">Arsalan Khan</h4>
                                        <p class="text-secondary mb-0 fw-semibold">Tech Lead</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
