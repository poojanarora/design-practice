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

const ChatScreen = () => {
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
        <View style={styles.timeContainer}>
          <Text style={styles.time}> {item.time}</Text>
          <View style={styles.circleContainer}>
            <Text style={styles.circleText}> 1 </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
      </View>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <ChatCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  searchBar: {
    paddingHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    backgroundColor: '#F7F7FC',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleContainer: {
    height: 22,
    width: 22,
    borderRadius: 40,
    backgroundColor: '#10B68A',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    alignItems: 'flex-end',
    width: '20%',
    marginVertical: 7,
    alignSelf: 'center',
  },
  input: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
    fontWeight: '600',
  },
  round: {
    height: 56,
    width: 56,
    borderRadius: 30,
    backgroundColor: '#3068F9',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatDetails: {
    marginLeft: 15,
    alignItems: 'flex-start',
    marginVertical: 7,
    flex: 1,
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
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  circleText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});
