import React from "react";
import { StyleSheet } from "react-native";
import LearnWord from "./LearnWord";

function RenderLearnWord({ learnWords, helpText, style }) {
  return learnWords.map((item, index) => {
    return (
      <LearnWord key={index} style={style} translation={helpText[index]}>
        {item}{" "}
      </LearnWord>
    );
  });
}

const styles = StyleSheet.create({
  learnWordText: {
    //  fontSize: 40,
  },
});

export default RenderLearnWord;
