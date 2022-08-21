import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Input } from "./Input";
import "./Auth.css";

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const isSignup = true;

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = () => {
    console.log('handleSubmit working...');
  };

  const handleChange = () => {
    console.log('handleChange working...');
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
          <button type="submit">
            { isSignup ? 'Sign Up' : 'Sign In' }
          </button>
        </form>
      </div>
    </div>
  );
};
