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
  touched,
}) {
  return (
    <View style={styles.container}>
      <AppButton
        opacity={touched === false ? 70 : undefined}
        title={answerIsCorrect === undefined ? "Next" : "Check"}
        disabled={touched === false ? true : false}
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
      <CheckAnswerModal
        data={data}
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
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default LessonFooter;
