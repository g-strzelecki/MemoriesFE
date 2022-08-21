import React from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: () => void;
  handleShowPassword?: () => void;
}

export const Input = (props: Props) => {

  const { label, type, name, autoFocus, onChange, handleShowPassword } = props;

  const handleChange = () => {

    if (onChange) {
      onChange();
    }

    console.log('handleChange working...');
  };

  return (
    <div>
      <label>
        {/* {`${label}:`} */}
        <input 
          type={type} 
          name={name}
          placeholder={label}
          onChange={handleChange} 
          autoFocus={autoFocus}
          required
        />
      </label>
    </div>
  );
};
