import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import Users from '../data/Users';
import {AuthContext} from '../common/context';

const SignInScreen = ({route, navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleSignIn = (username, password) => {
    const user = Users.find((item) => {
      return item.username === username && item.password === password;
    });
    if (user) {
      signIn(user);
      navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
    } else {
      Alert.alert('Warning', 'Username or password field is wrong.', [
        {text: 'Okay'},
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Login!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                username: val,
              });
            }}
          />
        </View>

        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                password: val,
              });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleSignIn(data.username, data.password)}
            style={styles.button}>
            <Text style={styles.textSign}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
