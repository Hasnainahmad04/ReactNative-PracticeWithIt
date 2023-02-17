import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ImageViewScen(props) {
  return (
    <View style={styles['container']}>
      <View style={styles['closeIcon']}>
        <MaterialCommunityIcons name="close" size={40} color={'#fff'} />
      </View>
      <View style={styles['deleteIcon']}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={40}
          color={'#fff'}
        />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles['image']}
        resizeMode={'contain'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageViewScen;
