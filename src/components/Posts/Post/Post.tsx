import React from 'react';
import { PostEntity } from '../../../../../memories-back/types/post';
import moment from 'moment';

import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  post: PostEntity;
}

export const Post = (props: Props) => {
  
  const { author, createdAt, tags, title, selectedFile, likeCount } = props.post;
  const tagsTab = tags.split(',');
  const tagsToDisplay = tagsTab.map(tag => `#${tag}`).join(",");

  return (
    // <div className='card'>
    <>
      <div className='card-upper'>
        <div className='image'>
          <img src={`http://localhost:3001/${selectedFile}`} alt={`${title}`}/>
        <div className='overlay'>
          <div>
          <h6>{author}</h6>
          <h6>{moment(createdAt).fromNow()}</h6>
          </div>
          <div className='card-edit'>...</div>  
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
          <div className='card-delete'>
            Delete
            <FontAwesomeIcon icon={faTrash}/>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
};
