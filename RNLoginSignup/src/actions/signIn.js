export const [SET_SIGN_IN, SET_SIGN_UP, SET_SIGN_OUT] = [
  'SET_SIGN_IN',
  'SET_SIGN_UP',
  'SET_SIGN_OUT',
];

export const setSignInData = (userToken, userName) => ({
  type: 'SET_SIGN_IN',
  payload: {userToken, userName},
});

export const setSignOutData = () => ({
  type: 'SET_SIGN_OUT',
});

export const setSignUpData = (userToken, userName) => ({
  type: 'SET_SIGN_UP',
  payload: {userToken, userName},
});

export const getUserToken = (userToken) => ({
  type: 'GET_TOKEN',
  token: userToken,
});
