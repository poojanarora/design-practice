import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {Back, Forward} from '../assets/icons/svgs';
import ParticpantsData from './Particpantdata';
const screenHeight = Dimensions.get('screen').height;

const ChatScreen = () => {
  const ParticipantCard = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.participantRound}>
          <Text style={styles.innerText}> PA </Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.particpantName}>{item.name}</Text>
          <Text style={styles.particpantMail}>{item.last_message}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.arrow}>
        <Back />
      </Pressable>
      <View style={styles.firstContainer}>
        <View style={styles.round}>
          <Text style={styles.innerroundText}> UK </Text>
        </View>
        <View style={{width: '57%'}}>
          <Text style={styles.itemName}>kitchen architecture project </Text>
          <Text style={styles.subItemName}>(Bathroom)</Text>
          <Text style={styles.itemLastMessage}>
            Created on 13 July 2023, 12:00
          </Text>
          <Text style={styles.itemLastMessage}>
            Profit Percentage
            <Text style={styles.batteryPercent}> : 20% </Text>
          </Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.header}>
          <Text style={styles.labels}> Media, Links and Docs </Text>
          <Forward style={styles.forwardarrow} />
        </View>
        <Text style={styles.participantlabel}> Participants </Text>
        <View style={styles.supportContainer}>
          <View style={styles.otherRound}>
            <Text style={styles.innerText}> UK </Text>
          </View>
          <View style={{marginLeft: 10, width: '57%'}}>
            <Text style={styles.particpantName}>Wevisu Support </Text>
          </View>
        </View>
        <View style={styles.list}>
          <FlatList
            scrollEnabled={false}
            data={ParticpantsData}
            renderItem={({item}) => <ParticipantCard item={item} />}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Participants</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F7FB',
  },
  firstContainer: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  round: {
    height: 86,
    width: 86,
    borderRadius: 43,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  innerText: {
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
  },
  innerroundText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  list: {
    marginHorizontal: 20,
  },
  arrow: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  forwardarrow: {
    marginHorizontal: 24,
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 16,
  },
  particpantName: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  labels: {
    fontSize: 14,
    color: '#000E08',
    marginLeft: 24,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  participantlabel: {
    fontSize: 14,
    color: '#000E08',
    marginLeft: 24,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  subItemName: {
    fontSize: 12,
    color: 'blue',
    marginTop: 5,
    fontFamily: 'Mulish-Regular',
  },
  itemLastMessage: {
    fontSize: 12,
    color: '#111',
    marginTop: 10,
    opacity: 0.6,
    fontFamily: 'Mulish-Regular',
  },
  particpantMail: {
    fontSize: 12,
    color: '#111',
    marginTop: 8,
    opacity: 0.6,
    fontFamily: 'Mulish-Regular',
  },
  batteryPercent: {
    fontSize: 12,
    color: 'green',
    fontFamily: 'Mulish-Regular',
  },
  participantRound: {
    height: 49.1,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  supportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  otherRound: {
    height: 49.1,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#10B78B',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: screenHeight,
    justifyContent: 'flex-end',
  },
  button: {
    width: 327,
    height: 45,
    backgroundColor: '#10B78B',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  secondContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
});
