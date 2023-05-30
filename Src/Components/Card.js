import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../assets/colors';

function Card({title, subTitle, image, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles['card']}>
        <Image source={{uri: image}} style={styles['image']} />
        <View style={styles['detailContainer']}>
          <Text style={styles['title']}>{title} </Text>
          <Text style={styles['subTitle']}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 18,
  },
});
export default Card;
