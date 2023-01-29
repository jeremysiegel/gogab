import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";

import AppText from "../../components/AppText";
import getExerciseData from "../../api/getExerciseData";
import defaultStyles from "../../config/styles";

import QuizScreen from "./QuizScreen";
import colors from "../../config/colors";
import RenderChoiceBoxes from "../../components/RenderChoiceBoxes";

// Creates a multiple choice screen that can take in prompts.
// TODO: test on iphone 13
function PromptScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState();
  const [numItems, setNumItems] = useState();
  const [phrase, setPhrase] = useState();
  const [instruction, setInstruction] = useState();

  const { height } = useWindowDimensions();

  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData({
      ...route.params,
      prompt: true,
    });
    const numColumns =
      height - 500 < setUpData.selections.length * 80 ||
      setUpData.selections.length > 3
        ? 2
        : 1;
    setData(setUpData);
    setNumItems(setUpData.selections.length);
    setInstruction(
      <AppText style={[defaultStyles.instructionText, styles.instruction]}>
        {setUpData.instruction}
      </AppText>
    );
    setPhrase(
      <View style={styles.phraseContainer}>
        <AppText
          style={[
            defaultStyles.big,
            styles.phrase,
            numColumns > 1 && height < 700 ? styles.smallPhrase : null,
          ]}
        >
          {setUpData.phrase}
        </AppText>
      </View>
    );
  }, []);
  const numColumns = height - 500 < numItems * 80 || numItems > 3 ? 2 : 1;
  const renderChoiceBox = (item) => {
    return (
      <RenderChoiceBoxes
        data={item}
        title={item.word}
        selected={selected}
        setSelected={setSelected}
        setAnswerIsCorrect={setAnswerIsCorrect}
        numColumns={numColumns}
      />
    );
  };
  if (!data) {
    return <></>;
  } else {
    return (
      <QuizScreen
        navigation={navigation}
        renderItem={renderChoiceBox}
        answerIsCorrect={answerIsCorrect}
        selected={selected}
        numColumns={numColumns}
        instruction={instruction}
        phrase={phrase}
        data={data}
      />
    );
  }
}

const styles = StyleSheet.create({
  phraseContainer: {
    alignItems: "center",
    flex: 1,
  },

  phrase: {
    color: colors.black,
    backgroundColor: colors.primary + "20",
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 30,
    textAlign: "center",
  },
  smallPhrase: {
    fontSize: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
});

export default PromptScreen;
