import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/AppText";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import instructionText from "../../config/instructionText";

function NewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const instruction = instructionText.say;

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
    >
      <View style={styles.container}>
        <View style={styles.phraseContainer}>
          <AppText style={defaultStyles.practiceWord}>{data.word}</AppText>
        </View>
        <View style={styles.activityContainer}>
          <RenderLearnWord data={data} helpText={data.helpTextArray} />
        </View>
      </View>
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignSelf: "center",
    marginTop: 42,
    marginHorizontal: 30,
  },
  phraseContainer: {
    marginTop: 22,

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 30,
  },
});

export default NewPhraseScreen;
