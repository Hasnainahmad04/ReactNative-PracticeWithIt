import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

function NewListButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles['container']}>
        <MaterialCommunityIcons name="plus-circle" size={40} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 50,
    borderWidth: 10,
    bottom: 30,
    borderColor: '#fff',
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
});

export default NewListButton;
