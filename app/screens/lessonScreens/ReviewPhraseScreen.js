import React, { useState } from "react";
import { StyleSheet, Pressable, FlatList } from "react-native";

import LessonScreen from "../../components/lessonScreen/LessonScreen";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import ChoiceImage from "../../components/ChoiceImage";

function ReviewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderItem = ({ item }) => {
    const backgroundColor = item.name === selected ? "#6e3b6e" : "#f9c2ff";

    return (
      <Pressable
        key={item.name}
        onPress={() => {
          setAnswerIsCorrect(item.correct);
          setSelected(item.name);
          console.log(selected);
        }}
        style={{ backgroundColor: backgroundColor, padding: 10 }}
      >
        <Icon
          name={item.name}
          size={100}
          label={item.title}
          backgroundColor={colors.secondary}
        />
      </Pressable>
    );
  };

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
      touched={selected}
    >
      <FlatList
        data={data.iconSelections}
        keyExtractor={(item) => item.title} //has to be unique
        renderItem={renderItem} //method to render the data in the way you want using styling u need
        extraData={selected}
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
