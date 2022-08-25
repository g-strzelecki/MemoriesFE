import React from "react";
import './Avatar.css';

interface Props {
  src: string;
  alt: string;
}

export const Avatar = (props: Props) => {
  const { src, alt } = props;

  return (
    <div className="avatarWrapper">
      <p>{alt}</p>
      <img className="avatar" src={src} alt={alt}></img>
    </div>
  )
};
