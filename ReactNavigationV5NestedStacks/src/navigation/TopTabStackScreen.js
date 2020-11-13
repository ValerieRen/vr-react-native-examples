import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTab1Screen from '../components/TopTab1Screen';
import TopTab2Screen from '../components/TopTab2Screen';
import {TouchableOpacity, View, Text, Platform, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
const screenDimensions = Dimensions.get('screen');

const TopTabStack = createMaterialTopTabNavigator();

const TopTabStackScreen = () => (
  <TopTabStack.Navigator
    lazy={true}
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      gestureEnabled: false,
    }}>
    <TopTabStack.Screen name="TopTab1" component={TopTab1Screen} />
    <TopTabStack.Screen name="TopTab2" component={TopTab2Screen} />
  </TopTabStack.Navigator>
);

function TabBar({state, descriptors, navigation, position}) {
  return (
    <SafeAreaView
      style={{
        flex: 0.5,
        ...Platform.select({
          ios: {},
          android: {
            marginTop: 10,
          },
        }),
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Header</Text>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0.3)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={{flex: 1, alignItems: 'center'}}>
              <Animated.Text style={{opacity}}>{label}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default TopTabStackScreen;
