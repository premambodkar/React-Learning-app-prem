import React from 'react';

const CustomInput = (props) => {
  const customClass = `${props.class} form-control`;
  return (
    <div class="form-group">
      <label class="col-sm-2 col-form-label">{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        className={customClass}
        type={props.type}
      />
    </div>
  );
};

export default CustomInput;
