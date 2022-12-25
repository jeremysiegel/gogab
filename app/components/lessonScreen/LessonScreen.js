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
          <AppText style={[defaultStyles.instructionText, instructionStyle]}>
            {instruction}
          </AppText>
          <View style={styles.phraseContainer}>{phrase}</View>
          <View style={styles.children}>
            <View>{children}</View>
          </View>
        </View>

        <LessonFooter
          touched={touched}
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
});

export default LessonScreen;
