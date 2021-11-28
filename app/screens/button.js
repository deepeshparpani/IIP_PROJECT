import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
    padding: 10,
    backgroundColor: '#313B84',
    borderColor: '#252C4A'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  Container: {
    flex: 2
  }
});
