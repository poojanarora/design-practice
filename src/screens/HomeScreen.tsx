import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Plus, Profit, Project, Sales, Save} from '../assets/icons/svgs';
import {APP_LOGO} from '../assets/images';
import RNChart from '../assets/components/PieChart';

const chipData = [
  {label: 'Weekly', text: 'Weekly', backgroundColor: '#10B78B'},
  {label: 'Monthly', text: 'Monthly'},
  {label: 'Yearly', text: 'Yearly'},
];
const boxData = [
  {
    label: 'Total Sales',
    percent: '48%',
    backgroundColor: '#F3EE76',
    icon: <Sales />,
  },
  {
    label: 'Total Profit',
    percent: '$1,553',
    backgroundColor: '#79DBFF',
    icon: <Profit />,
  },
  {
    label: 'Average Saves',
    percent: '48%',
    backgroundColor: '#BFFA00',
    icon: <Save />,
  },
  {
    label: 'No of Projects',
    percent: '48%',
    backgroundColor: '#F5BF80',
    icon: <Project />,
  },
];
const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={APP_LOGO} style={styles.logo} />
        <Plus style={styles.plus} />
      </View>
      <ScrollView>
        <View style={styles.chipContainer}>
          {chipData.map((chip, index) => (
            <View
              style={[
                styles.labelChip,
                {backgroundColor: chip.backgroundColor},
              ]}
              key={index}>
              <Text style={styles.labelText}>{chip.text}</Text>
            </View>
          ))}
        </View>
        <View>
          <RNChart />
        </View>
        <View style={styles.boxContainer}>
          {boxData.slice(0, 2).map((box, index) => (
            <View
              style={[styles.box, {backgroundColor: box.backgroundColor}]}
              key={index}>
              <View style={styles.icon}>{box.icon}</View>
              <Text style={styles.innerLabelText}>{box.label}</Text>
              <Text style={styles.percentText}>{box.percent}</Text>
            </View>
          ))}
        </View>
        <View style={styles.secondBoxContainer}>
          {boxData.slice(2).map((box, index) => (
            <View
              style={[styles.box, {backgroundColor: box.backgroundColor}]}
              key={index}>
              <View style={styles.icon}>{box.icon}</View>
              <Text style={styles.innerLabelText}>{box.label}</Text>
              <Text style={styles.percentText}>{box.percent}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 24,
  },
  logo: {
    height: 32,
    width: 135,
  },
  plus: {
    height: 24,
    width: 24,
  },
  chipContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 30,
    marginHorizontal: 30,
  },
  labelChip: {
    borderRadius: 17,
    width: 82,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#BCBCBC',
    fontFamily: 'Mulish-Regular',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  secondBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  box: {
    width: 154,
    height: 127,
    borderRadius: 10,
  },
  innerLabelText: {
    fontSize: 12,
    color: '#000000',
    marginTop: 10,
    marginLeft: 24,
  },
  icon: {
    height: 34,
    width: 34,
    marginTop: 10,
    marginLeft: 24,
  },
  percentText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
