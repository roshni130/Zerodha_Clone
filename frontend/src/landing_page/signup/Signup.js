import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'https://zerodha-clone2.onrender.com' : 'https://zerodha-clone2.onrender.com';
    try {
      const res = await axios.post(url, formData);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        alert(`${isLogin ? 'Login' : 'Signup'} successful`);
        setTimeout(() => window.location.href = 'https://zerodha-clone1.onrender.com', 500); 
      } else {
        alert(`${isLogin ? 'Login' : 'Signup'} failed. ${res.data.message || 'No token received.'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      alert(err.response ? err.response.data.message : 'Network error.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="image-side">
        <img src="/media/image/signupp.svg" alt="Auth" />
      </div>
      <div className="form-side">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="input-field" />}
          <div className="vertical-inputs">
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="input-field" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="input-field" />
            <button type="submit" className="submit-button">{isLogin ? 'Login' : 'Signup'}</button>
          </div>
        </form>
        <p className="switch-text">
          {isLogin ? 'New user? ' : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)} className="switch-button">{isLogin ? 'Signup' : 'Login'}</button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
