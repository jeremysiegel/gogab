import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import getExerciseData from "../../api/getExerciseData";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import instructionText from "../../config/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";
import SentenceBuilder from "../../components/SentenceBuilder";

// Creates a user-interactive sentence builder screen.

function SentenceBuilderScreen({ route, navigation }) {
  const data = getExerciseData.getExerciseData({ ...route.params });
  const instruction = instructionText[data.screenType];
  const [complete, setComplete] = useState(false);

  const phrase = <RenderLearnWord data={data} />;

  return (
    <ExerciseScreen
      exerciseData={data}
      instruction={instruction}
      navigation={navigation}
      touched={true}
      answerIsCorrect={complete}
      phrase={phrase}
      skippable
    >
      <View style={styles.container}>
        <SentenceBuilder data={data} setComplete={setComplete} />
      </View>
    </ExerciseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default SentenceBuilderScreen;
