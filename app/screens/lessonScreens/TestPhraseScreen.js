import React, { useState } from "react";
import { FlatList } from "react-native";

import AppText from "../../components/AppText";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import ChoiceBox from "../../components/ChoiceBox";
import getLessonData from "../../api/getLessonData";
import defaultStyles from "../../config/styles";

function TestPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderItem = ({ item }) => (
    <ChoiceBox
      title={item.title}
      selected={selected}
      onPress={() => {
        setAnswerIsCorrect(item.correct);
        setSelected(item.title);
      }}
    />
  );

  const instruction = "Select the correct word:";

  const phrase = (
    <AppText style={defaultStyles.testWord}>{data.learnWord}</AppText>
  );

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
        data={data.boxSelections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem} //method to render the data in the way you want using styling u need
        numColumns={1}
      />
    </LessonScreen>
  );
}

export default TestPhraseScreen;
