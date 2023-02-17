import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import ListItem from '../Components/ListItem';

function ListingDetailScreen(props) {
  return (
    <View>
      <Image source={require('../assets/jacket.jpg')} style={styles['image']} />
      <View style={styles['detailContainer']}>
        <Text style={styles['title']}>Red Jacket For Sale</Text>
        <Text style={styles['subTitle']}>$100</Text>
        <View style={styles['userContainer']}>
          <ListItem
            image={require('../assets/jacket.jpg')}
            title="Hasnain Ahmad"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
    marginVertical: 10,
    fontWeight: '500',
  },
  userContainer: {
    paddingVertical: 40,
  },
});
export default ListingDetailScreen;
