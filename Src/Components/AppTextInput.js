import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles['container']}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles['icon']} />
      )}
      <TextInput style={styles['textInput']} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 25,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    width: '100%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default AppTextInput;
