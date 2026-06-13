import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import playSound from "../../utility/playSound";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

// A single dictionary entry: English, translation, pronunciation, and a tappable speaker.

function DictionaryRow({ english, translation, pronunciation, audio }) {
  const [player, setPlayer] = useState();

  function handlePlay() {
    if (audio) {
      setPlayer(playSound(audio));
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
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <AppText style={styles.translation}>{translation}</AppText>
        {!!pronunciation && (
          <AppText style={styles.pronunciation}>{pronunciation}</AppText>
        )}
        <AppText style={styles.english}>{english}</AppText>
      </View>
      <Pressable
        onPress={handlePlay}
        disabled={!audio}
        hitSlop={10}
        style={styles.speaker}
      >
        <Ionicons
          name="volume-high"
          size={26}
          color={audio ? colors.primary : colors.grey}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  translation: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.darkText,
  },
  pronunciation: {
    fontStyle: "italic",
    color: colors.medium,
    marginTop: 2,
  },
  english: {
    color: colors.medium,
    marginTop: 2,
  },
  speaker: {
    padding: 6,
  },
});

export default DictionaryRow;
