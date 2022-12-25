import React, { useState } from "react";
import { StyleSheet, Pressable, FlatList } from "react-native";

import LessonScreen from "../../components/lessonScreen/LessonScreen";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";

function ReviewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      onPress={() => {
        setAnswerIsCorrect(item.correct);
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
      answerIsCorrect={answerIsCorrect}
    >
      <FlatList
        data={data.iconSelections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem} //method to render the data in the way you want using styling u need
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
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
