import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { RESET_PASS } from '../Config/api';

export const Resetpassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Access token from local storage
      const token = localStorage.getItem('token');

      const response = await fetch(RESET_PASS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include token in the request headers
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Reset password email sent successfully!');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to send reset email');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-light py-3 py-md-5">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                  <a href="#!">
                    <img
                      src="https://www.affyclouditsolutions.com/assets/affy-logo.png"
                      alt="BootstrapBrain Logo"
                      width="125"
                      height="100"
                    />
                  </a>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email" className="form-label">
                          Enter Email
                        </label>
                      </div>
                      </div>
                    <div className="col-12">
                      <div className="d-flex gap-2 justify-content-between">
                        <div className="form-check">
                          
                        </div>
                        <Link
                          to="/login"
                          className="link-primary text-decoration-none"
                        >
                          Back to Home
                        </Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Sending...' : 'Send'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
