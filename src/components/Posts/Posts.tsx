import React, { useContext, useEffect } from 'react';
import { Post } from './Post/Post';
import { DataContext } from '../../contexts/posts.context';

import './Posts.css';

export const Posts = () => {

  const {posts, setPosts, search} = useContext(DataContext);

  const refreshPosts = () => {
    (async () => {
      const res = await fetch('http://localhost:3001/post/search')
      const data = await res.json();
      setPosts(data);
    })();
  }

  // const refreshLike = () => {
  //   console.log('Działa');
  // }

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/post/search/${search}`)
      const data = await res.json();
      setPosts(data);
    })();
  }, [search]);

  return (
    !Array.isArray(posts) 
    ? <div className='loading'><h1>Posts loading...</h1></div> 
    : (
      <div className="posts">
        {posts.map(post=> (
          <div className="post" key={post.id}>
            <Post post={post} refreshPost={refreshPosts} />
          </div>
        ))
        }
      </div>
    )
  )
};
