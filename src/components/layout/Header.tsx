import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/posts.context";
import { Btn } from "../common/Btn";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  const { search, setSearch } = useContext(DataContext);
  const [inputVal, setInputVal] = useState(search);

  useEffect(() => {
    setInputVal(search);
  }, [search]);

  const handleSetSearchLocal = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  const user = null;

  return (
    <div className="header">
      <div>
        <h1>Travel Memories</h1>
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
            <div>
              Avatar
              {/* <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
            </div>
            <button className="login">Logout</button>
          </div>
        ) : (
          <Link className="login" to="/auth">Sign In</Link>
        )}
      </div>
    </div>
  );
};
