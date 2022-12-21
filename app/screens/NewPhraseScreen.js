import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import LessonScreen from "../components/LessonScreen";
import getLessonData from "../api/getLessonData";
import RenderLearnWord from "../utility/RenderLearnWord";

function NewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;
  const words = data.wordArray;

  const RenderPhrase = () => {
    return words.map((item, index) => {
      return (
        <AppText style={styles.wordText} key={index}>
          {item}{" "}
        </AppText>
      );
    });
  };

  const phrase = <RenderPhrase />;

  const instruction = "Practice saying";

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
      phrase={phrase}
    >
      <View style={styles.activityContainer}>
        <RenderLearnWord learnWords={learnWords} helpText={helpText} />
      </View>
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wordText: {
    fontSize: 36,
  },
});

export default NewPhraseScreen;
