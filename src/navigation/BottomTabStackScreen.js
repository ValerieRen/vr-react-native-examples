import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../components/SettingsScreen';
import TopTabStackScreen from './TopTabStackScreen';

const TabStack = createBottomTabNavigator();

const BottomTabStackScreen = () => (
  <TabStack.Navigator
    lazy={true}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({focused}) => {
        let iconName;
        let iconColor;

        if (route.name === 'Home') {
          iconName = 'home';
          iconColor = !focused ? 'gray' : 'green';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
          iconColor = !focused ? 'gray' : 'green';
        }
        return <Icon color={iconColor} name={iconName} size={20} />;
      },
    })}>
    <TabStack.Screen name="Home" component={TopTabStackScreen} />
    <TabStack.Screen name="Settings" component={SettingsScreen} />
  </TabStack.Navigator>
);

export default BottomTabStackScreen;
