// src/pages/SignInPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/SignInPage.css';

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/account/signin', formData);
      alert(response.data.Message);
      // Store username or token in local storage or context
      localStorage.setItem('username', response.data.Username);
      window.location.href = '/'; // Redirect to home page
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="register-option">
        <p>Don't have an account?</p>
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
};

export default SignInPage;
