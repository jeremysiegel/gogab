import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MultipleChoiceScreen from "../screens/exerciseScreens/MultipleChoiceScreen";
import PickImageScreen from "../screens/exerciseScreens/PickImageScreen";
import NewPhraseScreen from "../screens/exerciseScreens/NewPhraseScreen";
import MatchingScreen from "../screens/exerciseScreens/MatchingScreen";
import SentenceBuilderScreen from "../screens/exerciseScreens/SentenceBuilderScreen";
import PromptScreen from "../screens/exerciseScreens/PromptScreen";
import TipScreen from "../screens/exerciseScreens/TipScreen";
import ReviewScreen from "../screens/exerciseScreens/ReviewScreen";
import SectionScreen from "../screens/SectionScreen";

const Stack = createNativeStackNavigator();

export default function LessonNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen
        name="section"
        component={SectionScreen}
        options={{ headerShown: true, headerTitle: "Home" }}
      />

      <Stack.Screen name="newWord" component={NewPhraseScreen} />
      <Stack.Screen name="review" component={ReviewScreen} />
      <Stack.Screen name="pickImage" component={PickImageScreen} />
      <Stack.Screen name="multipleChoice" component={MultipleChoiceScreen} />
      <Stack.Screen name="matching" component={MatchingScreen} />
      <Stack.Screen name="sentenceBuilder" component={SentenceBuilderScreen} />
      <Stack.Screen name="prompt" component={PromptScreen} />
      <Stack.Screen name="tip" component={TipScreen} />
    </Stack.Navigator>
  );
}
