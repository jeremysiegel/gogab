import React, { useContext } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WorldMapScreen from "../screens/WorldMapScreen";
import DictionaryScreen from "../screens/dictionary/DictionaryScreen";
import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import AuthContext from "./authContext";
import getFlag from "../utility/getFlag";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { country } = useContext(AuthContext);
  const image = getFlag(country);
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          height: Platform.OS === "ios" ? 90 : 130,
        },
        headerTitle: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary + 70,
        tabBarStyle: {
          height: 55,
          position: "absolute",
          borderRadius: 30,
          margin: 10,
          // Edge-to-edge (SDK 55) draws behind the system nav bar; lift the
          // floating tab pill above it so the icons aren't clipped.
          marginBottom: insets.bottom + 10,
          borderTopWidth: 0,
          elevation: 2,
          shadowColor: colors.dark,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },

        // Remove the tab item's default vertical padding (reserved for the
        // hidden label) and center the icon within the short pill, so the
        // bottom of the icons isn't clipped.
        tabBarItemStyle: {
          height: 55,
          paddingVertical: 0,
          justifyContent: "center",
        },
        tabBarIconStyle: {
          width: 40,
          height: 40,
        },
      }}
    >
      <Tab.Screen
        name="Learn"
        component={HomeScreen}
        options={() => ({
          headerLeft: () => <AppHeader title={"Learn"} image={image} />,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" color={color} size={35} />
          ),
        })}
      />
      <Tab.Screen
        name="Dictionary"
        component={DictionaryScreen}
        options={{
          headerLeft: () => <AppHeader title={"Dictionary"} />,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My World Map"
        component={WorldMapScreen}
        options={{
          headerLeft: () => <AppHeader title={"My World Map"} />,
          headerTitle: "",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => <AppHeader title={"Settings"} />,
          headerTitle: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
