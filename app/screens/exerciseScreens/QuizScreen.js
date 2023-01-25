import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import getExerciseData from "../../api/getExerciseData";
import instructionText from "../../config/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";

// Creates a user quiz.

function QuizScreen({
  routeParams,
  navigation,
  renderItem,
  answerIsCorrect,
  selected,
  numColumns,
}) {
  const [data, setData] = useState();
  const [instruction, setInstruction] = useState();
  const [phrase, setPhrase] = useState();

  // Needed to keep selections from re-rendering.
  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData({
      ...routeParams,
      multipleChoice: true,
    });
    setData(setUpData);
    setInstruction(instructionText[setUpData.screenType]);
    setPhrase(<RenderLearnWord data={setUpData} />);
  }, []);

  const renderItems = ({ item }) => renderItem(item);

  if (data === undefined) {
    return <></>;
  } else {
    return (
      <ExerciseScreen
        instruction={instruction}
        exerciseData={data}
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
            keyExtractor={(item) => item.word} //has to be unique
            renderItem={renderItems}
            numColumns={numColumns}
            columnWrapperStyle={numColumns > 1 ? styles.listContainer : null}
          />
        </View>
      </ExerciseScreen>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
  },
});

export default QuizScreen;
