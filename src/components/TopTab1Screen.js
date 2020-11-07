import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const TopTab1Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Top Tab 1 Screen</Text>
    </SafeAreaView>
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

export default TopTab1Screen;
