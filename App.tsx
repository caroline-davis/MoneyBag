import React from 'react';
import 'react-native-gesture-handler';
// custom font
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import RootStack from './navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <RootStack />
  );
}
