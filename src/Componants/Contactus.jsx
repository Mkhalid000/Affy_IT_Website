import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'react-toastify/dist/ReactToastify.css';
import { CREATE_INC } from '../Config/api';
import {enforceMaxLength, utility} from "../Componants/utility"
import "../App.css"

import contact from "../img/contact.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Contactus = () => {
  const heading = useRef(null);
  const heading1 = useRef(null);
  const imageRefl1 = useRef(null);
  const imageRefr1 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heading.current,
      { scale: 0.8 },
      {
        scale: 1.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      heading1.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading1.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      imageRefl1.current,
      { scale: 0.9 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: imageRefl1.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      imageRefr1.current,
      { scale: 0.9 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: imageRefr1.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(CREATE_INC, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      toast.success('Form submitted successfully!');
      console.log(result);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error(error.message || 'There was an error submitting the form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="contact-content text-black py-4 px-4">
        <div class="section-title text-center position-relative pb-3 mb-5 mt-5 mx-auto" style={{ maxWidth: '600px' }}>
          <p className='text-white mb-3 text-center lead fs-4' ref={heading1}> The best way to contact us is by using the contact form below. Please ensure all required fields are filled out, and we will respond promptly.</p>
        </div>

        <div className="row height-fit mt-5">
          <div className="col-lg-6 col-md-12  mb-4 mb-lg-0">
            <img
              className="img-fluid"
              ref={imageRefl1}
              src={contact}
              alt=""
            />
          </div>
          <div className="col-md-6 text-left fixed-content" ref={imageRefr1}>
            <form onSubmit={handleSubmit}>
              <div className="form-elements my-4">
                <label htmlFor="name" className="text-white fw-medium">Name<sup>*</sup></label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-elements my-4">
                <label htmlFor="email" className="text-white fw-medium">Email<sup>*</sup></label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Enter Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-elements my-4">
                <label htmlFor="mobile" className="text-white fw-medium">Mobile<sup>*</sup></label>
                <input onInput={enforceMaxLength}
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  type="number"
                  placeholder="Enter Mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-elements my-4">
                <label htmlFor="service" className="text-white fw-medium">Service<sup>*</sup></label>
                <br />
                <select
                  className="form-control text-black"
                  name="service"
                  id="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Service</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="AI Software">AI Software</option>
                  <option value="App Development">App Development</option>
                  <option value="Software Development">Software Development</option>
                  <option value="3D Website Development">3D Website Development</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Digital Marketing">Data Analytics</option>
                  <option value="Digital Marketing">Blockchain Development</option>
                  <option value="Let's Discuss">Let's Discuss</option>
                </select>
              </div>
              <div className="form-elements my-4">
                <label htmlFor="message" className="text-white fw-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-elements my-4">
                <button className="btn btn-outline-info  border border-info-subtle contact-btn" type="submit" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
