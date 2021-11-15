import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

import './Table.css';

interface ITable {
    headers: Array<string>;
    rows: Array<string>;
}

const Table:React.FC<ITable> = ({headers, rows}) => {
    return (
        <table>
          <TableHeader headers={headers}/>
          <TableBody headers={headers} rows={rows}/>
        </table>
    )
}

export default Table
