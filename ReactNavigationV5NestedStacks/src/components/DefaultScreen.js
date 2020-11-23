import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const DefaultScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
        <Text style={styles.instructions}>Click here!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default DefaultScreen;
