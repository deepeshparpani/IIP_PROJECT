import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Quiz1 from './screens/Quiz1';
import Quiz2 from './screens/Quiz2';
import Quiz3 from './screens/Quiz3';
import Quiz4 from './screens/Quiz4';
import Quiz5 from './screens/Quiz5';
import doctor from './screens/doctor';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#0085FF" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='Depression Test' component={ Quiz } />
        <Stack.Screen name='Anxiety Test' component={ Quiz1 } />
        <Stack.Screen name='Bipolar Test' component={ Quiz2 } />
        <Stack.Screen name='PTSD Test' component={ Quiz3 } />
        <Stack.Screen name='Addiction Test' component={ Quiz4 } />
        <Stack.Screen name='Psychosis Test' component={ Quiz5 } />
        <Stack.Screen name='doctor' component={ doctor } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});