import React, { useEffect, useState } from 'react';
import { Post } from './Post/Post';
import { PostEntity } from 'types';

import './Posts.css';

export const Posts = () => {

  const [posts, setPosts] = useState<PostEntity[]>([]);

  const refreshPosts = () => {
    (async () => {
      const res = await fetch('http://localhost:3001/post/search')
      const data = await res.json();
      setPosts(data);
    })();
  }
  
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/post/search')
      const data = await res.json();
      setPosts(data);
    })();
  }, []);

  return (
    !posts.length ? <h1>Posts loading...</h1> : (
      <div className="posts">
        {posts.map(post=> (
          <div className="post" key={post.id}>
            <Post post={post} deletePost={refreshPosts}/>
          </div>
        ))
        }
      </div>
    )
  )
};
