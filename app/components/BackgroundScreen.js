import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";

function BackgroundScreen({ style, children }) {
  return <Screen style={[styles.container, style]}>{children}</Screen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 0,
  },
});

export default BackgroundScreen;
