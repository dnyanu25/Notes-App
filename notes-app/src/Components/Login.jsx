import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './css/auth.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);

    // Temporary placeholder authentication
    if (formData.username === 'test' && formData.password === '1234') {
      onLogin(); // Update App state
      navigate('/notes'); // Redirect to notes page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        
        <div className="auth-links">
          <p>Don't have an account? <Link to="/register" className="auth-link">Register</Link></p>
          <p>Forgot your password? <Link to="/reset" className="auth-link">Reset it</Link></p>
        </div>
        
        <div className="social-login">
          <p className="social-text">Login with:</p>
          <div className="social-buttons">
            <button type="button" className="social-button google">Google</button>
            <button type="button" className="social-button facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
