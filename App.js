import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import AppNavigator from "./app/navigation/AppNavigator";
import SandboxScreen from "./app/screens/SandboxScreen";
import useFonts from "./hooks/useFonts";
import MatchingScreen from "./app/screens/lessonScreens/MatchingScreen";

export default function App() {
  const [isReady, setIsReady] = useState();

  const LoadFonts = async () => {
    await useFonts();
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
  };

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <NativeBaseProvider>
          <View style={styles.container}>
            <AppNavigator />
          </View>
        </NativeBaseProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
