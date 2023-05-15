import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import AppText from "../../components/AppText";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import getExerciseData from "../../api/getExerciseData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import instructionText from "../../lessons/instructionText";
import stripArray from "../../utility/stripArray";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import { Audio } from "expo-av";
import { scale } from "../../utility/scaler";
// Creates screen to learn a new word or phrase.
// Displays word and translation.
// TODO: add button to replay phrase

function NewPhraseScreen({ route, navigation }) {
  const { width } = Dimensions.get("screen");
  const data = getExerciseData.getExerciseData(route.params);
  const instruction = instructionText.say;

  let audioFiles = "";

  try {
    audioFiles = data.phraseData.phraseTranslation.audio;
  } catch (error) {
    console.log(error);
  }

  const playSound = async (soundFilePath) => {
    // load the sound file
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(soundFilePath);
      // play the sound
      await soundObject.playAsync();
    } catch (error) {
      console.log("Failed to load the sound", error);
    }
  };

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
        <View style={styles.replayContainer}>
          <AppButton
            onPress={async () => {
              await playSound(audioFiles);
            }}
            color={colors.secondary}
            buttonBorderColor={colors.secondary}
            style={styles.button}
          >
            <Icon
              name={"volume-medium-outline"}
              iconType={"Ionicons"}
              backgroundColor={colors.secondary}
              size={40}
            />
          </AppButton>
        </View>
      </View>
    </ExerciseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 600,
    alignSelf: "center",
  },
  replayContainer: {
    alignSelf: "center",
    flex: 1,
    marginTop: 62,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 42,
    marginHorizontal: 30,
  },
  phraseContainer: {
    marginTop: scale(22),
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default NewPhraseScreen;
