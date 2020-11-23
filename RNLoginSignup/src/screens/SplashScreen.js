import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const screenList = [
  {name: 'SignIn', screen: 'SignInScreen'},
  {name: 'SignUp', screen: 'SignUpScreen'},
];

const SplashScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {screenList.map((screen, index) => (
        <View key={index} style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate(screen.screen)}>
            <Text style={styles.textSign}>{screen.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
