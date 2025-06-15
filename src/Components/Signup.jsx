import React from 'react';
import '../Style/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-left"></div>
      <div className="signup-right">
        <h2>Sign up</h2>
        <form className="signup-form">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" required/>

          <label htmlFor="mobile">Mobile No.</label>
          <input type="text" id="mobile" placeholder="Enter your mobile number" required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <label htmlFor="repassword">Rewrite-Password</label>
          <input type="password" id="repassword" placeholder="Rewrite your password" required/>

          <p className="signup-policy">You are agreeing to the 
            <Link to={"/home"}> Terms of services</Link> and 
            <Link to={"/home"}> privacy policy</Link></p>
          <button type="submit" className="signup-btn">Get Started</button>
        </form>
        <div className="signup-links">
          <span>Already a member? <Link to="/login">Sign in</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
