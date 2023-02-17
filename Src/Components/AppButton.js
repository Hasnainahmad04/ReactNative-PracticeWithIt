import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors';

function AppButton({title, onPress, color = 'primary'}) {
  return (
    <TouchableOpacity
      style={[styles['button'], {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles['text']}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default AppButton;
