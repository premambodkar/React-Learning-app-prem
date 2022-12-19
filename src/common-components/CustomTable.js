import React from 'react';

const CustomTable = (props) => {
  return (
    <table class="table table-bordered">
      {props.columns && props.columns.length ? (
        <thead>
          {props.columns.map((column) => {
            return <th>{column}</th>;
          })}
          <th>Action</th>
        </thead>
      ) : null}
      <tbody>
        {props.dataRows && props.dataRows.length
          ? props.dataRows.map((row) => {
              return (
                <tr>
                  {Object.values(row).map((value) => {
                    return <td>{value}</td>;
                  })}
                  <td>
                    <button className="btn btn-link">
                      <i class="fa fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn btn-link">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default CustomTable;
