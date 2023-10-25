import {View, Pressable, Image, Text, StyleSheet} from 'react-native';

import {APP_LOGO_BLACK, PROFILE} from '../assets/images';
import {Notification} from '../assets/icons/svgs';

const Header = () => {
  return (
    <View style={[styles.header, styles.row, {backgroundColor: 'black'}]}>
      <Image source={APP_LOGO_BLACK} style={styles.logo} />
      <View style={styles.row}>
        <Pressable>
          <View>
            <Notification />
          </View>
        </Pressable>
        <Pressable style={styles.menu}>
          <Image source={PROFILE} style={styles.profile}></Image>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 68,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {},
  logo: {
    height: 35,
    width: 150,
    resizeMode: 'contain',
  },
  carttext: {
    position: 'absolute',
    right: 4,
    bottom: -10,
    top: 4,
    color: '#000000',

    fontSize: 20,
    zIndex: 999,
    fontFamily: 'Poppins-Bold',
  },
  profile: {
    height: 50,
    width: 50,
  },
});
