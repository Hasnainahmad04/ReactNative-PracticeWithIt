import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function ListItem({image, title, subTitle, onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'#eee'}>
      <View style={styles['container']}>
        <Image source={image} style={styles['image']} />
        <View>
          <Text style={styles['title']}>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});
export default ListItem;
