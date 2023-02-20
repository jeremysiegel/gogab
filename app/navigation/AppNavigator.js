import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import LessonNavigator from "./LessonNavigator";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import LessonContext from "./cycleContext";
import colors from "../config/colors";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary + 80,
        tabBarStyle: {
          //height: Platform.OS === "ios" ? 85 : 55,
          // height: Dimensions.get("window").height * 0.075,

          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontSize: Platform.OS === "ios" ? 14 : 13,
          marginVertical: 2,
        },
        tabBarIconStyle: {
          //  marginBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
