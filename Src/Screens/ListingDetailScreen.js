import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import ListItem from '../Components/ListItem';

function ListingDetailScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles['image']} />
      <View style={styles['detailContainer']}>
        <Text style={styles['title']}>{listing.title}</Text>
        <Text style={styles['subTitle']}>{listing.subTitle}</Text>
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
