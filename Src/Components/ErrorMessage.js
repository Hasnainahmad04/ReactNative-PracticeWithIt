import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../assets/colors';

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={styles['text']}>{error}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.danger,
  },
});
export default ErrorMessage;
