import React, { useContext } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WorldMapScreen from "../screens/WorldMapScreen";
import colors from "../config/colors";
import AppHeader from "../components/AppHeader";
import AuthContext from "./authContext";
import getFlag from "../utility/getFlag";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { country } = useContext(AuthContext);
  const image = getFlag(country);
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

        tabBarLabelStyle: {
          fontSize: Platform.OS === "ios" ? 14 : 13,
          marginVertical: 2,
        },
        tabBarIconStyle: {
          width: 40,
          //  marginBottom: 2,
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
