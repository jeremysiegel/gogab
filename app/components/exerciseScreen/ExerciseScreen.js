import { View, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

import AppText from "../AppText";
import ExerciseHeader from "./ExerciseHeader";
import Screen from "../Screen";
import ExerciseFooter from "./ExerciseFooter";
import defaultStyles from "../../config/styles";
import BackButtonExitHandler from "../../utility/backHandler";
import { scale, verticalScale, moderateScale } from "../../utility/scaler";

// Generates container screen for exercises.
// Displays in order of instruction, phrase, then exercise.

function ExerciseScreen({
  exerciseData,
  instruction,
  children,
  navigation,
  instructionStyle,
  phrase,
  answerIsCorrect,
  touched,
  footer = true,
  skippable,
  audio,
}) {
  BackButtonExitHandler();

  const [sound, setSound] = useState();

  async function playSound() {
    if (audio) {
      try {
        const { sound } = await Audio.Sound.createAsync(audio);
        setSound(sound);

        await sound.playAsync();
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);

  const { height, width } = useWindowDimensions();

  const isTablet = height / width < 1.6;

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Screen>
        <ExerciseHeader
          navigation={navigation}
          currentIndex={exerciseData.index}
          quizLength={exerciseData.quizLength}
        />
        {(instruction || phrase) && (
          <View
            style={[
              { marginLeft: isTablet ? 0.1 * width : 30 },
              styles.textContainer,
            ]}
          >
            {instruction && (
              <AppText
                style={[defaultStyles.instructionText, instructionStyle]}
              >
                {instruction}
              </AppText>
            )}
            {phrase && (
              <View
                style={[
                  {
                    marginLeft: isTablet ? 30 : 10,
                    marginTop: isTablet ? 30 : 20,
                  },
                  styles.phraseContainer,
                ]}
              >
                {phrase}
              </View>
            )}
          </View>
        )}
        <View style={styles.children}>{children}</View>

        {footer && (
          <ExerciseFooter
            touched={touched}
            navigation={navigation}
            data={exerciseData}
            answerIsCorrect={answerIsCorrect}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            skippable={skippable}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  textContainer: {
    margin: scale(10),
  },
  children: {
    flex: 1,
    justifyContent: "space-around",
  },
  phraseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ExerciseScreen;
