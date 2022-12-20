import CustomInput from '../common-components/CustomInput';
import { useSearchParams } from 'react-router-dom';
import React from 'react';

const AddUpdatemployee = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('productSlug', searchParams.getAll('id'));

  const onSubmit = (event) => {
    console.log(event);
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
            <CustomInput type="text" id="empName" name="empName" label="Name" />
            <CustomInput
              type="number"
              id="empSalary"
              name="empSalary"
              label="Salary"
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
