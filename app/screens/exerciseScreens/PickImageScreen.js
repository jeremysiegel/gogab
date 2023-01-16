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
        selectedItem={selected}
        onPress={() => {
          item.correct
            ? setAnswerIsCorrect(item.correct)
            : setAnswerIsCorrect(false);
          setSelected(item.word);
        }}
      />
    );
  };

  return (
    <QuizScreen
      exerciseId={route.params.exerciseId}
      navigation={navigation}
      renderItem={renderChoiceImage}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={2}
    />
  );
}

export default PickImageScreen;
