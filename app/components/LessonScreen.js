import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import AppText from "./AppText";
import LessonHeader from "./LessonHeader";
import Screen from "./Screen";
import { moderateScale } from "../utility/scaler";
import colors from "../config/colors";

function LessonScreen({
  lessonData,
  instruction,
  children,
  navigation,
  instructionStyle,
  phrase,
}) {
  const data = lessonData;

  return (
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
        <Button
          style={{ justifyContent: "flex-end" }}
          title="Next"
          onPress={() =>
            navigation.push(data.nextLessonType, { lessonId: data.nextLesson })
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
