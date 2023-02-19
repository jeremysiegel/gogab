import React from "react";
import { StyleSheet } from "react-native";

import ChoiceBox from "./ChoiceBox";
function RenderChoiceBoxes({
  data,
  title,
  selected,
  setSelected,
  setAnswerIsCorrect,
  numColumns,
}) {
  return (
    <ChoiceBox
      title={title}
      currentObjects={[selected]}
      onPress={() => {
        data.correct
          ? setAnswerIsCorrect(data.correct)
          : setAnswerIsCorrect(false);
        setSelected(title);
      }}
      style={
        numColumns === 2
          ? { width: "45%", marginHorizontal: 7, maxWidth: 300 }
          : null
      }
    />
  );
}

export default RenderChoiceBoxes;
