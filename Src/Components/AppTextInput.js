import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles['container'], {width}]}>
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
    borderRadius: 35,
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    width: '100%',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default AppTextInput;
