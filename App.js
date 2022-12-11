import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import LessonNavigator from "./app/navigation/LessonNavigator";
import useFonts from "./hooks/useFonts";

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
    <NavigationContainer>
      <NativeBaseProvider>
        <View style={styles.container}>
          <LessonNavigator />
        </View>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
