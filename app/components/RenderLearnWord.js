import React from "react";
import LearnWord from "./LearnWord";
import defaultStyles from "../config/styles";

function RenderLearnWord({ data }) {
  return data.learnWordArray.map((item, index) => {
    return (
      <LearnWord
        key={index}
        style={defaultStyles.learnWord}
        translation={data.helpTextArray[index]}
      >
        {item}{" "}
      </LearnWord>
    );
  });
}

export default RenderLearnWord;
