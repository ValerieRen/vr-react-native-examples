import React, {useMemo, useReducer, useEffect} from 'react';
import Navigator from './src/routers/Navigator';
import {AuthContext} from './src/common/context';
import AsyncStorage from '@react-native-community/async-storage';
import {initialSignInState, signInReducer} from './src/reducers/signIn';
import {
  getUserToken,
  setSignInData,
  setSignOutData,
  setSignUpData,
} from './src/actions/signIn';
import Loading from './src/components/Loading';

const App = () => {
  const [signInState, dispatch] = useReducer(signInReducer, initialSignInState);

  const authContext = useMemo(
    () => ({
      signIn: async (user) => {
        const userToken = user.userToken;
        const userName = user.username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.error(e);
        }
        dispatch(setSignInData(userToken, userName));
      },
      signUp: async (user) => {
        const userToken = user.userToken;
        const userName = user.username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.error(e);
        }
        dispatch(setSignUpData(userToken, userName));
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.error(e);
        }
        dispatch(setSignOutData());
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error(e);
      }
      console.log('getUserToken', userToken);
      dispatch(getUserToken(userToken));
    }, 1000);
  }, []);

  if (signInState.isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Navigator />
    </AuthContext.Provider>
  );
};

export default App;
