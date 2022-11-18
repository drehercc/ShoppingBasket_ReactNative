import React from 'react';
import { useCallback, useEffect } from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import Basket from './src/Screens/Basket/index';
import mock from './src/Mocks/basket'

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
/*
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
*/

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex : 1}} onLayout={onLayoutRootView} >
      <StatusBar/>
      <Basket {...mock}/>
    </SafeAreaView>
  );
}