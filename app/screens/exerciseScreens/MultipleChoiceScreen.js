import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import getExerciseData from "../../api/getExerciseData";
import RenderChoiceBoxes from "../../components/RenderChoiceBoxes";
import instructionText from "../../lessons/instructionText";
import QuizScreen from "./QuizScreen";
import RenderLearnWord from "../../components/RenderLearnWord";

// Creates a multiple choice quiz screen of ChoiceBoxes.

function MultipleChoiceScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState();
  const [numItems, setNumItems] = useState();

  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData({
      ...route.params,
      multipleChoice: true,
    });
    setData(setUpData);
    setNumItems(setUpData.selections.length);
  }, []);
  const { height } = useWindowDimensions();

  const numColumns = height - 300 < numItems * 80 || numItems > 6 ? 2 : 1;
  const instruction = instructionText.multipleChoice;
  const phrase = <RenderLearnWord data={data} />;

  if (!data) {
    return <></>;
  } else {
    const renderChoiceBox = (item) => {
      return (
        <RenderChoiceBoxes
          data={item}
          title={data.reverse ? item.translation : item.word}
          selected={selected}
          setSelected={setSelected}
          setAnswerIsCorrect={setAnswerIsCorrect}
          numColumns={numColumns}
        />
      );
    };
    return (
      <QuizScreen
        navigation={navigation}
        renderItem={renderChoiceBox}
        answerIsCorrect={answerIsCorrect}
        selected={selected}
        numColumns={numColumns}
        data={data}
        instruction={instruction}
        phrase={phrase}
      />
    );
  }
}
export default MultipleChoiceScreen;
