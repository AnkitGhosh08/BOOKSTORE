import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useOrientation} from '../Hooks/useOrientation';
import BookCard from './BookCart';

const CardBox = () => {
  const [books, setBooks] = useState([]);
  const isPortrait = useOrientation() === 'portrait';
  const getBooksData = async () => {
    const url = 'https://mocki.io/v1/3c23d858-a345-462e-b79b-3aad64e47721';
    const response = await axios.get(url);
    const json = response.data;
    setBooks(json);
  };

  useEffect(() => {
    getBooksData();
  }, []);
  return (
    <View style={styles.cardContainer}>
      {isPortrait ? (
        <FlatList
          keyExtractor={item => item.id}
          renderItem={({item, index}) => <BookCard {...item} />}
          data={books}
          numColumns={2}
        />
      ) : (
        <ScrollView>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => <BookCard {...item} />}
            data={books}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 8,
    //alignContent: 'center',
    //justifyContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    flexDirection: 'row',
  },
});
