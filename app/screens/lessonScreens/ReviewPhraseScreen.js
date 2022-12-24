import React, { useState } from "react";
import { StyleSheet, Pressable, FlatList } from "react-native";

import LessonScreen from "../../components/LessonScreen";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import CheckAnswerModal from "../../components/CheckAnswerModal";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";

function ReviewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      onPress={() => {
        setCorrectAnswer(item.correct);
        setModalVisible(true);
      }}
    >
      <Icon
        name={item.name}
        size={100}
        label={item.title}
        backgroundColor={colors.secondary}
      />
    </Pressable>
  );

  const instruction = "Translate:";
  const phrase = (
    <RenderLearnWord
      learnWords={learnWords}
      helpText={helpText}
      style={defaultStyles.learnWord}
    />
  );

  return (
    <LessonScreen
      navigation={navigation}
      lessonData={data}
      instruction={instruction}
      phrase={phrase}
    >
      <FlatList
        data={data.iconSelections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem} //method to render the data in the way you want using styling u need
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
      />

      <CheckAnswerModal
        correctAnswer={correctAnswer}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "space-around",
    paddingVertical: 30,
  },
});

export default ReviewPhraseScreen;
