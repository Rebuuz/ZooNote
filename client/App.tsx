import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigation from 'navigation/RootNavigation';

import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigation />
    </>
  );
}
