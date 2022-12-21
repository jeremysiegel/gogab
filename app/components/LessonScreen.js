import React from "react";
import { View, StyleSheet, Button } from "react-native";
import AppText from "./AppText";
import Screen from "./Screen";
import colors from "../config/colors";

function LessonScreen({
  phrase,
  lessonData,
  instruction,
  children,
  navigation,
}) {
  const data = lessonData;

  return (
    <Screen>
      <AppText style={styles.instructionText}>{instruction}</AppText>
      <View style={styles.phraseContainer}>{phrase}</View>
      <View style={styles.view}>{children}</View>
      <Button
        style={{ justifyContent: "flex-end" }}
        title="Next"
        onPress={() =>
          navigation.push(data.nextLessonType, { lessonId: data.nextLesson })
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  phraseContainer: {
    marginTop: 12,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  instructionText: {
    fontSize: 24,
    color: colors.medium,
  },
});

export default LessonScreen;
