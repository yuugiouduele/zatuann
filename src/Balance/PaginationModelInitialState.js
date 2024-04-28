import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function PaginationModelInitialState() {
  const { data } = ({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '33%' }}>
      <DataGrid
      columns={data } rows={data.rows}
      />
    </div>
  );
}
