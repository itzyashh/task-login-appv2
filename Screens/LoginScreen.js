import { Button, View, Text, TextInput, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import axios from 'axios'
import { useState } from 'react';
import FlatButton from '../shared/button';
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';


const LoginScreen = () => {

  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState("")
  const submit = () => {
    axios({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      data: {
        email: userEmail.trim(),
        password: password
      },
      headers: {
        'Accept': '/'
      }
    })
      .then((response) => {
        const success = JSON.stringify(response.data)
        Alert.alert(
          "Success",
          `${success}`,
          [
            {
              text: "Go to DashBoard",
              onPress: () => navigation.navigate('Dashboard'),

            }
          ]
        );
        console.log(JSON.stringify(response.data));

      })
      .catch((response) => {
        console.log(userEmail);
        console.log(password);
        Alert.alert(
          "Failed",
          `${response}`,
          [
            {
              text: "Try Again",
              onPress: () => navigation.navigate('Login'),

            }
          ]
        );
      })


  }


  let [fontsLoad] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoad) {
    return <AppLoading />
  }

  const navigation = useNavigation();
  // const [isShowingText, setIsShowingText] = useState(true);

  return (
    <View style={styles.mainBlock}>
      <Text style={styles.textTitle} >Welcome!</Text>

      <Text style={styles.textNormal} >Email</Text>
      <TextInput style={tw`mt-1 mx-7 -mb-7 p-4 rounded-lg  bg-gray-100 text-gray-600 `} placeholder='Enter Email' autoCapitalize='none' value={userEmail}
        onChangeText={(actualData) => setUserEmail(actualData)}

      ></TextInput>

      <Text style={styles.textNormal}>Password</Text>
      <TextInput style={tw`mb-2 mt-1 mx-7  p-4 rounded-lg  bg-gray-100 text-gray-600`} placeholder='Enter Password' secureTextEntry={true}
        value={password}
        onChangeText={(actualData) => setPassword(actualData)}
      ></TextInput>

      <FlatButton text="Login" onPress={() => { submit() }} />

    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: 'Inter_400Regular'
  },
  mainBlock: {
    fontFamily: 'Inter_400Regular',
    backgroundColor: 'white',
    // paddingVertical:165,
    height: "100%"
  },
  textTitle: {
    marginTop: "30%",
    fontSize: 40,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textNormal: {
    marginHorizontal: 40,
    marginTop: 40,
    color: 'gray',
    fontFamily: 'Inter_400Regular'
  }
})

export default LoginScreen

