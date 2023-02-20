import React, {useEffect, useState} from 'react';
import {Switch, TextInput, View, PermissionsAndroid} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

import ListingDetailScreen from './Src/Screens/ListingDetailScreen';
import ImageViewScen from './Src/Screens/ImageViewScreen';
import MessagesScreen from './Src/Screens/MessagesScreen';
import WelcomeScreen from './Src/Screens/WelcomeScreen';
import Icon from './Src/Components/Icon';
import colors from './Src/assets/colors';
import ListItem from './Src/Components/ListItem';
import AccountScreen from './Src/Screens/AccountScreen';
import ListingScreen from './Src/Screens/ListingScreen';
import AppTextInput from './Src/Components/AppTextInput';
import AppPicker from './Src/Components/AppPicker';
import LoginScreen from './Src/Screens/LoginScreen';
import ListEditingScreen from './Src/Screens/ListEditingScreen';
import RegisterScreen from './Src/Screens/RegisterScreen';
import ImageInputList from './Src/Components/ImageInputList';
import useLocation from './Src/hooks/useLocation';

function App() {
  const [imageUris, setImageUris] = useState([]);
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ],

        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (Object.keys(granted).every(key => granted[key] === 'granted')) {
        console.log('You can use the camera', granted);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  const locate = useLocation();
  console.log(locate);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ListEditingScreen />
    </GestureHandlerRootView>
  );
}

export default App;
