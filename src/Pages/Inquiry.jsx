import "./Dashboard.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { GET_INCQUIRY, REMARK_INC } from '../Config/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

export const Inquiry = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the home page
  };

  const [inquiries, setInquiries] = useState([]);
    const [inquiryData, setInquiryData] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await fetch(GET_INCQUIRY, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch inquiries');
                }

                const result = await response.json();
                setInquiries(result);
                const initialData = {};
                result.forEach(inquiry => {
                    initialData[inquiry.id] = { remark: inquiry.remark || '', action: inquiry.action || '0' };
                });
                setInquiryData(initialData);
            } catch (error) {
                console.error('Error fetching inquiries:', error);
            }
        };

        fetchInquiries();
    }, [token]);

    const handleChange = (id, field, value) => {
        setInquiryData((prevData) => ({
            ...prevData,
            [id]: {
                ...prevData[id],
                [field]: value,
            },
        }));
    };

    const handleUpdate = async (id) => {
        const updatedRemark = inquiryData[id].remark;
        const updatedAction = inquiryData[id].action;

        try {
            const response = await fetch(`${REMARK_INC}/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    remark: updatedRemark,
                    action: updatedAction
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response error:', errorText);
                throw new Error('Failed to update inquiry');
            }

            setInquiries((prevInquiries) =>
                prevInquiries.map((inquiry) =>
                    inquiry.id === id
                        ? { ...inquiry, remark: updatedRemark, action: updatedAction }
                        : inquiry
                )
            );

            toast.success('Update successful');
        } catch (error) {
            console.error('Error updating inquiry:', error);
            toast.error('Update failed');
        }
    };

  return (
    <div class="admin">
    <header class="admin__header d-flex justify-content-between">
      <a href="#" class="logo border-bottom">
        <img  src='https://affyclouditsolutions.com/assets/affy-logo.png'></img>
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
    <div class="admin__main">
    <span className="text-uppercase page-subtitle text-secondary">Inquiry</span>
      <h3 className='text-black'>Inquiry Page</h3>
      <div className="h-100 container">
            <ToastContainer />
                <div className="row">
                  
                    <main className="main-content col-lg-12 col-md-9 col-sm-12 p-0 ">                       
                        <div className="main-content-container container-fluid px-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card card-small mb-4">
                                        <div className="card-header border-bottom">
                                            <h6 className="m-0">All inquiries</h6>
                                        </div>
                                        <div className="card-body p-0 pb-3 text-center">
                                            <table className="table mb-0">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th scope="col" className="border-0">No.</th>
                                                        <th scope="col" className="border-0">Name</th>
                                                        <th scope="col" className="border-0">Email</th>
                                                        <th scope="col" className="border-0">Mobile</th>
                                                        <th scope="col" className="border-0">Service</th>
                                                        <th scope="col" className="border-0">Message</th>
                                                        <th scope="col" className="border-0">Remark</th>
                                                        <th scope="col" className="border-0">Action</th>
                                                        <th scope="col" className="border-0">Update</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {inquiries.map((inquiry, index) => (
                                                        <tr key={inquiry.id}>
                                                            <td className="text-center align-middle">{index + 1}</td>
                                                            <td className="text-center align-middle">{inquiry.name}</td>
                                                            <td className="text-center align-middle">{inquiry.email}</td>
                                                            <td className="text-center align-middle">{inquiry.mobile}</td>
                                                            <td className="text-center align-middle">{inquiry.service}</td>
                                                            <td className="text-center align-middle">{inquiry.message}</td>
                                                            <td className="align-middle">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows="3"
                                                                    value={inquiryData[inquiry.id]?.remark || ''}
                                                                    onChange={(e) =>
                                                                        handleChange(inquiry.id, 'remark', e.target.value)
                                                                    }
                                                                ></textarea>
                                                            </td>
                                                            <td className="align-middle">
                                                                <select
                                                                    className="form-control"
                                                                    value={inquiryData[inquiry.id]?.action || ''}
                                                                    onChange={(e) =>
                                                                        handleChange(inquiry.id, 'action', e.target.value)
                                                                    }
                                                                >
                                                                    <option value="0">Pending</option>
                                                                    <option value="1">Reject</option>
                                                                    <option value="2">Resolved</option>
                                                                </select>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button className="btn btn-primary" onClick={() => handleUpdate(inquiry.id)}>Done</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
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
  )
}
