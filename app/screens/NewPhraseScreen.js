import React from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import LearnWord from "../components/LearnWord";
import Screen from "../components/Screen";
import sampleLesson from "../lessons/sampleLesson";

function NewWordScreen({ route, navigation }) {
  //const { lessonId } = route.params; //Need a getter here.

  const data = {
    word: "Hello",
    learnWord: "Hola",
    transliteration: "Ola",
  };

  const wordArray = data.word.split(" ");
  const learnWordArray = data.learnWord.split(" ");
  const transliterationArray = data.transliteration.split(" ");

  const RenderPhrase = () => {
    return wordArray.map((item, index) => {
      return (
        <AppText style={styles.wordText} key={index}>
          {item}{" "}
        </AppText>
      );
    });
  };

  const RenderLearnWord = () => {
    return learnWordArray.map((item, index) => {
      return (
        <LearnWord
          key={index}
          style={styles.learnWordText}
          translation={transliterationArray[index]}
        >
          {item}{" "}
        </LearnWord>
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
          <RenderLearnWord />
        </View>
      </View>
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

export default NewWordScreen;
