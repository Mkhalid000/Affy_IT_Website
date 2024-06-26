import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { IMG_URL } from '../Config/api';
import { Link, useNavigate } from 'react-router-dom';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import "../App.css"
import { Footer } from '../Componants/Footer';
import { GET_BLOGS } from '../Config/api';

export const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
        const [blogs, setBlogs] = useState([]);
      const navigate = useNavigate();
    
      useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const response = await fetch(GET_BLOGS, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setBlogs(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };
    
        fetchBlogs();
      }, []);
    
      const handleBlogClick = (blogId) => {
        navigate(`/blogs/${blogId}`);
      };
    
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '60px' }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Blogs Page</h1>
                            <a  className="h6 text-white">Home</a>
                            <i className="fa fa-angle-right text-white px-2"></i>
                            <a className="h6 text-white">Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid  wow fadeInUp" >
                <div class="container py-2">
                    <div class="row g-5">
                        <div class="col-lg-12">
                            <div class="row g-5">
                            {blogs.map(blog => (
                                <div class="col-md-4 wow slideInUp"  onClick={() => handleBlogClick(blog.id)}>
                                    <div class="blog-item bg-light rounded overflow-hidden" style={{ maxHeight: '600px' }}>
                                        <div class="blog-img position-relative overflow-hidden" style={{ maxHeight: '200px' }}>
                                            <img class="img-fluid" src={`${IMG_URL}${blog.image}`} alt="" />
                                        </div>
                                        <div class="p-4">
                                            <h5 class="mb-3 text-black"><a className="text-fiord-blue">{blog.title.slice(0, 50)}...</a></h5>
                                            <p className='text-black'>{blog.description.slice(0, 100)}...</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                       
                        <div class="mb-5">
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
                        <div className='mb-4'>
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="mb-0">About Affy Cloud</h3>
                            </div>
                            <div class="bg-light text-center rounded" style={{ padding: '30px' }}>
                                <p className='text-black fs-5'>Affy Cloud IT Solution is a hub of innovation, driven by a skilled team dedicated to making a significant impact in strategy, consulting, and infrastructure solutions. We're committed to startups, SMEs, and enterprises, using our unique skills and visionary ideas to create transformative solutions.</p>
                              <Link to="/about">  <a class="btn colorb border text-black read border py-2 px-4">Read More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
