import React from 'react';
import CustomTable from '../common-components/CustomTable.js';
import { useHistory } from 'react-router-dom';

function EmployeeList() {
  const history = useHistory();
  const dataRows = [
    { id: 1, name: 'a', salary: 10 },
    { id: 2, name: 'b', salary: 15 },
    { id: 3, name: 'c', salary: 20 },
    { id: 4, name: 'd', salary: 8 },
    { id: 5, name: 'e', salary: 5 },
    { id: 6, name: 'f', salary: 7 },
  ];
  const columns = ['id', 'name', 'salary'];

  const onEdit = () => {
    alert('Test');
  };

  const handleClick = () => {
    history.push('/employee');
  };

  return (
    <div className="container">
      {/* <Link to="employee">About Us</Link> */}
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-primary" onClick={handleClick}>
          New Employee
        </button>
      </div>
      <CustomTable columns={columns} dataRows={dataRows} onEdit="onClick" />
    </div>
  );
}

export default EmployeeList;
