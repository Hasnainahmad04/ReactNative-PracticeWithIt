import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({image, title, subTitle, onPress, swipeAction, Icon}) {
  return (
    <Swipeable renderRightActions={swipeAction}>
      <TouchableHighlight onPress={onPress} underlayColor={'#eee'}>
        <View style={styles['container']}>
          {image && <Image source={image} style={styles['image']} />}
          {Icon}
          <View style={styles['detailContainer']}>
            <Text style={styles['title']} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && <Text numberOfLines={2}> {subTitle}</Text>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
export default ListItem;
