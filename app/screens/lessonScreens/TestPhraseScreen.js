import React, { useState } from "react";
import { FlatList } from "react-native";

import AppText from "../../components/AppText";
import LessonScreen from "../../components/LessonScreen";
import ChoiceBox from "../../components/ChoiceBox";
import CheckAnswerModal from "../../components/CheckAnswerModal";
import getLessonData from "../../api/getLessonData";
import defaultStyles from "../../config/styles";

function TestPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <ChoiceBox
      title={item.title}
      onPress={() => {
        setCorrectAnswer(item.correct);
        setModalVisible(true);
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
    >
      <FlatList
        data={data.boxSelections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem} //method to render the data in the way you want using styling u need
        numColumns={1}
      />

      <CheckAnswerModal
        correctAnswer={correctAnswer}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </LessonScreen>
  );
}

export default TestPhraseScreen;
