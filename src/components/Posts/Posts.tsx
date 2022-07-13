import React, { useContext, useEffect } from 'react';
import { Post } from './Post/Post';
import { DataContext } from '../../contexts/posts.context';

import './Posts.css';

export const Posts = () => {

  const {posts, setPosts} = useContext(DataContext);


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

  console.log('Posts renderinng...');

  return (
    !(posts && posts.length > 0) ? <h1>Posts loading...</h1> : (
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
