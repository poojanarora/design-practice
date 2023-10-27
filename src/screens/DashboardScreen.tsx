import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {APP_LOGO} from '../assets/images';
import {Plus, Search} from '../assets/icons/svgs';
import data from './data';

const DashboardScreen = () => {
  const ChatCard = ({item}: any) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.round}>
          <Text style={styles.innerText}> UK </Text>
        </View>
        <View style={styles.chatDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLastMessage}>{item.last_message}</Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '20%', marginVertical: 7}}>
          <Text style={styles.time}> {item.time}</Text>
          <View style={styles.circleContainer}>
            <Text style={styles.circleText}> 1 </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.row}>
        <Text style={styles.text}>Chat</Text>
        <Image source={APP_LOGO} style={styles.logo} />
        <Plus />
      </View>
      <View style={styles.container}>
        <View style={styles.searchBar__unclicked}>
          <Search />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => <ChatCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
  },
  row: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Mulish-Regular',
    fontSize: 18,
  },
  logo: {
    height: 20,
    width: 70,
    resizeMode: 'contain',
  },
  bar: {
    height: 20,
  },
  searchBar__unclicked: {
    paddingHorizontal: 7,
    marginHorizontal: 10,
    marginVertical: 15,
    flexDirection: 'row',
    backgroundColor: '#d9dbda',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    fontFamily: 'Mulish-Regular',
    fontSize: 20,
    marginLeft: 10,
    width: '93%',
    fontWeight: '600',
  },
  round: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#3068F9',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatDetails: {
    width: '57%',
    marginLeft: 10,
    alignItems: 'flex-start',
    marginVertical: 7,
  },
  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 20,
  },
  itemName: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
  },
  itemLastMessage: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    marginTop: 10,
    color: '#ADB5BD',
    fontWeight: '400',
  },
  list: {
    marginHorizontal: 20,
  },
  time: {
    fontFamily: 'Mulish-Regular',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  circleText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    alignSelf: 'center',
    color: 'white',
  },
});
