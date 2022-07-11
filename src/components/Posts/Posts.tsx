import React from 'react';
import { Post } from './Post/Post';

import './Posts.css';

export const Posts = () => {
  
  return (
    <div className="posts">
      <h1>POSTS</h1>
      <Post />
      <Post />
    </div>
  )
};
