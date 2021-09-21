import React from 'react';
import { Columns } from './Columns';
import DataTableRow from './DataTableRow';

type DataTableProps<T> = {
  data: T[];
  columns: Columns<T>[];
  keyExtractor: (item: T) => string;

};
const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  keyExtractor,
}: DataTableProps<T>) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={`${col.selector}`}>
                  <div className="columns_text">{col.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        {data.length ? (
          <tbody>
            {data.map((el) => (
              <DataTableRow key={keyExtractor(el)} item={el} columns={columns} />
            ))}
          </tbody>
        ) : (
          <tbody className="not_found_data_table">
            <tr>
              <th className="border_none">No data found</th>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default DataTable;
