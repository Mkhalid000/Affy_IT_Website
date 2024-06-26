import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IMG_URL, BLOGS_DETAIL } from '../Config/api';
import { Link } from 'react-router-dom';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';


export const Blogdetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    const createSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
                const response = await fetch(BLOGS_DETAIL + "/" + id, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data)
                setBlog(data);

                // Update the URL with the blog title slug
                const slug = createSlug(data.title);
                navigate(`/blogs/${id}/${slug}`, { replace: true });

            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id, navigate]);

    if (!blog) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                
            </div>
        );
    }


    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" >
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Blog Details</h1>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Blog details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid  wow fadeInUp" >
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-8">
                            <div class="row g-5">
                                <div class="col-md-12 wow slideInUp" >
                                    <div class="blog-item bg-light rounded overflow-hidden" style={{
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '.25rem',
                                        overflow: 'hidden'
                                    }}>
                                        <div class="blog-img position-relative overflow-hidden" style={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            width: '100%',
                                            height: '300px'
                                        }}>
                                            <img class="img-fluid" src={`${IMG_URL}${blog.image}`} alt="" style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }} />
                                        </div>
                                        <div class="p-4" style={{ padding: '1.5rem' }}>
                                            <h5 class="mb-3 text-black" style={{ marginBottom: '1rem' }}>{blog.title}</h5>
                                            <p class="text-black">{blog.description}</p>
                                            {/* <a class="text-uppercase" href="" >Read More <i class="bi bi-arrow-right"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 col-lg-4 wow slideInUp" >
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="mb-0">Our Services</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start text-dark">
                                <a class="h5  bg-light item0 rounded py-2 px-3 mb-2 text-dark"><i
                                    class="bi bi-arrow-right me-2 text-black"></i>3D Web Design</a>
                                <a class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>UI/UX</a>
                                <a  class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>Software Development</a>
                                <a   class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>App Development</a>
                                <a  class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>Cloud Services</a>
                                <a  class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>Digital Marketing</a>
                                <a  class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>Blockchain Development</a>
                                <a class="h5  bg-light item0 rounded py-2 px-3 mb-2"><i
                                    class="bi bi-arrow-right me-2"></i>Data Analytics</a>
                            </div>
                        </div>
                        <div class="mb-5 wow slideInUp" >
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="mb-0">Services</h3>
                            </div>
                            <div class="d-flex flex-wrap m-n1">
                                <Link><a  class="btn btn-light m-1">Design</a></Link>
                                <Link><a  class="btn btn-light m-1">Development</a></Link>
                                <Link><a  class="btn btn-light m-1">Marketing</a></Link>
                                <Link><a  class="btn btn-light m-1">SEO</a></Link>
                                <Link><a  class="btn btn-light m-1">Writing</a></Link>
                                <Link><a  class="btn btn-light m-1">Consulting</a></Link>
                                <Link><a  class="btn btn-light m-1">Design</a></Link>
                                <Link><a  class="btn btn-light m-1">Development</a></Link>
                                <Link><a  class="btn btn-light m-1">Marketing</a></Link>
                                <Link><a  class="btn btn-light m-1">SEO</a></Link>
                                <Link><a  class="btn btn-light m-1">Writing</a></Link>
                                <Link><a class="btn btn-light m-1">Consulting</a></Link>
                            </div>
                        </div>
                        <div class="wow slideInUp" >
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="mb-0">About Affy Cloud</h3>
                            </div>
                            <div class="bg-light text-center rounded" style={{ padding: '30px' }}>
                                <p className='text-black fs-5'>Affy Cloud IT Solution is a hub of innovation, driven by a skilled team dedicated to making a significant impact in strategy, consulting, and infrastructure solutions. We're committed to startups, SMEs, and enterprises, using our unique skills and visionary ideas to create transformative solutions.</p>
                                <Link to="/about"><a  class="btn colorb text-black border py-2 px-4">Read More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
