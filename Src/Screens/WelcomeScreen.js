import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import AppButton from '../Components/AppButton';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles['background']}>
      <View style={styles['logoContainer']}>
        <Image
          source={require('../assets/logo-red.png')}
          style={styles['logo']}
        />
        <Text style={styles['tagline']}>Sell What You Don't Need</Text>
      </View>
      <View style={styles['buttonContainer']}>
        <AppButton
          title={'login'}
          onPress={() => navigation.navigate('Login')}
        />
        <AppButton
          color="secondary"
          title={'Regisetr'}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    color: '#000',
  },
});

export default WelcomeScreen;
