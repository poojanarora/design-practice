import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';

class PieChartExample extends Component {
  render() {
    const data = 
       [
        {
          values: [{ value: 45, label: 'Label 1' },
                   { value: 35, label: 'Label 2' },
                   { value: 20, label: 'Label 3' }],
          label: 'Pie Dataset',
          config: {
            colors: ['#F44336', '#2196F3', '#FFC107'],
            valueTextSize: 20,
            valueTextColor: 'white',
          },
        },
      ]
    

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PieChart
          style={styles.chart}
          data={data}
          description={{ text: '' }}
          holeRadius={40}
          transparentCircleRadius={45}
          entryLabelTextSize={15}
          drawEntryLabels={true}
          rotationEnabled={true}
          rotationAngle={45}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chart: {
    width: 300,
    height: 300,
  },
});

export default PieChartExample;
