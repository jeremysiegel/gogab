import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import LessonNavigator from "./LessonNavigator";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import LessonContext from "./cycleContext";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          //height: Platform.OS === "ios" ? 85 : 55,
          // height: Dimensions.get("window").height * 0.075,
          marginTop: 4,
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
          tabBarLabel: "Learn",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book"
              color={colors.primary}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
