import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import LearnWord from "../components/LearnWord";

function NewWordScreen(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.practiceText}>Practice saying</AppText>
      <AppText style={styles.linebreak1}></AppText>
      <AppText style={styles.wordText}>Bathroom</AppText>
      <AppText style={styles.linebreak2}></AppText>
      <LearnWord style={styles.learnWordText} translation={"banyo"}>
        Baño
      </LearnWord>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  practiceText: {
    fontSize: 24,
    color: colors.medium,
  },
  wordText: {
    fontSize: 36,
  },
  learnWordText: {
    fontSize: 40,
  },
  linebreak1: {
    fontSize: 10,
  },
  linebreak2: {
    fontSize: 24,
  },
});

export default NewWordScreen;
