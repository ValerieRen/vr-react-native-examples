import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const SignInScreen = ({route, navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const handleSignIn = (navigation) => {

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
            onPress={() => handleSignIn(navigation)}
            style={styles.button}>
            <Text style={styles.textSign}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
