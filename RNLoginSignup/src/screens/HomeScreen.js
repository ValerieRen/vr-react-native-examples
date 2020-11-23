import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../common/context';
import styles from './styles';

const HomeScreen = ({route, navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
    navigation.navigate('SplashScreen', {screen: 'SplashScreen'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Home!</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => handleSignOut()} style={styles.button}>
          <Text style={styles.textSign}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
