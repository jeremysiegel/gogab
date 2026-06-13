import React, { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";

import playSound from "../utility/playSound";

import AppPopover from "./AppPopover";
import colors from "../config/colors";

// Creates a word that user can tap for more information (such as translation or pronunciation).

function LearnWord({ style, children, helpText, pronunciation, wordData }) {
  const [player, setPlayer] = useState();
  let audio = "";
  try {
    audio = wordData.audio;
  } catch (error) {
    console.log(error);
  }

  function handlePress() {
    if (audio) {
      setPlayer(playSound(wordData.audio));
    }
  }

  useEffect(() => {
    return player
      ? () => {
          player.remove();
        }
      : undefined;
  }, [player]);

  return (
    <AppPopover
      onOpen={handlePress}
      style={[styles.text, style]}
      underlineStyle={styles.underline}
      displayText={children}
      popoverText={pronunciation}
      secondPopoverText={helpText}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    textTransform: "lowercase",
    textDecorationLine: Platform.OS === "ios" ? "underline" : undefined,
    textDecorationStyle: "dotted",
    textDecorationColor: colors.secondary + 80,
  },
  underline: {
    borderBottomWidth: Platform.OS === "android" ? 1 : undefined,
    borderBottomColor: colors.secondary + 80,
    borderStyle: Platform.OS === "android" ? "dotted" : undefined,
  },
});

export default LearnWord;
