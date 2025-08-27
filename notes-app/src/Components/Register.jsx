import React, { useState } from 'react';
import './css/auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('Register attempt:', formData);
    // Add your registration logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
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
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
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
          <div className="form-group">
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        
        <div className="auth-links">
          <p>Already have an account? <a href="./login" className="auth-link">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;