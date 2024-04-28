import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'FX' },
            { id: 1, value: 15, label: '株' },
            { id: 2, value: 20, label: 'CFD' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
