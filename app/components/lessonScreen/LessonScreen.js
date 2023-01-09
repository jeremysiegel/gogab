import { View, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

import AppText from "../AppText";
import LessonHeader from "./LessonHeader";
import Screen from "../Screen";
import LessonFooter from "./LessonFooter";
import defaultStyles from "../../config/styles";

function LessonScreen({
  lessonData,
  instruction,
  children,
  navigation,
  instructionStyle,
  phrase,
  answerIsCorrect,
  touched,
  footer = true,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Screen>
        <LessonHeader
          currentIndex={lessonData.index}
          quizLength={lessonData.quizLength}
        />
        <View style={styles.textContainer}>
          <AppText style={[defaultStyles.instructionText, instructionStyle]}>
            {instruction}
          </AppText>
          <View style={styles.phraseContainer}>{phrase}</View>
        </View>
        <View style={styles.children}>{children}</View>

        {footer && (
          <LessonFooter
            touched={touched}
            navigation={navigation}
            data={lessonData}
            answerIsCorrect={answerIsCorrect}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
  },
  phraseContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default LessonScreen;
