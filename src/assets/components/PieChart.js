import React from 'react';
import { PieChart } from 'react-native-charts-wrapper';

const SimplePieChart = () => {
  const data = {
    dataSets: [
      {
        values: [{ value: 45, label: 'A' },
                 { value: 21, label: 'B' },
                 { value: 15, label: 'C' },
                 { value: 9, label: 'D' },
                 { value: 10, label: 'E' }],
        label: 'Pie dataset',
        config: {
          colors: ['#F7464A', '#46BFDB', '#FDB45C', '#949FB1', '#4B0082'],
          valueTextSize: 20,
          valueTextColor: 'white',
          sliceSpace: 5,
          selectionShift: 13,
        },
      },
    ],
  };

  return (
      <PieChart
        data={data}
        chartDescription={{ text: 'Simple Pie Chart', textSize: 15 }}
        legend={{ enabled: true, textSize: 15 }}
      />
  );
};

export default SimplePieChart;
