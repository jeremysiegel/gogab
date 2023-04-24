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
// TODO: add button to replay phrase

function NewPhraseScreen({ route, navigation }) {
  const data = getExerciseData.getExerciseData(route.params);
  const instruction = instructionText.say;

  let audioFiles = "";

  try {
    audioFiles = data.phraseData.audio;
  } catch (error) {
    console.log(error);
  }
  console.log(data);
  const RenderPhrase = () => {
    const phraseArray = stripArray({
      arrayToStrip: data.phraseData.phraseMain.order.split(" "),
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
      audio={audioFiles}
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
    alignItems: "center",
    justifyContent: "center",
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
