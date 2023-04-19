import React from "react";
import LearnWord from "./LearnWord";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

// Creates a string of tappable words that display more info.

function RenderLearnWord({ data, helpText = data.strippedWordArray }) {
  let wordId=undefined;
  try {
    
    if(data.wordData.wordId) {
  wordId = data.wordData.wordId
    }
  } catch (error) {
    console.log(error)
  }
  return data.learnWordArray.map((item, index) => {
    return (
      <>
        <LearnWord
          key={index}
          style={defaultStyles.learnWord}
          helpText={helpText[index]}
          pronunciation={data.helpTextArray[index]}
          wordId={wordId}
        >
          {item}
        </LearnWord>
        <AppText> </AppText>
      </>
    );
  });
}

export default RenderLearnWord;
