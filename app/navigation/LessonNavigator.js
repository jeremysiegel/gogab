import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MultipleChoiceScreen from "../screens/lessonScreens/MultipleChoiceScreen";
import PickImageScreen from "../screens/lessonScreens/PickImageScreen";
import NewPhraseScreen from "../screens/lessonScreens/NewPhraseScreen";
import MatchingScreen from "../screens/lessonScreens/MatchingScreen";

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
      <Stack.Screen name="pickImage" component={PickImageScreen} />
      <Stack.Screen name="multipleChoice" component={MultipleChoiceScreen} />
      <Stack.Screen name="matching" component={MatchingScreen} />
    </Stack.Navigator>
  );
}
