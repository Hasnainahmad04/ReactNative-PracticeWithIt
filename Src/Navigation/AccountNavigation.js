import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../Screens/AccountScreen';
import MessagesScreen from '../Screens/MessagesScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen name="MyListings" component={''} />
  </Stack.Navigator>
);

export default AccountNavigator;
