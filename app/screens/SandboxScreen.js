import React from "react";
import { View, StyleSheet } from "react-native";
import LearnWord from "../components/LearnWord";

function SandboxScreen(props) {
  return (
    <View style={styles.container}>
      <LearnWord style={styles.item} translation={"bathroom"}>
        bano
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
  item: {
    color: "red",
    backgroundColor: "blue",
    fontSize: 50,
  },
});

export default SandboxScreen;
