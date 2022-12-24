import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReviewPhraseScreen from "../screens/lessonScreens/ReviewPhraseScreen";
import TestPhraseScreen from "../screens/lessonScreens/TestPhraseScreen";
import NewPhraseScreen from "../screens/lessonScreens/NewPhraseScreen";

const Stack = createNativeStackNavigator();

export default function LessonNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="newWord" component={NewPhraseScreen} />
      <Stack.Screen name="reviewWord" component={ReviewPhraseScreen} />
      <Stack.Screen name="testWord" component={TestPhraseScreen} />
    </Stack.Navigator>
  );
}
