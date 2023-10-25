import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import {DashboardScreenProps} from '../types/navigation/appTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {APP_LOGO} from '../assets/images';
import {Plus, Search} from '../assets/icons/svgs';
import data from './data';
const DashboardScreen = ({navigation, clicked}: DashboardScreenProps) => {
  const ChatCard = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.round}>
          <Text style={styles.innerText}> PA </Text>
        </View>

        <View style={{width: '57%', marginLeft: 10}}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLastMessage}>{item.last_message}</Text>
        </View>
        <View style={{alignItems: 'flex-end', width: '20%'}}>
          <Text style={styles.time}> {item.time}</Text>

          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              backgroundColor: 'green',
              marginTop: 14,
            }}>
            <Text style={styles.circleText}> 1 </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Text style={styles.text}>Chat</Text>
        <Image source={APP_LOGO} style={styles.logo} />

        <Plus />
      </View>
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }>
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
    marginTop: 15,
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
    fontSize: 20,
  },
  logo: {
    height: 35,
    width: 120,
    // resizeMode:'contain'
  },
  bar: {
    height: 20,
  },
  searchBar__unclicked: {
    padding: 7,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 8,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '93%',
  },
  round: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    marginBottom: 15,
  },
  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginBottom: 20,
  },

  itemName: {
    fontSize: 16,
  },
  itemLastMessage: {
    fontSize: 12,
    color: '#111',
    marginTop: 10,
    opacity: 0.6,
  },
  list: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  time: {
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: 16,
    color: 'white',
    fontSize: 20,
  },
  circleText: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'white',
    justifyContent: 'center',
    top: 2,
    flex: 1,
  },
});
