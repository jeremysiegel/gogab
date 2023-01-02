import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/AppText";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import { moderateScale } from "../../utility/scaler";
import instructionText from "../../config/instructionText";

function NewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const words = data.wordArray;

  const RenderPhrase = () => {
    return words.map((item, index) => {
      return (
        <AppText style={defaultStyles.practiceWord} key={index}>
          {item}{" "}
        </AppText>
      );
    });
  };

  const phrase = <RenderPhrase />;

  const instruction = instructionText.say;

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
      phrase={phrase}
    >
      <View style={styles.activityContainer}>
        <RenderLearnWord data={data} helpText={data.helpTextArray} />
      </View>
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignSelf: "center",
    marginTop: 100,
  },
  phraseContainer: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingStart: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  renderLearnWord: {
    fontSize: moderateScale(35),
  },
});

export default NewPhraseScreen;
