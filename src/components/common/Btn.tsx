import React from "react";

import './Btn.css'

interface Props {
  text: string;
  type: string;
  onClearForm?: () => void;
}

export const Btn = (props: Props) => {

  const onButtonClick = () => {
    if (props.onClearForm) {
      props.onClearForm();
    }
  }

  return (
    props.type === 'button' 
  ?
  <button 
    type="button" 
    style={{backgroundColor: '#E19023'}}
    onClick={onButtonClick}
  >{props.text}</button>
  :
  <button type="submit">{props.text}</button>
  )
};
  