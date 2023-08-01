import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BookCart from '../component/BookCart';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Icon}>
          <Ionicons name="book" size={20} color="white" />
        </View>
        <View>
          <Text style={styles.Text}> Hello</Text>
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
      <View>
        <Text style={styles.bookTxt}>Books(128+ items)</Text>
      </View>
      <View style={styles.bookCart}>
        <BookCart />
      </View>
    </View>
  );
};
export default Home;
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
});
