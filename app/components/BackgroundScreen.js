import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";

function BackgroundScreen({ children }) {
  return <Screen style={styles.container}>{children}</Screen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundBlue,
    paddingTop: 0,
  },
});

export default BackgroundScreen;
