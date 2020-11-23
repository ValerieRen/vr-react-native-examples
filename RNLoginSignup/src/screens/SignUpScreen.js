import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const SignUpScreen = ({route, navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
  });

  const handleSignUp = (navigation) => {
    // add user data
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) =>
              setData({
                ...data,
                username: val,
              })
            }
          />
        </View>

        <Text style={styles.text_footer}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) =>
              setData({
                ...data,
                password: val,
              })
            }
          />
        </View>

        <Text style={styles.text_footer}>Confirm Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              setData({
                ...data,
                confirm_password: val,
              });
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleSignUp(navigation)}
            style={styles.button}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
