import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

import {APP_LOGO} from '../assets/images';
import {Back, Exit, Forward, Lock} from '../assets/icons/svgs';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Text style={styles.text}>Profile</Text>
        <Image source={APP_LOGO} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <View style={styles.otherRound}>
          <Text style={styles.innerText}> AZ </Text>
        </View>
        <View style={{marginLeft: 20, width: '57%'}}>
          <Text style={styles.particpantName}>Almayra Zamzamy </Text>
          <Text style={styles.itemLastMessage}>
            kitchen architecture project
          </Text>
        </View>
      </View>
      <View style={styles.firstContainer}>
        <Lock style={styles.forwardArrow} />
        <View style={styles.textContainer}>
          <Text style={styles.labels}> Change Password </Text>
        </View>
        <Forward style={styles.arrow} />
      </View>
      <View style={styles.firstContainer}>
        <Exit style={styles.forwardArrow} />
        <View style={styles.textContainer}>
          <Text style={styles.labels}> Log Out </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Mulish-Regular',
    fontWeight: '600',
  },
  logo: {
    height: 19,
    width: 84,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginLeft: 10,
    paddingTop: 5,
  },
  otherRound: {
    height: 49.1,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  particpantName: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  innerText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  itemLastMessage: {
    fontSize: 12,
    color: '#111',
    marginTop: 10,
    opacity: 0.6,
    fontFamily: 'Mulish-Regular',
  },
  labels: {
    fontSize: 14,
    color: '#000E08',
    marginLeft: 24,
    marginTop: 30,
  },
  forwardArrow: {
    marginTop: 30,
    height: 24,
    width: 24,
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: -10,
  },
  arrow: {
    marginTop: 30,
    height: 24,
    width: 24,
    bottom: -5,
  },
});
