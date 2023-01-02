import React from "react";
import { View, StyleSheet } from "react-native";
import LearnWord from "../components/LearnWord";
import Duolingo from "../Duolingo";

function SandboxScreen(props) {
  return <Duolingo />;
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
