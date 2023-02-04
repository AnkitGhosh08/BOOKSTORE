import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {useDispatch} from 'react-redux/es/exports';
import {addItemToCard} from '../Redux/Action';

const BookCart = () => {
  const [books, setBooks] = useState([]);
  // console.log(books);

  // const dispatch = useDispatch();

  // const addItem = item => {
  //   // dispatch(addItemToCard(item));
  // dispatch({type: 'ADDITEM'});
  // };

  const fetchBookData = async () => {
    const url = 'https://mocki.io/v1/6b908361-ae1d-46ab-887c-291ff585d8ee';
    const response = await fetch(url);
    const json = await response.json();
    setBooks(json);
  };

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <View>
      <FlatList
        data={books}
        key={item => item.id}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.Container}>
              <Card key={item.id}>
                <View style={styles.coverImg}>
                  <Card.Cover source={{uri: item.link}} />
                </View>
                <Card.Content>
                  <Text variant="titleLarge" style={{color: '#000'}}>
                    {item?.title}
                  </Text>
                  <Text variant="bodyMedium">by {item.author}</Text>
                  <Text variant="bodyMedium">{item.Prize}</Text>
                </Card.Content>
                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.bagBtn}
                    onPress={() => dispatch({type: 'ADDITEM'})}>
                    <Text style={styles.addBtnText}>Add To Bag</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.wishlistText}>Wishlist</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};
export default BookCart;
const styles = StyleSheet.create({
  Container: {
    width: '50%',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    //padding: 10,
    //margin: 1,
  },
  coverImg: {
    width: 140,
    margin: 10,
    // marginRight: 20,
    justifyContent: 'center',
  },
  btnView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  wishlistText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 11,
  },
});
