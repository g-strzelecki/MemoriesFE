import React, { SyntheticEvent, useContext, useState } from "react";
import { DataContext } from "../../contexts/posts.context";
import { Btn } from "../common/Btn";

import './Header.css';

export const Header = () => {
  const {search, setSearch} = useContext(DataContext);
  const [inputVal, setInputVal] = useState(search);

  const handleSetSearchLocal = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <div className="header">
      <div>
        <h1>Travel Memories</h1>
        <img className="image" src="../../images/icons8-camera-96.png" alt="memories" height="40" />
      </div>
      <form className="search" onSubmit={handleSetSearchLocal}>
        <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/><Btn type="submit" text="SEARCH"/>
      </form>
    </div>
  )
}
