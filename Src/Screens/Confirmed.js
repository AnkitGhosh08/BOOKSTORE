import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Confirmed = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.container}>
        <View style={styles.Icon}>
          <Ionicons name="book" size={20} color="white" />
        </View>
        <View>
          <Text style={styles.Text}>Bookstore</Text>
        </View>

        <View style={{width: '50%'}}>
          <TextInput style={styles.TextInput} placeholder="Search" />
        </View>
        <View style={styles.cartView}>
          <Text style={styles.cardText}>Cart</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CartBox')}>
            <Ionicons name="cart-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.flexColumn}>
        <Text style={{fontSize: 20, marginLeft: 80}}>
          {' '}
          Order placed successfully
        </Text>
        <View style={styles.rowWithPadding}>
          <Image style={styles.Image} source={require('../assets/oder.webp')} />
        </View>
        <View>
          <Text style={styles.confirmText}>
            Thank you for your purchase.
            {'\n'}
            your order is confirmed the order id is #123456 save the order id
            {'\n'}
            for further communication...
          </Text>
        </View>
        <View style={styles.columnWithPadding}>
          <View style={styles.rowStyle}>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Email us</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Contact us</Text>
            </View>
            <View style={styles.tableAddress}>
              <Text style={styles.tableText}>Address</Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>test@gmail.com</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>9876543210</Text>
            </View>
            <View style={styles.tableAddress}>
              <Text style={styles.tableText}>civil line, Tikamgarh(M.P.)</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.orderText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Confirmed;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookTxt: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  bottom: {
    flex: 0.7,
    backgroundColor: '#231709',
    justifyContent: 'center',
    width: '100%',
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 11,
  },
  rowWithPadding: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  confirmText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  columnWithPadding: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableRow: {
    width: '30%',
    borderWidth: 1,
  },
  tableText: {
    textAlign: 'center',
    fontSize: 15,
  },
  tableAddress: {
    width: '40%',
    borderWidth: 1,
  },
  placeOrder: {
    backgroundColor: '#a03037',
    width: '50%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  orderText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
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
  Image: {
    width: 200,
    height: 200,
  },
});
