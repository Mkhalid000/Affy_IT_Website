import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css"


gsap.registerPlugin(ScrollTrigger);

export const Technologies = () => {

    const heading1 = useRef(null);
    const heading2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heading1.current,
            { scale: 0.8 },
            {
                scale: 1,
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
        gsap.fromTo(
            heading2.current,
            { scale: 0.8 },
            {
                scale: 1,
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
        <div className='container mt-4'>
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                <h1 class="mb-4" ref={heading1}>Best Technology For Your Project</h1>
                <p className='text-white mb-3 text-center lead fs-4' ref={heading2}>Choosing the best technology ensures optimal performance, scalability, and user satisfaction.</p>
            </div>
            <div className='row'>
                <div className='col  image-container'>
                    <img
                        src='https://sdlccorp.com/wp-content/uploads/2023/08/Technologies-3-1536x816.webp'
                        alt='Technologies'
                        className='image'
                    />
                </div>
            </div>
        </div>
    )
}
