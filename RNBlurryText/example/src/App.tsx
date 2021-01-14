import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import BlurryText from 'react-native-blurry-text';

export default function App() {
  return (
    <View style={styles.container}>
      <BlurryText
        blurRadius={7.0}
        text="Hello World"
        // style={{ color: '#86a9dc', backgroundColor: '#eae2d9' }}
      />
      <Text style={{ color: '#86a9dc' }}>Hello world 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f88379',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
