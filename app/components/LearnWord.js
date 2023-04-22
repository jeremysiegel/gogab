import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Audio } from "expo-av";

import AppPopover from "./AppPopover";
import colors from "../config/colors";

// Creates a word that user can tap for more information (such as translation or pronunciation).

function LearnWord({ style, children, helpText, pronunciation, wordData }) {
  const [sound, setSound] = useState();
  let audio = "";
  try {
    audio = wordData.audio;
  } catch (error) {
    console.log(error);
  }

  async function playSound() {
    if (audio) {
      const { sound } = await Audio.Sound.createAsync(wordData.audio);
      setSound(sound);

      await sound.playAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <AppPopover
      onOpen={playSound}
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
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + 80,
    borderStyle: "dotted",
  },
});

export default LearnWord;
