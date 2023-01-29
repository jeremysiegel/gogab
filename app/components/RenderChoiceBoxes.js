import React from "react";
import { View, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {},
});

export default RenderChoiceBoxes;
