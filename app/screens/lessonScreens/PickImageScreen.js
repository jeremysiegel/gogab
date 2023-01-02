import React, { useState } from "react";

import QuizScreen from "./QuizScreen";
import ChoiceImage from "../../components/ChoiceImage";

function PickImageScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderChoiceImage = (item) => {
    return (
      <ChoiceImage
        item={item}
        selected={selected}
        onPress={() => {
          setAnswerIsCorrect(item.correct);
          setSelected(item.name);
        }}
      />
    );
  };

  return (
    <QuizScreen
      lessonId={route.params.lessonId}
      navigation={navigation}
      renderItem={renderChoiceImage}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={2}
    />
  );
}

export default PickImageScreen;
