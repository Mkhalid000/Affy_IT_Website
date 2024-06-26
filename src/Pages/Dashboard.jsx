import React from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the home page
  };

  return (
    <div className="admin">
      <header className="admin__header d-flex justify-content-between">
        <a href="#" className="logo border-bottom">
          <img src='https://affyclouditsolutions.com/assets/affy-logo.png' alt="Affy Logo"></img>
          <h5 className='text-white'>Affy Dashboard</h5>
        </a>
        <div className="d-flex align-items-center " style={{ width: '10%' }}> {/* Added flexbox to align items */}
          <button type="button" className="btn btn-info py-2 mr-3" onClick={handleLogout}>logout</button> {/* Added mr-3 for right margin */}
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
      <main className="admin__main" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <h3 className="text-black" style={{ color: 'black', marginBottom: '10px' }}>Dashboard</h3>
        <img src="https://images.datacamp.com/image/upload/v1652683839/image9_c3702fe738.jpg" alt="Dashboard Image" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '20px' }} />
      </main>
    </div>
  )
}
