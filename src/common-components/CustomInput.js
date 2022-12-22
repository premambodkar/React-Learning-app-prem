import React, { useState } from 'react';

const CustomInput = (props) => {
  const customClass = `${props.class} form-control`;
  const [isInputValid, setInputValidity] = useState(true);

  const onInputChange = (event) => {
    const value = event.target.value;
    console.log(
      'value.length > props.maxLength && value.length < props.minLength',
      value.length > props.maxLength && value.length < props.minLength
    );
    if (value.length > props.maxLength || value.length < props.minLength) {
      setInputValidity(false);
    } else {
      setInputValidity(true);
    }
  };

  return (
    <div className="form-group">
      <label className="col-sm-2 col-form-label">{props.label}</label>
      <input
        style={{ backgroundColor: isInputValid ? 'white' : 'red' }}
        id={props.id}
        name={props.name}
        className={customClass}
        type={props.type}
        onChange={() => {
          onInputChange(event);
        }}
      />
    </div>
  );
};

export default CustomInput;
