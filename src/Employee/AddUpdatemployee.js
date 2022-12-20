import CustomInput from '../common-components/CustomInput';
import { useParams } from 'react-router-dom';
import React from 'react';

const AddUpdatemployee = () => {
  const { productSlug } = useParams();
  const onSubmit = () => {
    alert('Hello');
  };
  return (
    <div>
      <form onSubmit="{onSubmit}">
        <CustomInput type="text" id="empName" name="empName" label="Name" />
        <CustomInput
          type="number"
          id="empSalary"
          name="empSalary"
          label="Salary"
        />
        <div
          class="d-flex justify-content-center btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button type="reset" class="btn btn-default">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUpdatemployee;
