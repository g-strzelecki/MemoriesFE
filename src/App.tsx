import React, { useEffect, useState } from 'react';
import { PostEntity } from 'types';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/layout/Header';
import { Posts } from './components/Posts/Posts';

import { DataContext } from './contexts/posts.context';

export const App = () => {

  const [posts, setPosts] = useState<PostEntity[] | null>(null);
  const [post, setPost] = useState<PostEntity | null>(null);
  const [search, setSearch] = useState('');

  return (
    <>
      <DataContext.Provider value={{ post, posts, setPost, setPosts, search,  setSearch}}>
        <div className="App">
          <Header />
          <div className="App-container">
            <Posts />
            <Form />
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
}
