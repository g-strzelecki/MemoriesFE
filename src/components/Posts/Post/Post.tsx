import React, { useContext } from 'react';
import { PostEntity } from '../../../../../memories-back/types/post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { DataContext } from '../../../contexts/posts.context';

import './Post.css';

interface Props {
  post: PostEntity;
  deletePost: () => void;
}

export const Post = (props: Props) => {

  const { setPost } = useContext(DataContext);
  
  const { id, author, createdAt, tags, title, selectedFile, likeCount } = props.post;
  const tagsTab = tags.split(',');
  const tagsToDisplay = tagsTab.map((tag: string) => `#${tag}`).join(",");

  const handleDelete = async () => {
    
    try {

      await fetch(`http://localhost:3001/post/${id}`, { method: 'DELETE' });

      props.deletePost();

      setPost(null);

    } catch (error) {
        console.log('Error: ', error);
    }
  }

  const handleEdit = () => {
    setPost(props.post);
    console.log(props.post);
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
          <div className='card-like'>
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
