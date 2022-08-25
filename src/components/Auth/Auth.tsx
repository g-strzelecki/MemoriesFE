import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Input } from "./Input";
import "./Auth.css";
import { DataContext } from "../../contexts/posts.context";

export const Auth = () => {
  const { setUser } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = () => {
    console.log("handleSubmit working...");
  };

  const handleChange = () => {
    console.log("handleChange working...");
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
    setShowPassword(false);
  };

  const googleSuccess = async (res: CredentialResponse) => {

    try {
      if (res.credential && res.clientId) {

        const clientId = res?.clientId;
        const credential = res?.credential;

        const obj = {
          clientId, 
          credential
        }

        localStorage.setItem('profile', JSON.stringify(obj));
        setUser(obj);
        navigate('/');
        
        // const result = await jwt_decode(credential); 
      }
    } catch(error) {
      console.log(error);
    }
  }
  const googleFailure = (error: string) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Please, try again later.");
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
          {isSignup && (
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
          )}
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
          {isSignup && (
            <Input
              label="Repeat Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
          )}
          <button className="sing-in-up" type="submit">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <GoogleOAuthProvider clientId="566835685699-ad8k5iutar0hgcrehfi77imj6fg1kans.apps.googleusercontent.com">
            <div className="wrapper">
              <GoogleLogin
                onSuccess={googleSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>
          <div className="container">
            <button className="additional-sign-in-up" onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
