import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";

// Creates a user quiz.

function QuizScreen({
  navigation,
  renderItem,
  answerIsCorrect,
  selected,
  numColumns,
  instruction,
  phrase,
  data,
}) {
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
