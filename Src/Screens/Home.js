import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CardBox from '../Components/CardBox';
import DropDown from '../Components/DropDown';
import Header from '../Components/Header';
import Colors from '../Constants/Colors';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.dropdown}>
        <View>
          <Text style={styles.bookTxt}>Books(100+ items)</Text>
        </View>
        <View>
          <DropDown />
        </View>
      </View>
      <View style={styles.cards}>
        <CardBox />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bookTxt: {
    color: Colors.cardBackground,
    fontSize: 13,
    fontWeight: '500',
  },
  dropdown: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  cards: {
    flex: 11,
  },
  bottom: {
    flex: 0.7,
  },
  header: {},
});
