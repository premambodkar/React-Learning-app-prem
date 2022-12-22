import React from 'react';
import tables from './table.module.css';

const CustomTable = (props) => {
  return (
    <div className="table-responsive">
      <table className={`table table-bordered ${tables.table}`}>
        {props.columns && props.columns.length ? (
          <thead>
            <tr>
              {props.columns.map((column, index) => {
                return (
                  <th key={index} style={{ textTransform: 'capitalize' }}>
                    {column}
                  </th>
                );
              })}
              <th>Action</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {props.dataRows && props.dataRows.length
            ? props.dataRows.map((row, index) => {
                return (
                  <tr key={index}>
                    {Object.values(row).map((value, index) => {
                      return <td key={index}>{value}</td>;
                    })}
                    <td>
                      <button
                        className="btn btn-link"
                        onClick={() => {
                          props.onEdit(row);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-link"
                        onClick={() => {
                          props.onDelete(row);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
