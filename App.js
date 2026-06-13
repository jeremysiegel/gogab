import "./app/utility/backHandlerShim"; // must run before native-base loads
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { setAudioModeAsync } from "expo-audio";

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

  const getCountry = async (userData) => {
    // The dedicated "country" cache key is only written when the user changes
    // language in Settings. Fall back to the country stored on the user record
    // (set at onboarding) before defaulting to Italian, so reloads keep the
    // user's actual language.
    let cachedCountry = await cache.get("country");
    if (!cachedCountry) {
      cachedCountry = userData?.country || "it";
    }
    setCountry(cachedCountry);
  };

  const restoreUser = async () => {
    const userData = await cache.get("user");
    if (userData) {
      logger.identify(userData.uuid);
      logger.logEvent("returnUser", "country", userData.country);
      if (userData.firstLogin === true) {
        userData.firstLogin = false;
        cache.store("user", userData);
      }
      await getCountry(userData);
    }
    setUser(userData);

    await LoadFonts();
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
        // Play sound even when the iOS ringer/silent switch is on.
        await setAudioModeAsync({ playsInSilentMode: true });
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
              {user ? <LessonNavigator /> : <AuthNavigator />}
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
