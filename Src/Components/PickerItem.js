import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function PickerItem({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={styles['text']}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#000',
  },
});
export default PickerItem;
