import React from "react";
import { View, StyleSheet } from "react-native";

import AppButton from "../AppButton";
import CheckAnswerModal from "./CheckAnswerModal";

function LessonFooter({
  navigation,
  data,
  answerIsCorrect,
  modalVisible,
  setModalVisible,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AppButton
          title={answerIsCorrect === undefined ? "Next" : "Check"}
          onPress={() => {
            if (answerIsCorrect === undefined) {
              navigation.push(data.nextLessonType, {
                lessonId: data.nextLesson,
              });
            } else {
              setModalVisible(true);
            }
          }}
        />
      </View>
      <CheckAnswerModal
        navigation={navigation}
        nextLesson={data.nextLesson}
        nextLessonType={data.nextLessonType}
        correctAnswer={answerIsCorrect}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default LessonFooter;
