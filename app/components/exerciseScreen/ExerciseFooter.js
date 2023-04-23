import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import CheckAnswerModal from "./CheckAnswerModal";
import LessonContext from "../../navigation/lessonContext";
import AuthContext from "../../navigation/authContext";

// Creates footer for the exercise screen.
function ExerciseFooter({
  navigation,
  data,
  answerIsCorrect: userAnswerable, // if there is a correct answer, it is userAnswerable
  modalVisible,
  setModalVisible,
  touched,
  skippable,
}) {
  const { lessonData } = useContext(LessonContext);
  const { country } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AppButton
        opacity={touched === false ? 70 : undefined}
        title={userAnswerable === undefined ? "Next" : "Check"}
        disabled={touched === false ? true : false}
        onPress={async () => {
          if (userAnswerable === undefined) {
            navigation.push(data.nextExerciseType, {
              exerciseId: data.nextExercise,
              lessonId: data.lessonId,
              lessonData: lessonData,
              country: country,
            });
          } else {
            setModalVisible(true);
          }
        }}
      />
      <CheckAnswerModal
        lessonData={lessonData}
        navigation={navigation}
        nextExercise={data.nextExercise}
        lessonId={data.lessonId}
        nextExerciseType={data.nextExerciseType}
        correctAnswer={userAnswerable}
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
