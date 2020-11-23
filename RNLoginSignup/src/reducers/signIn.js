export const initialSignInState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

export const signInReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        userToken: action.userToken,
        isLoading: false,
      };
    case 'SET_SIGN_IN':
      return {
        ...state,
        userName: action.username,
        userToken: action.userToken,
        isLoading: false,
      };
    case 'SET_SIGN_OUT':
      return {
        ...state,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'SET_SIGN_UP':
      return {
        ...state,
        userName: action.username,
        userToken: action.userToken,
        isLoading: false,
      };
  }
};
