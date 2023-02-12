import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux/es/exports';
import CustomIndex from '../component/customIndex';

const CartBox = ({navigation}) => {
  const [orderButton, setOrderButton] = useState(true);
  const [details, setDetails] = useState(false);
  //const items = useSelector(state => state.payload);

  const handleOrderButton = () => {
    setOrderButton(false);
    setDetails(true);
  };

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
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.cart}>
          <Text>MY CART(0)</Text>
          <View>
            {orderButton ? (
              <TouchableOpacity
                style={styles.placeOrder}
                onPress={handleOrderButton}>
                <Text style={styles.orderText}>Place Order</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <View style={styles.CustomerDetails}>
          <Text>Customer Details</Text>
          {details ? <CustomIndex /> : null}
        </View>
        <View style={styles.orderSummary}>
          <Text>order Summary</Text>
          {!orderButton ? (
            <TouchableOpacity
              style={styles.placeOrder}
              onPress={() => {
                navigation.navigate('Confirmed');
              }}>
              <Text style={styles.orderText}>Checkout</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => {
            navigation.navigate('LinkingScreen');
          }}>
          <Text style={styles.orderText}>Linking Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartBox;
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
  cart: {
    borderWidth: 0.3,
    padding: 30,
    margin: 20,
  },
  placeOrder: {
    backgroundColor: '#a03037',
    width: '40%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  orderText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  Search: {
    width: '50%',
  },
  CustomerDetails: {
    borderWidth: 0.5,
    padding: 20,
    margin: 20,
  },
  orderSummary: {
    borderWidth: 0.3,
    padding: 15,
    margin: 20,
  },
});
