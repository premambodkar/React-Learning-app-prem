import CustomInput from '../common-components/CustomInput';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
display: inline-block;
font-weight: 400;
text-align: center;
white-space: nowrap;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const Row = styled.div``;

const AddUpdatemployee = () => {
  const searchParams = useParams();
  const [formData, setFormData] = useState();

  const onSubmit = () => {
    setFormData(() => {});
    if (searchParams) {
    }
  };

  return (
    <div className="container">
      <Row className="row">
        <NavLink />
      </Row>
      <div className="row">
        <div className="col">
          <form
            onSubmit={() => {
              onSubmit();
            }}
          >
            <CustomInput
              type="text"
              id="empName"
              name="empName"
              label="Name"
              minLength="2"
              maxLength="10"
            />
            <CustomInput
              type="number"
              id="empSalary"
              name="empSalary"
              label="Salary"
              minLength="2"
              maxLength="10"
            />
            <div
              className="d-flex justify-content-center btn-group"
              role="group"
              aria-label="Basic example"
            >
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
              <Button type="reset" className="btn-default">
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUpdatemployee;
