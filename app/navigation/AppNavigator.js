import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LessonNavigator from "./LessonNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="lessonNavigator" component={LessonNavigator} />
    </Stack.Navigator>
  );
}
