import React, { useState, useEffect, useContext } from "react";

import QuizScreen from "./QuizScreen";
import ChoiceImage from "../../components/ChoiceImage";
import getExerciseData from "../../api/getExerciseData";
import instructionText from "../../lessons/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";

// Creates a multiple choice quiz screen of ChoiceImages.

function PickImageScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      const setUpData = getExerciseData.getExerciseData({
        ...route.params,
        multipleChoice: true,
      });
      setData(setUpData);
    };
    getData();
  }, []);

  const instruction = instructionText.pickImage;
  const phrase = <RenderLearnWord data={data} />;

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
  if (!data) {
    return <></>;
  } else {
    return (
      <QuizScreen
        navigation={navigation}
        renderItem={renderChoiceImage}
        answerIsCorrect={answerIsCorrect}
        selected={selected}
        numColumns={2}
        instruction={instruction}
        phrase={phrase}
        data={data}
      />
    );
  }
}
export default PickImageScreen;
