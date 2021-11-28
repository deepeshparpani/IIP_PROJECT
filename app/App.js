import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { Screen } from 'react-native-screens';
import {Quiz} from './screens';
import {Quiz1} from './screens';
import FlatButton from './screens/button';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen
        
          name="Home"
          component={HomeScreen}
          options={{ title: "Sifty's mental health test" }}
        />
        
        <Stack.Screen name="Depression Test" component={ProfileScreen} />
        <Stack.Screen name="Anxiety Test" component={ProfileScreen1} />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (

    
    <>
    
    
    <FlatButton
      text="Depression Test"
      onPress={() => navigation.navigate('Depression Test')} />

      
      <FlatButton
        text="Anxiety Test"
        onPress={() => navigation.navigate('Anxiety Test')} />
        
        <View style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#252C4A',

            }}></View>
        </>
        
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <Quiz/>
  )
};
const ProfileScreen1 = ({ navigation, route }) => {
  return (
    <Quiz1/>
  )
};

export default MyStack