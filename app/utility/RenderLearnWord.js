import React from "react";
import { StyleSheet } from "react-native";
import LearnWord from "../components/LearnWord";

function RenderLearnWord({ learnWords, helpText }) {
  return learnWords.map((item, index) => {
    return (
      <LearnWord
        key={index}
        style={styles.learnWordText}
        translation={helpText[index]}
      >
        {item}{" "}
      </LearnWord>
    );
  });
}

const styles = StyleSheet.create({
  learnWordText: {
    fontSize: 40,
  },
});

export default RenderLearnWord;
