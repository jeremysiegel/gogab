import React from "react";
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

export default RenderLearnWord;
