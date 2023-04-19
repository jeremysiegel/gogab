import React from "react";
import LearnWord from "./LearnWord";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

// Creates a string of tappable words that display more info.

function RenderLearnWord({ data, helpText = data.strippedWordArray }) {
  console.log(data.wordData);
  return data.learnWordArray.map((item, index) => {
    return (
      <>
        <LearnWord
          key={index}
          style={defaultStyles.learnWord}
          helpText={helpText[index]}
          pronunciation={data.helpTextArray[index]}
        >
          {item}
        </LearnWord>
        <AppText> </AppText>
      </>
    );
  });
}

export default RenderLearnWord;
