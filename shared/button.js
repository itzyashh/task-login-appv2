import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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
    marginTop:10,
    marginHorizontal:20,
    borderRadius: 50,
    paddingVertical: 18,
    paddingHorizontal: 0,
    backgroundColor: '#2962ff',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    
    fontSize: 16,
    textAlign: 'center',
  }
});