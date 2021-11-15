import React from "react";

interface ITableBody {
  headers: Array<string>;
  rows: Array<string>;
}
const TableBody: React.FC<ITableBody> = ({ headers, rows }) => {
  const buildRow = (row: any, headers: any) => {
    return (
      <tr key={row.id}>
        {headers?.map((value: any, index: number) => (
          <td key={index}>{row[value]}</td>
        ))}
      </tr>
    );
  };
  return (
    <>
      {rows.length === 0 ? (
        <tr>
          <td>Sem dados</td>
        </tr>
      ) : null}
      {rows &&
        rows?.map((value: any) => {
          return buildRow(value, headers);
        })}
    </>
  );
};

export default TableBody;
