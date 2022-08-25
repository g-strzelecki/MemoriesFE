import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/posts.context";
import { Btn } from "../common/Btn";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Avatar } from "../Avatar/Avatar";

import "./Header.css";

interface MyToken {
  picture: string;
  given_name: string;
}

export const Header = () => {
  const { search, setSearch, user, setUser } = useContext(DataContext);
  const [inputVal, setInputVal] = useState(search);
  const navigate = useNavigate();

  const credential = {picture: "", given_name: ""} as MyToken;

  if (user) {
    const userCredential =  jwt_decode<MyToken>(user.credential);
    credential['picture'] = userCredential.picture;
    credential['given_name'] = userCredential.given_name;
    console.log(userCredential.picture)
  } 
  
  useEffect(() => {
    setInputVal(search);
  }, [search]);

  useEffect(() => {
    localStorage.getItem('profile') === null 
    ?
      setUser(null) 
    :
      setUser(JSON.parse(localStorage.getItem('profile')!)) ;
  }, [setUser]);

  const handleSetSearchLocal = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  const handleLogout = () => {
    navigate('/');
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className="header">
      <div>
      <Link className="header-h1" to="/">Travel Memories</Link>
        <img
          className="image"
          src="../../images/icons8-camera-96.png"
          alt="memories"
          height="40"
        />
      </div>
      <form className="search" onSubmit={handleSetSearchLocal}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Btn type="submit" text="SEARCH" />
      </form>
      <div>
        {user ? (
          <div>
              {user && <Avatar src={credential.picture} alt={credential.given_name}/>}
            <button className="login" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link className="login" to="/auth">Sign In</Link>
        )}
      </div>
    </div>
  );
};
