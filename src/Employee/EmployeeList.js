import React from 'react';
import CustomTable from '../common-components/CustomTable.js';

function EmployeeList() {
  const dataRows = [
    { id: 1, name: 'a', salary: 10 },
    { id: 2, name: 'b', salary: 15 },
    { id: 3, name: 'c', salary: 20 },
    { id: 4, name: 'd', salary: 8 },
    { id: 5, name: 'e', salary: 5 },
    { id: 6, name: 'f', salary: 7 },
  ];
  const columns = ['id', 'name', 'salary'];
  return (
    <div>
      <CustomTable columns={columns} dataRows={dataRows} />
    </div>
  );
}

export default EmployeeList;
