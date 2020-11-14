import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import List from './src/components/List';
import {createStore} from 'redux';
import rootReducer from './src/reducers';
import {Provider} from 'react-redux';

const App = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex: 1}}>
        <List />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
