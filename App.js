import React, {useState} from 'react';
import ImageViewScen from './Src/Screens/ImageViewScreen';
import ListingDetailScreen from './Src/Screens/ListingDetailScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MessagesScreen from './Src/Screens/MessagesScreen';
import WelcomeScreen from './Src/Screens/WelcomeScreen';
import Icon from './Src/Components/Icon';
import colors from './Src/assets/colors';
import ListItem from './Src/Components/ListItem';
import AccountScreen from './Src/Screens/AccountScreen';
import ListingScreen from './Src/Screens/ListingScreen';
import {Switch, TextInput, View} from 'react-native';
import AppTextInput from './Src/Components/AppTextInput';
import AppPicker from './Src/Components/AppPicker';
import LoginScreen from './Src/Screens/LoginScreen';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}

export default App;
