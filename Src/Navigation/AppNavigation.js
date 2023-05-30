import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListEditingScreen from '../Screens/ListEditingScreen';
import AccountNavigator from './AccountNavigation';
import FeedNavigator from './FeedNavigation';
import NewListButton from './NewListButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddListing"
      component={ListEditingScreen}
      options={({navigation}) => ({
        title: 'Add Listing',
        tabBarButton: () => (
          <NewListButton onPress={() => navigation.navigate('AddListing')} />
        ),
      })}
    />
    <Tab.Screen
      name="MainAccount"
      component={AccountNavigator}
      options={{
        title: 'Account',
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
