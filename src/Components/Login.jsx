import React from 'react';
import '../Style/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <p className="login-desc">Welcome! Login to get amazing discounts and offers only for you.</p>
        <form className="login-form">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <div className="login-remember">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-btn">LOGIN</button>
        </form>
        <div className="login-links">
          <span>New User? <Link to={"/signup"}>Signup</Link></span>
          <Link to={"/home"} className="forgot-link">Forgot your password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
