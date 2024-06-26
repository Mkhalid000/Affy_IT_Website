import "./Dashboard.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMG_URL , GET_BLOGS, DELETE_BLOG} from '../Config/api';
import { useNavigate } from 'react-router-dom';

export const Blogpost = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/dashboard'); // Redirect to the home page
  };

  const [blogs, setBlogs] = useState([]);

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
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) {
      return;
    }

    try {
      const response = await fetch(DELETE_BLOG + "/" + id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setBlogs(blogs.filter(blog => blog.id !== id));
      toast.success('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Error deleting blog post!');
    }
  };
  return (
    <div class="admin">
      <header class="admin__header d-flex justify-content-between">
        <a href="#" class="logo border-bottom">
          <img src='https://affyclouditsolutions.com/assets/affy-logo.png'></img>
          <h5 className='text-white'>Affy Dashboard</h5>
        </a>
        <div className="d-flex align-items-center "style={{ width: '10%' }}> {/* Added flexbox to align items */}
          <button type="button" className="btn btn-info py-2 mr-3" onClick={handleLogout}>logout</button> {/* Added mr-3 for right margin */}
        </div>
      </header>
      <nav class="admin__nav">
        <ul class="menu">
          <li class="menu__item mt-4">
            <Link to="/dashboard"><a class="menu__link fs-5"><i class="bi bi-bounding-box"></i> Dashboard</a></Link>
          </li>
          <li class="menu__item">
            <Link to="/blogpost"><a class="menu__link fs-5"><i class="bi bi-credit-card-2-front-fill"></i> Blog Post</a></Link>
          </li>
          <li class="menu__item">
            <Link to="/addblog"><a class="menu__link fs-5"><i class="bi bi-code-slash"></i> Add Blogs</a></Link>
          </li>
          <li class="menu__item">
            <Link to="/inquiry"><a class="menu__link fs-5"><i class="bi bi-chat-left"></i> inquiry</a></Link>
          </li>
        </ul>
      </nav>

      <div class="admin__main ">
        <span className="text-uppercase page-subtitle text-secondary">Blog post</span>
        <h3 className='text-black'>Blog Post</h3>
        <div className="h-100">
                <div className="main-content-container container-fluid px-4">
                  <div className="row ">
                    {blogs.map(blog => (
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={blog.id}>
                        <div className="card card-small card-post card-post--1 shadow-sm">
                          <div className="card-post__image">
                            <img
                              src={`${IMG_URL}${blog.image}`}
                              style={{
                                position: 'relative',
                                width: '100%',
                                maxHeight: '130px',
                                objectFit: 'cover',
                                borderTopLeftRadius: 'calc(.25rem - 1px)',
                                borderTopRightRadius: 'calc(.25rem - 1px)',
                              }}
                              alt="Blog Post"
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">
                              <a className="text-fiord-blue">{blog.title.slice(0, 50)}...</a>
                            </h5>
                            <p className="card-text">
                              {blog.description.slice(0, 100)}...
                            </p>
                          </div>
                          <div className="card-footer d-flex justify-content-between">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(blog.id)}
                            >
                              Delete
                            </button>
                            <Link to={`/update/${blog.id}`} className="btn btn-secondary btn-sm">
                              Update
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
             
        </div>

      </div>

    </div>
  )
}