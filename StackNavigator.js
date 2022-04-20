import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './Screens/LoginScreen';
import DashBoardScreen from './Screens/DashBoardScreen';
import tw from 'twrnc';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    // const user = false;
    return (
        <Stack.Navigator >
            {/* {user ? <Stack.Screen name="DashBoard" component={DashBoardScreen} /> : <Stack.Screen name="Login" component={LoginScreen} />}   */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        </Stack.Navigator>
    )
}

// const styles = StyleSheet.create({
//     blueBody: {
//         backgroundColor: 4563e4,
//         alignItems: 'center'
//     }
// })

export default StackNavigator