import React from "react";
import LearnWord from "./LearnWord";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

// Creates a string of tappable words that display more info.

function RenderLearnWord({ data, helpText = data.strippedWordArray }) {
  return data.learnWordArray.map((item, index) => {
    let wordData = {};
    if (data.wordData) {
      wordData = data.wordData;
    } else {
      data.selections.forEach((selection) => {
        if (selection.word === helpText[index]) {
          wordData = selection;
        }
      });
    }
    return (
      <>
        <LearnWord
          key={index}
          style={defaultStyles.learnWord}
          helpText={helpText[index]}
          pronunciation={data.helpTextArray[index]}
          wordData={wordData}
        >
          {item}
        </LearnWord>
        <AppText> </AppText>
      </>
    );
  });
}

export default RenderLearnWord;
