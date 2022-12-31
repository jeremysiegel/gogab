import React from "react";
import LearnWord from "./LearnWord";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

function RenderLearnWord({ data }) {
  return data.learnWordArray.map((item, index) => {
    return (
      <>
        <LearnWord
          key={index}
          style={defaultStyles.learnWord}
          translation={data.helpTextArray[index]}
        >
          {item}
        </LearnWord>
        <AppText> </AppText>
      </>
    );
  });
}

export default RenderLearnWord;
