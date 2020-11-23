import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DefaultScreen from '../../components/DefaultScreen';
import BottomTabStackScreen from './BottomTabStackScreen';
import TopTabStackScreen from './TopTabStackScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <RootStack.Screen name="DefaultScreen" component={DefaultScreen} />
      <RootStack.Screen name="BottomTab" component={BottomTabStackScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
