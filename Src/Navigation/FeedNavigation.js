import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingScreen from '../Screens/ListingScreen';
import ListingDetailScreen from '../Screens/ListingDetailScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      animation: 'slide_from_bottom',
    }}>
    <Stack.Screen
      name="Listing"
      component={ListingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
