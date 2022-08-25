import React, { useEffect, useState } from "react";
import { PostEntity } from "types";
import { Header } from "./components/layout/Header";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/posts.context";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import { AuthCredential } from "./utils/AuthCredential";

import "./App.css";

export const App = () => {
  const [posts, setPosts] = useState<PostEntity[] | null>(null);
  const [post, setPost] = useState<PostEntity | null>(null);
  const [search, setSearch] = useState("");

  const [user, setUser] = useState<AuthCredential | null>(null);

  return (
    <DataContext.Provider
      value={{ post, posts, setPost, setPosts, search, setSearch, user, setUser }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
};
