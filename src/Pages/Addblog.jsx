import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CREATE_BLOG } from '../Config/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Dashboard.css"
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export const Addblog = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the home page
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState(null);

  const token = localStorage.getItem('token')

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (data) => setDescription(data);
  const handleSlugChange = (e) => setSlug(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Function to strip HTML tags
    const stripHtmlTags = (html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    };

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', stripHtmlTags(description)); // Strip HTML tags from description
    formData.append('slug', slug);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(CREATE_BLOG, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        toast.success('Blog Created Successfully!');
      }
      // Clear form fields
      setTitle('');
      setDescription('');
      setSlug('');
      setImage(null);

      console.log('Success:', response);

    } catch (error) {
      toast.error('Error creating blog post!');
      // console.error('Error:', error);
    }
  };
  return (

    <div class="admin">
      <header class="admin__header  d-flex justify-content-between">
        <a href="#" class="logo border-bottom">
          <img src='https://affyclouditsolutions.com/assets/affy-logo.png'></img>
          <h5 className='text-white'>Affy Dashboard</h5>
        </a>
        <div className="d-flex align-items-center " style={{ width: '10%' }}> {/* Added flexbox to align items */}
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
        <span className="text-uppercase page-subtitle text-secondary">Add Blogs</span>
        <h3 className='text-black'>Add Blogs</h3>
        <div className="h-100">
          <div className="container-fluid">
            <div className="row">
              <main className="main-content col-lg-12 col-md-9 col-sm-12 p-0 ">
                <div className="main-content-container container-fluid px-4">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 addblog">
                      <div className="card card-small mb-3">
                        <div className="card-body">
                          <form className="add-new-post" onSubmit={handleSubmit} encType="multipart/form-data">
                            <input
                              className="form-control form-control-lg mb-3"
                              type="text"
                              placeholder="Your Post Title"
                              value={title}
                              onChange={handleTitleChange}
                              required
                            />
                            <CKEditor
                              editor={ClassicEditor}
                              config={{
                                placeholder: 'Your Post Description',
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                handleDescriptionChange(data);
                              }}
                            />
                            <input
                              className="form-control mt-3"
                              type="text"
                              placeholder="Slug"
                              value={slug}
                              onChange={handleSlugChange}
                              required
                            />
                            <input
                              className="form-control mt-3"
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              required
                            />
                            <button type="submit" className="btn btn-primary mt-3">
                              Submit
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

      </div>

    </div>
  )
}
