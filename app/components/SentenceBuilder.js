import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import DuoDragDrop, {
  Word,
  Lines,
  Placeholder,
  DuoDragDropRef,
} from "@jamsch/react-native-duo-drag-drop";
import colors from "../config/colors";
import shuffle from "../utility/shuffle";

function SentenceBuilder({ data, setComplete }) {
  const bankArray = data.wordArray.concat(data.extraArray);
  const [shuffledData, setShuffledData] = useState();

  useEffect(() => {
    const shuffled = shuffle(bankArray);
    setShuffledData(shuffled);
  }, []);

  const shuffledArray = shuffle(bankArray);

  const ref = useRef(DuoDragDropRef);

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  const checkComplete = () => {
    const answered = ref.current?.getAnsweredWords();
    setComplete(arrayEquals(answered, data.wordArray));
  };

  if (shuffledData === undefined) {
    return <></>;
  } else {
    return (
      <DuoDragDrop
        ref={ref}
        words={shuffledData}
        wordBankOffsetY={10}
        onDrop={checkComplete}
        renderWord={() => (
          <Word
            containerStyle={{
              backgroundColor: colors.selected,
              borderColor: colors.selected,
            }}
            textStyle={{
              color: colors.light,
            }}
          />
        )}
        renderLines={(props) => (
          <Lines
            numLines={0}
            containerStyle={{
              backgroundColor: "transparent",
            }}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 20, flex: 1 },
});

export default SentenceBuilder;
