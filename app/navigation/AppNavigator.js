import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LessonNavigator from "./LessonNavigator";
import HomeScreen from "../screens/HomeScreen";
import LessonContext from "./cycleContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [lessonData, setLessonData] = useState();

  return (
    <LessonContext.Provider value={{ lessonData, setLessonData }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="lessonNavigator" component={LessonNavigator} />
      </Stack.Navigator>
    </LessonContext.Provider>
  );
}
