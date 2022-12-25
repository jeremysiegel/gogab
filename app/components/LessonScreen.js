import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import AppText from "./AppText";
import LessonHeader from "./LessonHeader";
import Screen from "./Screen";
import { moderateScale } from "../utility/scaler";
import colors from "../config/colors";
import AppButton from "./AppButton";
import CheckAnswerModal from "./CheckAnswerModal";

function LessonScreen({
  lessonData,
  instruction,
  children,
  navigation,
  instructionStyle,
  phrase,
  answerIsCorrect,
}) {
  const data = lessonData;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Screen>
        <LessonHeader currentIndex={data.index} quizLength={data.quizLength} />
        <View style={styles.container}>
          <AppText style={[styles.instructionText, instructionStyle]}>
            {instruction}
          </AppText>
          <View style={styles.phraseContainer}>{phrase}</View>
          <View style={styles.children}>
            <View>{children}</View>
          </View>
        </View>
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
      </Screen>
      <CheckAnswerModal
        navigation={navigation}
        nextLesson={data.nextLesson}
        nextLessonType={data.nextLessonType}
        correctAnswer={answerIsCorrect}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  container: {
    margin: 20,
    flex: 1,
  },
  children: {
    flex: 1,
    justifyContent: "center",
  },
  phraseContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  instructionText: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
});

export default LessonScreen;
