import React from "react";
import { StyleSheet } from "react-native";

import AppPopover from "./AppPopover";

// Creates a word that user can tap for more information (such as translation or pronunciation).

function LearnWord({ style, children, helpText }) {
  return (
    <AppPopover
      style={[styles.text, style]}
      displayText={children}
      popoverText={helpText}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    textTransform: "lowercase",
  },
});

export default LearnWord;
