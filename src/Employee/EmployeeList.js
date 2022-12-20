import React from 'react';
import CustomTable from '../common-components/CustomTable.js';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const navigate = useNavigate();
  const dataRows = [
    { id: 1, name: 'a', salary: 10 },
    { id: 2, name: 'b', salary: 15 },
    { id: 3, name: 'c', salary: 20 },
    { id: 4, name: 'd', salary: 8 },
    { id: 5, name: 'e', salary: 5 },
    { id: 6, name: 'f', salary: 7 },
  ];
  const columns = ['id', 'name', 'salary'];

  const editEmployee = (row) => {
    navigate(`/employee/:${row.id}`);
  };

  const openNewEmployee = () => {
    navigate('/employee');
  };

  const deleteEmployee = (row) => {
    console.log('deleting record', row);
  };

  return (
    <div className="container">
      {/* <Link to="employee">About Us</Link> */}
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-primary" onClick={openNewEmployee}>
          New Employee
        </button>
      </div>
      <CustomTable
        columns={columns}
        dataRows={dataRows}
        onEdit={editEmployee}
        onDelete={deleteEmployee}
      />
    </div>
  );
}

export default EmployeeList;
