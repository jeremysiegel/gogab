import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import LessonScreen from "../../components/lessonScreen/LessonScreen";
import colors from "../../config/colors";
import Icon from "../../components/Icon";
import getLessonData from "../../api/getLessonData";
import RenderLearnWord from "../../components/RenderLearnWord";
import Selectable from "../../components/Selectable";

function ReviewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Selectable
        name={item.name}
        selected={selected}
        onPress={() => {
          setAnswerIsCorrect(item.correct);
          setSelected(item.name);
        }}
        style={styles.selectableItem}
      >
        <View style={styles.selectableItemContainer}>
          <Icon
            name={item.name}
            size={100}
            label={item.title}
            backgroundColor={colors.secondary}
          />
        </View>
      </Selectable>
    );
  };

  const instruction = "Translate:";
  const phrase = <RenderLearnWord data={data} />;

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
    justifyContent: "center",
  },

  selectableItem: {
    margin: 15,
    width: 160,
    height: 200,
    justifyContent: "center",
    borderColor: colors.selectableBorder,
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default ReviewPhraseScreen;
