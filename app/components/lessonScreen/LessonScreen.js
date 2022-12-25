import { View, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import AppText from "../AppText";
import LessonHeader from "./LessonHeader";
import Screen from "../Screen";
import { moderateScale } from "../../utility/scaler";
import AppButton from "../AppButton";
import CheckAnswerModal from "./CheckAnswerModal";
import LessonFooter from "./LessonFooter";

function LessonScreen({
  lessonData,
  instruction,
  children,
  navigation,
  instructionStyle,
  phrase,
  answerIsCorrect,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Screen>
        <LessonHeader
          currentIndex={lessonData.index}
          quizLength={lessonData.quizLength}
        />
        <View style={styles.container}>
          <AppText style={[styles.instructionText, instructionStyle]}>
            {instruction}
          </AppText>
          <View style={styles.phraseContainer}>{phrase}</View>
          <View style={styles.children}>
            <View>{children}</View>
          </View>
        </View>

        <LessonFooter
          navigation={navigation}
          data={lessonData}
          answerIsCorrect={answerIsCorrect}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Screen>
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