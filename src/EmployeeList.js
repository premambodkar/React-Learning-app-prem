import React from 'react';
import Employee from './Employee.js';
import CustomTable from './CustomTable.js';

function EmployeeList() {
  const dataList = [
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
      {dataList.map((data) => {
        return <CustomTable columns={columns} dataRows={dataList} />;
      })}
    </div>
  );
}

export default EmployeeList;
