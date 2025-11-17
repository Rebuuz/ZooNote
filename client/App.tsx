import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen";
import RootNavigation from 'navigation/RootNavigation';
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand/700Bold";

import './global.css';
import { AuthProvider } from 'lib/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Quicksand_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <RootNavigation />
    </AuthProvider>
  );
}
