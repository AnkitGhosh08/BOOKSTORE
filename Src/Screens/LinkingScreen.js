import React from 'react';
import {
  Linking,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Url_Home = 'bookstore://app/home';
const Url_CartBox = 'bookstore://app/cartBox';
const Url_Confirmed = 'bookStore://app/confirmed';

const LinkingScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Icon}>
          <Ionicons name="book" size={20} color="white" />
        </View>

        <View>
          <Text style={styles.Text}>Bookstore</Text>
        </View>

        <View style={styles.Search}>
          <TextInput style={styles.TextInput} placeholder="Search" />
        </View>
        <View style={styles.cartView}>
          <Text style={styles.cardText}>Cart</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CartBox')}>
            <Ionicons name="cart-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.bagBtn}
          onPress={() => {
            Linking.openURL(Url_Home);
          }}>
          <Text style={styles.addBtnText}>Go to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.bagBtn}
          onPress={() => {
            Linking.openURL(Url_CartBox);
          }}>
          <Text style={styles.addBtnText}>Go to CartBox</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.bagBtn}
          onPress={() => {
            Linking.openURL(Url_Confirmed);
          }}>
          <Text style={styles.addBtnText}>Go to last screen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.bagBtn}
          onPress={() => {
            Linking.openURL(
              'https://www.npmjs.com/package/react-native-deep-linking',
            );
          }}>
          <Text style={styles.addBtnText}>Go to package screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LinkingScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#a03037',
  },

  Icon: {
    width: '7%',
    marginLeft: 10,
  },

  Text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  TextInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  cartView: {
    width: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 15,
  },
  bookTxt: {
    color: 'grey',
    fontSize: 15,
  },
  Search: {
    width: '50%',
  },
  bookCart: {
    width: '100%',
  },
  bagBtn: {
    width: '70%',
    backgroundColor: '#a03037',
    margin: 5,
    borderRadius: 5,
  },
  addBtnText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
  addBtn: {
    width: '70%',
    backgroundColor: '#999',
    margin: 5,
    borderRadius: 5,
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
