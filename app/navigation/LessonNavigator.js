import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewWordScreen from "../screens/NewWordScreen";
import ReviewWordScreen from "../screens/ReviewWordScreen";
import TestWordScreen from "../screens/TestWordScreen";

const Stack = createNativeStackNavigator();

export default function LessonNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="newWord" component={NewWordScreen} />
      <Stack.Screen name="reviewWord" component={ReviewWordScreen} />
      <Stack.Screen name="testWord" component={TestWordScreen} />
    </Stack.Navigator>
  );
}
