import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import logo from "../img/affy_logo.png"


export const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start bg-body-tertiary text-muted footer-bg pt-5">
                <section class="">
                    <div class="container text-center text-md-start">

                        <div class="row">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <img class="footer-logo" src={logo} alt=''/>
                                <p className='mt-3'>
                                We craft the future, not <br/>just websites 
                                </p>
                                <p className='mt-4'>
                                    Stay tuned with us on social networks!
                                </p>

                                {/* <!------------- Start  khalid---------------> */}

                                <div class="social-icons">
                                    {/* <!-- Instagram --> */}
                                    <a href="https://www.instagram.com/affy_cloud/?igsh=MXE1YXpuN3VrOTZwYw%3D%3D" target="_blank" class="me-4 insta">
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    {/* <!-- WhatsApp --> */}
                                    <a target="_blank" class="me-4 whatsapp">
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                    {/* <!-- LinkedIn --> */}
                                    <a href="https://www.linkedin.com/in/affy-cloud-2b6137309/" target="_blank" class='linkdlin'>
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@affycloud" target="_blank" class='youtube'>
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                                {/* <!-- -------- End ---------------------- --> */}
                            </div>



                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <div className=" position-relative pb-3 mx-auto" style={{ maxWidth: '400px' }}>
                                    <h3 className="mb-0 "><span className='color'>Quick </span>Links</h3>
                                </div>
                                <p>
                                    <Link to="/"><a class="text-reset talk1 talk">Home</a></Link>
                                </p>
                                <p>
                                    <Link to="/about"><a class="text-reset talk1 talk">About Us</a></Link>
                                </p>
                                <p>
                                    <Link to="/"><a class="text-reset talk1 talk">Services</a></Link>
                                </p>
                                <p>
                                    <Link to="/blogs"><a class="text-reset talk1 talk">Blogs</a></Link>
                                </p>
                                <p>
                                    <a  class="text-reset talk">SAP Consultant
                                    </a>
                                </p>
                                <p>
                                    <Link to="/contact"><a class="text-reset talk1 talk">Contact</a></Link>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                                <div className=" position-relative pb-3 mx-auto" style={{ maxWidth: '400px' }}>
                                    <h3 className="mb-0 ">Services</h3>
                                </div>
                                <Link to="/uiux"><a><p className='talk'>UI/UX</p></a></Link>

                                <Link to="/cloud"> <a><p className='talk'>Cloud Services</p></a></Link>

                                <Link to="/data"><a><p className='talk'>Data Analytics</p></a></Link>

                                <Link to="/app"><a><p className='talk'>App Development</p></a></Link>

                                <Link to="/web"><a><p className='talk'>Website Development</p></a></Link>

                                <Link to="/software"> <a><p className='talk'>Software Development</p></a></Link>
                                <Link to="/digital"> <a><p className='talk'>Digital Marketing</p></a></Link>
                                <Link to="/blockchain"> <a><p className='talk'>Blockchain Development</p></a></Link>
                            </div>

                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <div className=" position-relative pb-3 mx-auto" style={{ maxWidth: '400px' }}>
                                    <h3 className="mb-0 ">Address</h3>
                                </div>
                                <p><i class="fas fa-home me-3"></i>104, Nasheman Firoza Apartments, Koh-e-fiza, Bhopal Madhya
                                    Pradesh,
                                    462030</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@affyclouditsolutions.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +91-8349113331</p>
                                <p><i class="fas fa-phone me-3"></i> +91-87703 06617</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center text-white px-4 py-3 border-white bg-black" >
                    © 2024
                    <a class="fw-bold text-affy"> Affy Cloud IT Solutions.</a> All Rights
                    Reserved
                </div>
            </footer>
        </div>
    )
}
