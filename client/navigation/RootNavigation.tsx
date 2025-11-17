import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'; 
import SignUpScreen from '../screens/SignUpScreen';

import { useAuth } from 'lib/AuthContext';

export type RootStackParamList = {
    Login: undefined; 
    SignUp: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
    const { user, loading } = useAuth();

  if (loading) {
    // Visa något medan AsyncAuthStore laddas
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Laddar...</Text>
      </View>
    );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
                />
                ) : (
                <>
                <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
                />
                </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
        );

}