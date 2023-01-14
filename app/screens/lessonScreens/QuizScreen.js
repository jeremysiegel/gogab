import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import LessonScreen from "../../components/lessonScreen/LessonScreen";
import getLessonData from "../../api/getLessonData";
import instructionText from "../../config/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";

function QuizScreen({
  lessonId,
  navigation,
  renderItem,
  answerIsCorrect,
  selected,
  numColumns,
}) {
  const data = getLessonData.getLessonData(lessonId);

  const instruction = instructionText[data.screenType];
  const phrase = <RenderLearnWord data={data} />;

  const renderItems = ({ item }) => renderItem(item);

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
      phrase={phrase}
      answerIsCorrect={answerIsCorrect}
      touched={selected}
    >
      <View>
        <FlatList
          key={numColumns}
          scrollEnabled={false}
          data={data.selections}
          keyExtractor={(item) => item.title} //has to be unique
          renderItem={renderItems}
          numColumns={numColumns}
          columnWrapperStyle={numColumns > 1 ? styles.listContainer : null}
        />
      </View>
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
  },
});

export default QuizScreen;
