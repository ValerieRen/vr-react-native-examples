import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({route, navigation}) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          title: 'Splash',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{title: 'Sign In'}}
      />
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: 'Sign Up'}}
      />
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
