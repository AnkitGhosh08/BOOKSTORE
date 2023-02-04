import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomIndex = () => {
  const [continueButton, setContinueButton] = useState(true);
  const [orderSummary, setOrderSummary] = useState(false);

  const handleContinueButton = () => {
    setContinueButton(false);
    setOrderSummary(true);
  };

  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <TextInput placeholder="Name" style={styles.nameInput} />

        <TextInput placeholder="Phone Number" style={styles.nameInput} />
      </View>

      <View style={styles.row}>
        <TextInput placeholder="PinCode" style={styles.nameInput} />

        <TextInput placeholder="Locality" style={styles.nameInput} />
      </View>
      <View>
        <TextInput
          placeholder="Address"
          multiline={true}
          style={styles.addressInput}
        />
      </View>

      <View style={styles.row}>
        <TextInput placeholder="City/Town" style={styles.nameInput} />

        <TextInput placeholder="Landmark" style={styles.nameInput} />
      </View>

      <View>
        <Text style={{color: 'grey', fontSize: 15}}>Type</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.circle}></View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Home</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.circle}></View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Work</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.circle}></View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Other</Text>
        </View>
      </View>

      <View>
        {continueButton ? (
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={handleContinueButton}>
            <Text style={styles.orderText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CustomIndex;

const styles = StyleSheet.create({
  nameInput: {
    padding: 5,
    fontSize: 15,
    width: '40%',
    margin: 5,
    borderWidth: 1,
  },
  addressInput: {
    padding: 5,
    fontSize: 15,
    width: '83%',
    height: 70,
    margin: 5,
    borderWidth: 1,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    color: 'black',
  },
  typeTxt: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 7,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
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
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
});
