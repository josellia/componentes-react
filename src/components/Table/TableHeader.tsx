import React from 'react'

interface ITableHeader {
    headers: Array<string>;
}
const TableHeader: React.FC<ITableHeader> = ({headers}) => {
    return (
       <thead className="thead-table" key="header-1">
           <tr key="header-0">
               {headers && headers.map((value, index) => (
                   <th key={index}>
                     {value.toUpperCase().replace("_", "")}
                   </th>
               ))}
           </tr>
       </thead>
    )
}

export default TableHeader
