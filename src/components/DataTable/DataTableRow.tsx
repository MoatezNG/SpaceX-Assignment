/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { Columns } from './Columns';

type DataTableRowProps<T extends Record<string | number, any>> = {
  item: T;
  columns: Columns<T>[];
};

const DataTableRow = <T extends Record<string | number, any>>({
  item,
  columns,
}: DataTableRowProps<T>) => (
  <tr>
    {columns.map((col) => (
      <td key={item[col.selector]}>{col.cell?.(item) || item[col.selector]}</td>
    ))}
  </tr>
);

export default DataTableRow;
