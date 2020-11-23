import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';

const Navigator = () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);

export default Navigator;
