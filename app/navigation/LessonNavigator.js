import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MultipleChoiceScreen from "../screens/exerciseScreens/MultipleChoiceScreen";
import PickImageScreen from "../screens/exerciseScreens/PickImageScreen";
import NewPhraseScreen from "../screens/exerciseScreens/NewPhraseScreen";
import MatchingScreen from "../screens/exerciseScreens/MatchingScreen";
import SentenceBuilderScreen from "../screens/exerciseScreens/SentenceBuilderScreen";
import PromptScreen from "../screens/exerciseScreens/PromptScreen";
import TipScreen from "../screens/exerciseScreens/TipScreen";
import SectionScreen from "../screens/SectionScreen";
import LessonEndScreen from "../screens/LessonEndScreen";
import AppNavigator from "./AppNavigator";
import LessonContext from "./lessonContext";
import AppHeader from "../components/AppHeader";
const Stack = createNativeStackNavigator();

export default function LessonNavigator() {
  const [lessonData, setLessonData] = useState();
  const [lesson, setLesson] = useState();
  const [section, setSection] = useState();
  const [level, setLevel] = useState();
  return (
    <LessonContext.Provider
      value={{
        lessonData,
        setLessonData,
        section,
        setSection,
        lesson,
        setLesson,
        level,
        setLevel,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="homeTab" component={AppNavigator} />
        <Stack.Screen
          name="section"
          component={SectionScreen}
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />

        <Stack.Screen name="end" component={LessonEndScreen} />
        <Stack.Screen name="newWord" component={NewPhraseScreen} />
        <Stack.Screen name="pickImage" component={PickImageScreen} />
        <Stack.Screen name="multipleChoice" component={MultipleChoiceScreen} />
        <Stack.Screen name="matching" component={MatchingScreen} />
        <Stack.Screen
          name="sentenceBuilder"
          component={SentenceBuilderScreen}
        />
        <Stack.Screen name="prompt" component={PromptScreen} />
        <Stack.Screen name="tip" component={TipScreen} />
      </Stack.Navigator>
    </LessonContext.Provider>
  );
}
