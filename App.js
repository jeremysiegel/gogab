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
import OnboardingScreen from "./app/screens/OnboardingScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import logger from "./app/utility/logger";
import setUniqueID from "./app/utility/setUniqueId";

logger.start();

export default function App() {
  LogBox.ignoreLogs([
    'Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
  ]);

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();
  const [country, setCountry] = useState();
  const [selectedCountries, setSelectedCountries] = useState([]);

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

  const restoreUser = async () => {
    const userData = await cache.get("user");
    //logger.identify(userData.uuid);
    // If you write new data:   cache.store("user", userData);

    setUser(userData);

    await LoadFonts();
    await getCountry();
    let userWorldCountries = await cache.get("worldMapCountries");
    userWorldCountries
      ? setSelectedCountries(userWorldCountries)
      : setSelectedCountries([]);
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

  if (!isReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContext.Provider
        value={{
          country,
          setCountry,
          selectedCountries,
          setSelectedCountries,
          user,
          setUser,
        }}
      >
        <StatusBar translucent={true} />
        <NavigationContainer>
          <NativeBaseProvider>
            <View style={styles.container}>
              {country ? <LessonNavigator /> : <AuthNavigator />}
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
