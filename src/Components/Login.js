import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const projectId = '24ivifnsynsd'; // Replace with your actual project ID

      // Step 1: Retrieve the JWT token from local storage
      const token = localStorage.getItem('jwtToken');

      // Step 2: Log in the user using the token
      const loginResponse = await axios.post(
        'https://academics.newtonschool.co/api/v1/user/login',
        {
          email: formData.email,
          password: formData.password,
          appType: 'ott',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Use the stored token for login
            'projectId': projectId,
          },
        }
      );

      // Step 3: Handle successful login (you can redirect or perform other actions)
      console.log('Login Successful', loginResponse.data);
      window.location.href="/"
    } catch (error) {
      // Handle login errors
      console.error('Login Error', error);
    }
  };

  return (
    <div>
      <h1>Login with Token</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
