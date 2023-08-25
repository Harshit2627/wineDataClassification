import { TableData } from "../../../../interfaces/tableData";
import "./dataTable.css";

const DataTable = (props: TableData) => {
  const { columns, data } = props;
  
  function getTableData(columns: any[]) {
    let headers: any[] = [];
    columns?.forEach((column) => {
      headers.push(<th key={column?.columnName}>{column?.columnName}</th>);
    });

    return headers;
  }

  const getRows = () => {
    return data?.map((rowData: any, index) => {
      return (
        <tr key={`${index}`}>
          {columns?.map((column) => {
            return <td>{rowData[column?.dataIndex]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className="tableStyle">
      <thead>
        <tr>{getTableData(columns)}</tr>
      </thead>
      <tbody>{getRows()}</tbody>
    </table>
  );
};

export default DataTable;
