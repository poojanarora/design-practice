import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import {APP_LOGO} from '../assets/images';
import {Exit, Forward, Lock} from '../assets/icons/svgs';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.row}>
        <Text style={styles.text}>Profile</Text>
        <Image source={APP_LOGO} style={styles.logo} />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.otherRound}>
          <Text style={styles.innerText}> AZ </Text>
        </View>
        <View>
          <Text style={styles.particpantName}>Almayra Zamzamy </Text>
          <Text style={styles.itemLastMessage}>
            kitchen architecture project
          </Text>
        </View>
      </View>
      <View style={styles.firstContainer}>
        <Lock />
        <View style={styles.textContainer}>
          <Text style={styles.labels}> Change Password </Text>
        </View>
        <Forward />
      </View>
      <View style={styles.firstContainer}>
        <Exit />
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
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
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
    paddingHorizontal: 25,
    paddingTop: 5,
  },
  otherRound: {
    height: 49.1,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#3068F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  particpantName: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  innerText: {
    alignSelf: 'center',
    color: '#FFFFFF',
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
    paddingHorizontal: 15,
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textContainer: {
    flex: 1,
  },
});
