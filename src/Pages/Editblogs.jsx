import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { IMG_URL, EDIT_BLOGS } from '../Config/api';
import "./Dashboard.css";
import { Link, useNavigate } from 'react-router-dom';

const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

export const Editblogs = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState(null);
  const editorRef = useRef();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${EDIT_BLOGS.replace('{id}', id)}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setSlug(data.slug);
        setImage(data.image ? `${IMG_URL}${data.image}` : null);
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Error fetching blog data!');
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description); // Keep HTML tags in description
    formData.append('slug', slug);
    if (image instanceof File) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`${EDIT_BLOGS.replace('{id}', id)}`, {
        method: 'POST', // POST as per your backend API
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Network response was not ok');
      }

      toast.success('Blog post updated successfully!');
    } catch (error) {
      console.error('Error updating blog post:', error);
      toast.error(`Error updating blog post: ${error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin">
      <header className="admin__header d-flex justify-content-between">
        <a href="#" className="logo border-bottom">
          <img src='https://affyclouditsolutions.com/assets/affy-logo.png' alt="Affy Logo"/>
          <h5 className='text-white'>Affy Dashboard</h5>
        </a>
        <div className="d-flex align-items-center" style={{ width: '10%' }}>
          <button type="button" className="btn btn-info py-2 mr-3" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <nav className="admin__nav">
        <ul className="menu">
          <li className="menu__item mt-4">
            <Link to="/dashboard" className="menu__link fs-5"><i className="bi bi-bounding-box"></i> Dashboard</Link>
          </li>
          <li className="menu__item">
            <Link to="/blogpost" className="menu__link fs-5"><i className="bi bi-credit-card-2-front-fill"></i> Blog Post</Link>
          </li>
          <li className="menu__item">
            <Link to="/addblog" className="menu__link fs-5"><i className="bi bi-code-slash"></i> Add Blogs</Link>
          </li>
          <li className="menu__item">
            <Link to="/inquiry" className="menu__link fs-5"><i className="bi bi-chat-left"></i> Inquiry</Link>
          </li>
        </ul>
      </nav>
      <main className="admin__main">
        <span className="text-uppercase text-black">Blog Posts</span>
        <h3 className="text-black">Edit Post</h3>
        <div className="h-100">
          <div className="container-fluid">
            <div className="row">
              <main className="main-content col-lg-12 col-md-9 col-sm-12 p-0">
                <div className="main-navbar sticky-top bg-white">
                  {/* Navbar content */}
                </div>
                <div className="main-content-container container-fluid px-4">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="card card-small mb-3">
                        <div className="card-body">
                          <form className="edit-blog-post" onSubmit={handleSubmit}>
                            <input
                              className="form-control form-control-lg mb-3"
                              type="text"
                              placeholder="Your Post Title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                            />
                            <CKEditor
                              editor={ClassicEditor}
                              config={{
                                placeholder: 'Your Post Description',
                              }}
                              data={description}
                              onReady={editor => {
                                editorRef.current = editor;
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                setDescription(data);
                              }}
                            />
                            <input
                              className="form-control mt-3"
                              type="text"
                              placeholder="Slug"
                              value={slug}
                              onChange={(e) => setSlug(e.target.value)}
                              required
                            />
                            {image && (
                              <img src={image} alt="Blog Post" className="mb-3" style={{ width: '100%', maxWidth: '300px' }} />
                            )}
                            <input
                              className="form-control mt-3"
                              type="file"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                            <button type="submit" className="btn btn-primary mt-3">
                              Update
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};
