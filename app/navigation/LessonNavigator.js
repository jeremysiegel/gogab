import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MultipleChoiceScreen from "../screens/exerciseScreens/MultipleChoiceScreen";
import PickImageScreen from "../screens/exerciseScreens/PickImageScreen";
import NewPhraseScreen from "../screens/exerciseScreens/NewPhraseScreen";
import MatchingScreen from "../screens/exerciseScreens/MatchingScreen";
import SentenceBuilderScreen from "../screens/exerciseScreens/SentenceBuilderScreen";

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
      <Stack.Screen name="sentenceBuilder" component={SentenceBuilderScreen} />
    </Stack.Navigator>
  );
}
