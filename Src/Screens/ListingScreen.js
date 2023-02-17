import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Card from '../Components/Card';

function ListingScreen(props) {
  const item = [
    {
      id: 1,
      title: 'Red Jacket for Sale!',
      subTitle: 100,
      image: require('../assets/jacket.jpg'),
    },
    {
      id: 2,
      title: 'Red Jacket for Sale!',
      subTitle: 1000,
      image: require('../assets/jacket.jpg'),
    },
  ];
  return (
    <View style={styles['screen']}>
      <FlatList
        data={item}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
export default ListingScreen;
