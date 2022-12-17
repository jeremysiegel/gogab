import React from "react";
import { View, StyleSheet, Button } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import LearnWord from "../components/LearnWord";
import Screen from "../components/Screen";
import getLessonData from "../api/getLessonData";
import RenderLearnWord from "../utility/RenderLearnWord";

function NewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const words = data.wordArray;
  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;

  const RenderPhrase = () => {
    return words.map((item, index) => {
      return (
        <AppText style={styles.wordText} key={index}>
          {item}{" "}
        </AppText>
      );
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.instructionText}>Practice saying</AppText>
        <View style={styles.wordContainer}>
          <RenderPhrase />
        </View>
        <View style={styles.phraseContainer}>
          <RenderLearnWord learnWords={learnWords} helpText={helpText} />
        </View>
      </View>
      <Button
        title="Next"
        onPress={() =>
          navigation.push("reviewWord", { lessonId: data.nextLesson })
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  phraseContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wordContainer: {
    marginTop: 12,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  instructionText: {
    fontSize: 24,
    color: colors.medium,
  },
  wordText: {
    fontSize: 36,
  },
  learnWordText: {
    fontSize: 40,
  },
});

export default NewPhraseScreen;
