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
} from 'react-native';

import {Back, Forward} from '../assets/icons/svgs';
import ParticpantsData from './Particpantdata';

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
    <ScrollView>
      <SafeAreaView style={styles.firstContainer}>
        <Pressable>
          <Back height={24} width={24} style={styles.arrow} />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
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
          <Text style={styles.labels}> Participants </Text>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Participants</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F7FB',
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
    marginTop: 15,
    marginHorizontal: 20,
  },
  arrow: {
    marginHorizontal: 24,
    marginVertical: 10,
    color: 'black',
  },
  forwardarrow: {
    marginTop: 30,
    height: 12,
    width: 7,
    bottom: -5,
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
    marginTop: 30,
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
    marginTop: 20,
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
  button: {
    width: 327,
    height: 45,
    backgroundColor: '#10B78B',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
