import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {LogBox} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {color} from './constans/theme';

LogBox.ignoreLogs([
  'A props object containing a "key" prop is being spread into JSX',
]);
LogBox.ignoreAllLogs();

const App: React.FC = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={color.background}
        translucent={false}
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default gestureHandlerRootHOC(App);
