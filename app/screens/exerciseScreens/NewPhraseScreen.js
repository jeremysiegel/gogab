import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/AppText";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import getExerciseData from "../../api/getExerciseData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import instructionText from "../../lessons/instructionText";
import stripArray from "../../utility/stripArray";

// Creates screen to learn a new word or phrase.
// Displays word and translation.
// TODO: add audio.

function NewPhraseScreen({ route, navigation }) {
  const data = getExerciseData.getExerciseData(route.params);
  const instruction = instructionText.say;

  const RenderPhrase = () => {
    const phraseArray = stripArray({
      arrayToStrip: data.wordArray,
      removeSpecialCharacters: false,
      removeUnderscore: true,
    });
    return phraseArray.map((item) => {
      return <AppText style={defaultStyles.practiceWord}>{item} </AppText>;
    });
  };

  return (
    <ExerciseScreen
      instruction={instruction}
      exerciseData={data}
      navigation={navigation}
    >
      <View style={styles.container}>
        <View style={styles.phraseContainer}>
          <RenderPhrase />
        </View>
        <View style={styles.activityContainer}>
          <RenderLearnWord data={data} />
        </View>
      </View>
    </ExerciseScreen>
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
