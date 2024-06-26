import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"

export const Testimonial = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75 " src={slide1} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center text-black'>~Threadsbrew</h3>
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p className='text-center mb-5 text-black'>Affy Cloud IT Solutions optimized our online platform, elevating our clothing brand's digital presence effortlessly</p>


                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75" src={slide2} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center text-black'>~Wings Academy</h3>
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p className='text-center mb-5 text-black'>Affy Cloud IT Solutions revolutionized our institution's tech infrastructure, fostering dynamic learning environments.</p>


                    </div>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col' style={{ textAlign: 'center' }}>
                            <img className=" w-50 h-75 " src={slide3} alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className='text-center text-black'>~ARK Earthmover</h3>
                        <div class="stars" style={{ textAlign: 'center' }}>
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p className='text-center mb-5 text-black'>Thanks to Affy Cloud IT Solutions, our firm's digital operations are streamlined, and satisfied clients.</p>


                    </div>

                </div>
            </Carousel.Item>
        </Carousel>
    );
}
