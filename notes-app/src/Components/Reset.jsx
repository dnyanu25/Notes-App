import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/auth.css';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
    // Add your password reset logic here
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Check Your Email</h1>
          <p className="reset-message">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <div className="auth-links">
            <p>
              Didn't receive the email?{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="link-button"
              >
                Try again
              </button>
            </p>
            <p>
              Remembered your password?{' '}
              <Link to="/login" className="auth-link">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Reset Password</h1>
        <p className="reset-description">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="auth-button">Send Reset Link</button>
        </form>
        
        <div className="auth-links">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="auth-link">Login</Link>
          </p>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="auth-link">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
