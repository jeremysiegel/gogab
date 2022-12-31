import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import LessonScreen from "../../components/lessonScreen/LessonScreen";
import ChoiceBox from "../../components/ChoiceBox";
import getLessonData from "../../api/getLessonData";
import instructionText from "../../lessons/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";
import ChoiceImage from "../../components/ChoiceImage";

function QuizScreen({ lessonId, navigation }) {
  const data = getLessonData.getLessonData(lessonId);

  const instruction = instructionText[data.screenType];
  const phrase = <RenderLearnWord data={data} />;

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderItem = ({ item }) => {
    if (data.screenType === "multipleChoice") {
      return (
        <ChoiceBox
          title={item.title}
          selected={selected}
          onPress={() => {
            setAnswerIsCorrect(item.correct);
            setSelected(item.title);
          }}
        />
      );
    } else if (data.screenType === "pickImage") {
      return (
        <ChoiceImage
          item={item}
          onPress={() => {
            setAnswerIsCorrect(item.correct);
            setSelected(item.name);
          }}
          selected={selected}
        />
      );
    }
  };

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
      phrase={phrase}
      answerIsCorrect={answerIsCorrect}
      touched={selected}
    >
      <FlatList
        data={data.selections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem}
        numColumns={data.screenType === "pickImage" ? 2 : 1}
        columnWrapperStyle={
          data.screenType === "pickImage" ? styles.listContainer : null
        }
      />
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
  },
});

export default QuizScreen;
