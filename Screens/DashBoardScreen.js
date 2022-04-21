import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FlatButton from '../shared/button'
import { useNavigation } from '@react-navigation/native';


const DashBoardScreen = () => {
  const navigation = useNavigation();

  return (
      <>
    <View style={styles.blueBlock}>
      <Text style={styles.textTitle}>DashBoardScreen</Text>
    </View>
    <View style={styles.mainBlock}>
      <Text style={styles.textInfo}>Balance</Text>
      <FlatButton text={'Back'} onPress={() =>navigation.navigate('Login')}/>
    </View>

    </>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: "30%",
    fontSize: 40,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center'
  },
  blueBlock: {
    backgroundColor:'#4563e4',
    paddingBottom :40,
    marginTop:-20,
    position:'relative',
       top:20
    // marginTop:30
    
  },
  btn: {paddingTop:50},
  mainBlock: {
    fontFamily: 'Inter_400Regular',
    backgroundColor: 'white',
    // paddingVertical:165,
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
    // marginTop:45
  }
})

export default DashBoardScreen