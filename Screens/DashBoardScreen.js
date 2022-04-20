import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FlatButton from '../shared/button'
import { useNavigation } from '@react-navigation/native';


const DashBoardScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.textTitle}>DashBoardScreen</Text>
      <FlatButton text={'Back'} onPress={() =>navigation.navigate('Login')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: "30%",
    fontSize: 40,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center'
  },
  btn: {paddingTop:50}
})

export default DashBoardScreen