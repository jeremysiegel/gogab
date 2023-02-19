import { View, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";

import AppText from "../AppText";
import ExerciseHeader from "./ExerciseHeader";
import Screen from "../Screen";
import ExerciseFooter from "./ExerciseFooter";
import defaultStyles from "../../config/styles";
import BackButtonExitHandler from "../../utility/backHandler";

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
}) {
  BackButtonExitHandler();

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
          <View style={styles.textContainer}>
            {instruction && (
              <AppText
                style={[defaultStyles.instructionText, instructionStyle]}
              >
                {instruction}
              </AppText>
            )}
            {phrase && <View style={styles.phraseContainer}>{phrase}</View>}
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
    margin: 20,
  },
  children: {
    flex: 1,
    justifyContent: "space-around",
  },
  phraseContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ExerciseScreen;
