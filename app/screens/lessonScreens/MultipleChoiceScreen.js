import React, { useState } from "react";
import ChoiceBox from "../../components/ChoiceBox";

import QuizScreen from "./QuizScreen";

function MultipleChoiceScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderChoiceBox = (item) => {
    return (
      <ChoiceBox
        title={item.title}
        currentObjects={[selected]}
        onPress={() => {
          setAnswerIsCorrect(item.correct);
          setSelected(item.title);
        }}
      />
    );
  };

  return (
    <QuizScreen
      lessonId={route.params.lessonId}
      navigation={navigation}
      renderItem={renderChoiceBox}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={1}
    />
  );
}

export default MultipleChoiceScreen;
