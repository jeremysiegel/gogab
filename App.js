import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import AuthContext from "./app/navigation/authContext";
import AppNavigator from "./app/navigation/AppNavigator";
import LessonNavigator from "./app/navigation/LessonNavigator";
import useFonts from "./hooks/useFonts";
import { LogBox } from "react-native";
import cache from "./app/utility/cache";

export default function App() {
  LogBox.ignoreLogs([
    'Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
  ]);

  const [isReady, setIsReady] = useState();
  const [country, setCountry] = useState();

  const LoadFonts = async () => {
    await useFonts();
  };

  const getCountry = async () => {
    let cachedCountry = await cache.get("country");
    if (!cachedCountry) {
      cachedCountry = "it";
    }
    setCountry(cachedCountry);
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const restoreUser = async () => {
    await LoadFonts();
    await getCountry();
  };

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContext.Provider value={{ country, setCountry }}>
        <StatusBar translucent={true} />
        <NavigationContainer>
          <NativeBaseProvider>
            <View style={styles.container}>
              <LessonNavigator />
            </View>
          </NativeBaseProvider>
        </NavigationContainer>
      </AuthContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
