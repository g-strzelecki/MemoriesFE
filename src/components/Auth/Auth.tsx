import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Input } from "./Input";
import "./Auth.css";

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = () => {
    console.log('handleSubmit working...');
  };

  const handleChange = () => {
    console.log('handleChange working...');
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
    setShowPassword(false);
  };

  return (
    <div className="wrapper">
      <div className="sign-form">
        <div className="avatar">
          <div className="avatar-icon">
            <LockOutlinedIcon />
          </div>
          {isSignup ? "Sign Up" : "Sign In"}
        </div>
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <>
                <Input 
                  label="First Name"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  autoFocus
                />
                <Input 
                  label="Last Name"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                />
              </>
            )
          }
          <Input 
            label="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <Input 
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            handleShowPassword={handleShowPassword}
          />
          { 
            isSignup && (
              <Input 
                label="Repeat Password" 
                type="password" 
                name="confirmPassword" 
                onChange={handleChange}
              />
            )
          }
          <button className="sing-in-up" type="submit">
            { isSignup ? "Sign Up" : "Sign In" }
          </button>
          <div className="container">
            <button className="additional-sign-in-up" onClick={switchMode}>
              { isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
