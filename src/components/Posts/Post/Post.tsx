import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { DataContext } from '../../../contexts/posts.context';

import './Post.css';
import { PostEntity } from 'types';

interface Props {
  post: PostEntity;
  refreshPost: () => void;
}

export const Post = (props: Props) => {

  const { setPost, setSearch } = useContext(DataContext);
  
  const { id, author, createdAt, tags, title, selectedFile, likeCount } = props.post;
  const tagsTab = tags.split(',');
  const tagsToDisplay = tagsTab.map((tag: string) => `#${tag}`).join(",");

  const handleDelete = async () => {
    
    try {

      await fetch(`http://localhost:3001/post/${id}`, { method: 'DELETE' });

      props.refreshPost();

      setPost(null);

    } catch (error) {
        console.log('Error: ', error);
    }
  }

  const handleEdit = async () => {
    setPost(props.post);
  };

  const handleLike = async () => {
    
    const likeInc = ++props.post.likeCount;
    const likeId = props.post.id;
    
    try {

      await fetch(`http://localhost:3001/post/like/${id}`, {
      method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id: likeId, 
          likeCount: likeInc
        }),
      });

      props.refreshPost();
      setSearch('');

      } catch (error) {
        console.log('Error: ', error);
    }
  
  };

  return (
    <>
      <div className='card-upper'>
        <div className='image'>
          <img src={`http://localhost:3001/${selectedFile}`} alt={`${title}`}/>
        <div className='overlay'>
          <div>
          <h6>{author}</h6>
          <h6>{moment(createdAt).fromNow()}</h6>
          </div>
          <div className='card-edit' onClick={handleEdit}>...</div>  
        </div>
        </div>
      </div>
      <div className='card-lower'>
        <div className='card-tags'>
          {tagsToDisplay}
        </div>
        <div className='card-title'>{title}</div>
        <div className='card-actions'>
          <div className='card-like' onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp}/>
            {`Likes ${likeCount}`}
          </div>
          <div className='card-delete' onClick={handleDelete}>
            Delete
            <FontAwesomeIcon icon={faTrash}/>
          </div>
        </div>
      </div>
    </>
  )
};
