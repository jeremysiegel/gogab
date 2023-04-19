import React from "react";
import { StyleSheet } from "react-native";
import { Audio } from "expo-av";

import AppPopover from "./AppPopover";

// Creates a word that user can tap for more information (such as translation or pronunciation).

function LearnWord({ style, children, helpText, pronunciation, wordId }) {
  const [sound, setSound] = React.useState();
  
  const files = {
    W54: require("../assets/audio/it/W54.mp3")
  }

  async function playSound() {
    if (wordId) {

      const { sound } = await Audio.Sound.createAsync(
files[wordId]
        );
      setSound(sound);
  
      await sound.playAsync();
    }
  }

  React.useEffect(() => {
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
});

export default LearnWord;
