import CustomInput from '../common-components/CustomInput';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

const AddUpdatemployee = () => {
  const searchParams = useParams();
  const [formData, setFormData] = useState();

  const onSubmit = () => {
    this.setFormData(() => {});
    if (searchParams) {
    }
  };

  return (
    <div className="container">
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" className="btn btn-default">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUpdatemployee;
