import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import getExerciseData from "../../api/getExerciseData";
import ChoiceBox from "../../components/ChoiceBox";

import QuizScreen from "./QuizScreen";

function MultipleChoiceScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const data = getExerciseData.getExerciseData({
    ...route.params,
    multipleChoice: true,
  });
  const numItems = data.selections.length;

  const { height } = useWindowDimensions();

  const numColumns = height - 300 < numItems * 80 || numItems > 6 ? 2 : 1;

  const renderChoiceBox = (item) => {
    return (
      <ChoiceBox
        title={data.reverse ? item.translation : item.word}
        currentObjects={[selected]}
        onPress={() => {
          item.correct
            ? setAnswerIsCorrect(item.correct)
            : setAnswerIsCorrect(false);
          setSelected(data.reverse ? item.translation : item.word);
        }}
        style={
          numColumns === 2
            ? { width: "45%", marginHorizontal: 7, maxWidth: 300 }
            : null
        }
      />
    );
  };

  return (
    <QuizScreen
      routeParams={route.params}
      navigation={navigation}
      renderItem={renderChoiceBox}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={numColumns}
    />
  );
}

export default MultipleChoiceScreen;
