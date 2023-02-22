import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthContext from './Src/auth/context';

import AppNavigator from './Src/Navigation/AppNavigation';
import AuthNavigator from './Src/Navigation/AuthNavigator';
import theme from './Src/Navigation/navigationTheme';

function App() {
  const [user, setUser] = useState();

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.CAMERA,
        ],

        {
          title: 'Cool Photo App Camera Permission',
          message:
            'App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (Object.keys(granted).every(key => granted[key] === 'granted'))
        console.log('granted');
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={theme}>
        <GestureHandlerRootView style={{flex: 1}}>
          {!user ? <AuthNavigator /> : <AppNavigator />}
        </GestureHandlerRootView>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
