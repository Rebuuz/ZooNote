import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home'; 

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Home" 
                component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
        );

}