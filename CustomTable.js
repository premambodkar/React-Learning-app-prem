function CustomTable(props) {
  return (
    <table>
      <thead>
        {props.columns.map((column) => {
          return <th>{column.title}</th>;
        })}
      </thead>
      <tbody>
        {props.dataRows.map((row) => {
          <tr>
            {row.data.map((data) => {
              <td>{data}</td>;
            })}
          </tr>;
        })}
      </tbody>
    </table>
  );
}

export default CustomTable;
