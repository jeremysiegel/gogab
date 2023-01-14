import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import getLessonData from "../../api/getLessonData";
import ChoiceBox from "../../components/ChoiceBox";

import QuizScreen from "./QuizScreen";

function MultipleChoiceScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const data = getLessonData.getLessonData(route.params.lessonId);

  const numItems = data.selections.length;

  const { height } = useWindowDimensions();

  const numColumns = height - 300 < numItems * 80 || numItems > 6 ? 2 : 1;

  const renderChoiceBox = (item) => {
    return (
      <ChoiceBox
        title={item.title}
        currentObjects={[selected]}
        onPress={() => {
          setAnswerIsCorrect(item.correct);
          setSelected(item.title);
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
      lessonId={route.params.lessonId}
      navigation={navigation}
      renderItem={renderChoiceBox}
      answerIsCorrect={answerIsCorrect}
      selected={selected}
      numColumns={numColumns}
    />
  );
}

export default MultipleChoiceScreen;
