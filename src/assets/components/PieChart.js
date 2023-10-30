import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  processColor,
} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';

export default class RNChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pie: {
        title: 'Favorite Food in Jogja',
        detail: {
          time_value_list: [2017],
          legend_list: ['LABEL1', 'LABEL2', 'LABEL3', 'LABEL4'],
          dataset: {
            LABEL1: {2017: 50},
            LABEL2: {2017: 20},
            LABEL3: {2017: 13},
            LABEL4: {2017: 17},
          },
        },
      },
    };
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  renderPie() {
    const time = this.state.pie.detail.time_value_list;
    const legend = this.state.pie.detail.legend_list;
    const dataset = this.state.pie.detail.dataset;
    const colors = this.state.pie.detail.legend_list.map(legendValue => {
      const datasetValue = dataset[legendValue][2017];

      // Check the value and assign the desired background color
      if (datasetValue === 50) {
        return processColor('#166FF6'); // Background color for 'Hamburger' when value is 9
      } else if (datasetValue === 20) {
        return processColor('#6FA6F9'); // Background color for 'Steak' when value is 45
      } else if (datasetValue === 17) {
        return processColor('#ABCDFF'); // Background color for 'Pecel' and 'Magelangan' when value is 10
      }

      return processColor('#C6DCFF');
    });

    var dataSetsValue = [];
    var dataStyle = {};
    var legendStyle = {};
    var descStyle = {};
    var xAxisStyle = {};
    var chooseStyle = {};
    var valueLegend = [];
    var colorLegend = [];

    legend.map(legendValue => {
      time.map(timeValue => {
        const datasetValue = dataset[legendValue];
        const datasetTimeValue = datasetValue[timeValue];

        valueLegend.push({
          value: parseInt(datasetTimeValue),
          label: legendValue,
        });
      });
      colorLegend.push(processColor(this.getRandomColor()));
    });

    const datasetObject = {
      values: valueLegend,
      label: '',
      config: {
        colors,
        valueTextSize: 8,
        valueTextColor: processColor('#000000'),
        sliceSpace: 0,
        selectionShift: 13,
      },
    };
    dataSetsValue.push(datasetObject);

    legendStyle = {
      enabled: false,
      textSize: 4,
      form: 'CIRCLE',
      position: 'BELOW_CHART_RIGHT',
      wordWrapEnabled: true,
    };
    dataStyle = {
      dataSets: dataSetsValue,
    };
    descStyle = {
      text: '',
      textSize: 12,
      textColor: processColor('darkgray'),
    };
    return (
      <PieChart
        style={styles.bar}
        chartDescription={descStyle}
        data={dataStyle}
        legend={legendStyle}
      />
    );
  }

  render() {
    return <View>{this.renderPie()}</View>;
  }
}

const styles = StyleSheet.create({
  piecontainer: {
    alignItems: 'center',
  },
  bar: {
    height: 266,
    width: 266,
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
