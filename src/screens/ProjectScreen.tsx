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
import SimplePieChart from '../assets/components/PieChart';

const ProjectScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={APP_LOGO} style={styles.logo} />
        <Plus style={styles.plus} />
      </View>
      <View style={styles.chipContainer}>
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
        <View style={styles.boxContainer}>
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
        <View style={styles.secondBoxContainer}>
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

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
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
    paddingVertical: 40,
    marginHorizontal: 30,
  },
  labelChip: {
    backgroundColor: '#10B78B',
    borderRadius: 17,
    width: 82,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    borderRadius: 20,
  },
  text: {
    color: '#BCBCBC',
    fontWeight: 'bold',
  },
  labelText: {
    color: 'white',
    fontFamily: 'Mulish-Regular',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 265,
    paddingHorizontal: 30,
  },
  secondBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 30,
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
    marginLeft: 24,
  },
  icon: {
    height: 34,
    width: 34,
    marginTop: 10,
    marginLeft: 24,
  },
  percentText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
