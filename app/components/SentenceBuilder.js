import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import DuoDragDrop, {
  Word,
  Lines,
  DuoDragDropRef, // Don't erase this.
} from "@jamsch/react-native-duo-drag-drop";
import colors from "../config/colors";
import shuffle from "../utility/shuffle";
import { moderateScale } from "../utility/scaler";
import arrayEquals from "../utility/arrayEquals";
import { Audio } from "expo-av";

// Creates a UI sentence builder element.

function SentenceBuilder({ data, setComplete }) {
  const [shuffledData, setShuffledData] = useState();
  const [sound, setSound] = useState();

  async function playSound(audio) {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const ref = useRef(DuoDragDropRef);
  useEffect(() => {
    const shuffled = shuffle(data.wordArray);
    setShuffledData(shuffled);
  }, []);

  // Tests if the user inputed array of words equals the original wordArray.
  // Returns correct in two cases:
  // 1. User correctly puts words in order in new languague.
  // 2. User correctly puts words in order in original language.
  const checkComplete = () => {
    const answered = ref.current?.getAnsweredWords();
    const correct =
      arrayEquals(answered, data.wordArray) ||
      arrayEquals(answered, data.phraseData.phraseMainTranslation);
    setComplete(correct);
  };

  if (shuffledData === undefined) {
    return <></>;
  } else {
    const playAudio = (index) => {
      const word = shuffledData[index].toLowerCase();
      let audio = "";
      data.selections.forEach((selection) => {
        if (selection.translation.toLowerCase() === word) {
          audio = selection.audio;
        }
      });
      if (audio) {
        playSound(audio);
      }
    };

    return (
      <DuoDragDrop
        ref={ref}
        words={shuffledData}
        wordBankOffsetY={10}
        onDrop={(event) => {
          checkComplete();
          playAudio(event.index);
        }}
        renderWord={() => (
          <Word containerStyle={styles.wordBox} textStyle={styles.text} />
        )}
        renderLines={(props) => (
          <Lines
            {...props}
            lineStyle={{
              borderWidth: 0,
              borderBottomWidth: 0,
              borderBottomColor: "transparent",
            }}
            renderTopLine={false}
            containerStyle={styles.lineBox}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  lineBox: {
    backgroundColor: colors.selected + "30",
    borderRadius: 4,
  },
  wordBox: {
    backgroundColor: colors.selected,
    borderColor: colors.selected,
  },
  text: {
    color: colors.light,
    fontSize: moderateScale(19),
    marginBottom: 2,
  },
});

export default SentenceBuilder;
