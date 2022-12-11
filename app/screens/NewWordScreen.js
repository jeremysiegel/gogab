import React from "react";
import { View, StyleSheet, Button } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import LearnWord from "../components/LearnWord";
import Screen from "../components/Screen";

function NewWordScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.instructionText}>Practice saying</AppText>
        <AppText style={styles.linebreak1}></AppText>
        <AppText style={styles.wordText}>Bathroom</AppText>
        <AppText style={styles.linebreak2}></AppText>
        <LearnWord style={styles.learnWordText} translation={"banyo"}>
          Baño
        </LearnWord>
        <Button
          title="Next"
          onPress={() => navigation.navigate("reviewWord")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  instructionText: {
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
    fontSize: 7,
  },
  linebreak2: {
    fontSize: 24,
  },
});

export default NewWordScreen;
