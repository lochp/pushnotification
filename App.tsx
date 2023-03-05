/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* import React from 'react';
import {
  View,
} from 'react-native';
import TestPushNot from './mainSrc/TestPushNot';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <TestPushNot />
    </View>
  );
}

export default App; */
import { View, Text } from 'react-native'
import React from 'react';
import TestPushNot from './mainSrc/TestPushNot';
import Notification from './mainSrc/Notification';


const App = () => {
  return (
    <View>
      <TestPushNot />
      <Notification />
    </View>
  )
}

export default App