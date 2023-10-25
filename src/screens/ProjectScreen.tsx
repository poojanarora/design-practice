import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Plus, Profit, Project, Sales, Save} from '../assets/icons/svgs';
import {APP_LOGO} from '../assets/images';
import PieChartExample from '../assets/components/PieChart';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={APP_LOGO} style={styles.logo} />
        <Plus style={styles.plus} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 60,
          paddingHorizontal: 20,
        }}>
        <View style={styles.labelChip}>
          <Text style={styles.labelText}>Weekly</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.text}>Monthly</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.text}>Yearly</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 265,
            paddingHorizontal: 30,
          }}>
          <View style={styles.salesBox}>
            <Sales style={styles.icon} />
            <Text style={styles.innerLabelText}>Total Sales</Text>
            <Text style={styles.percentText}> 48%</Text>
          </View>
          <View style={styles.profitBox}>
            <Profit style={styles.icon} />
            <Text style={styles.innerLabelText}>Total Profit</Text>
            <Text style={styles.percentText}> $1,553</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 30,
          }}>
          <View style={styles.saveBox}>
            <Save style={styles.icon} />
            <Text style={styles.innerLabelText}>Average Saves</Text>
            <Text style={styles.percentText}> 48%</Text>
          </View>
          <View style={styles.projectBox}>
            <Project style={styles.icon} />
            <Text style={styles.innerLabelText}>No of Projects</Text>
            <Text style={styles.percentText}> 48%</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 24,
  },
  logo: {
    height: 32,
    width: 135,
  },
  plus: {
    height: 24,
    width: 24,
    right: 24,
  },
  labelChip: {
    backgroundColor: 'green', 
    padding: 12,
    margin: 5,
    borderRadius: 20,
  },
  chip: {
    padding: 12,
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: 'grey', 
    fontWeight: 'bold',
  },
  labelText: {
    color: 'white',
  },
  box: {
    width: 154,
    height: 127,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  salesBox: {
    width: 154,
    height: 127,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  profitBox: {
    width: 154,
    height: 127,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  saveBox: {
    width: 154,
    height: 127,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  projectBox: {
    width: 154,
    height: 127,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  innerLabelText: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    left: 24,
  },
  icon: {
    height: 34,
    width: 34,
    marginTop: 10,
    left: 24,
  },
  percentText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
