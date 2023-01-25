import React, { useState } from "react";

import QuizScreen from "./QuizScreen";
import ChoiceImage from "../../components/ChoiceImage";
import getExerciseData from "../../api/getExerciseData";

// Creates a multiple choice quiz screen of ChoiceImages.

function PickImageScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const data = getExerciseData.getExerciseData(route.params);

  const renderChoiceImage = (item) => {
    return (
      <ChoiceImage
        item={item}
        title={data.reverse ? item.translation : item.word}
        selectedItem={selected}
        onPress={() => {
          item.correct
            ? setAnswerIsCorrect(item.correct)
            : setAnswerIsCorrect(false);
          setSelected(data.reverse ? item.translation : item.word);
        }}
      />
    );
  };

  return (
    <QuizScreen
      routeParams={route.params}
      navigation={navigation}
      renderItem={renderChoiceImage}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={2}
    />
  );
}

export default PickImageScreen;
