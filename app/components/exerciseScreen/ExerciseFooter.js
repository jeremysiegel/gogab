import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import CheckAnswerModal from "./CheckAnswerModal";

function ExerciseFooter({
  navigation,
  data,
  answerIsCorrect,
  modalVisible,
  setModalVisible,
  touched,
  skippable,
}) {
  return (
    <View style={styles.container}>
      <AppButton
        opacity={touched === false ? 70 : undefined}
        title={answerIsCorrect === undefined ? "Next" : "Check"}
        disabled={touched === false ? true : false}
        onPress={() => {
          if (answerIsCorrect === undefined) {
            navigation.push(data.nextExerciseType, {
              exerciseId: data.nextExercise,
            });
          } else {
            setModalVisible(true);
          }
        }}
      />
      <CheckAnswerModal
        data={data}
        navigation={navigation}
        nextExercise={data.nextExercise}
        nextExerciseType={data.nextExerciseType}
        correctAnswer={answerIsCorrect}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        skippable={skippable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
});

export default ExerciseFooter;
