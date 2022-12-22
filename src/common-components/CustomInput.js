import React, { useState } from 'react';
import styled from 'styled-components';

const formGroup = styled.div`
  margin-bottom: 1rem;
`;

const CustomInput = (props) => {
  const [isInputValid, setInputValidity] = useState(true);

  const onInputChange = (event) => {
    checkInputvalidity(event);
  };

  const checkInputvalidity = () => {
    const value = event.target.value;
    if (value.length > props.maxLength || value.length < props.minLength) {
      setInputValidity(false);
    } else {
      setInputValidity(true);
    }
  };

  return (
    <formGroup>
      <label className="col-sm-2 col-form-label">{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        className={`${props.class} form-control ${
          isInputValid ? '' : ' is-invalid '
        }`}
        type={props.type}
        onChange={() => {
          onInputChange(event);
        }}
      />
    </formGroup>
  );
};

export default CustomInput;
