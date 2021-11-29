import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
  } from 'react-native';

  
export default class Home extends Component{

  render() {
    return (
      <View>
          <Text>Home Screen</Text>
          <Button title="Go to Quiz" onPress={()=>this.props.navigation.navigate("Quiz")} />
          </View>
        
      
    );
  }
}

