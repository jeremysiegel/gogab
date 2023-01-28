import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";

import AppText from "../../components/AppText";
import getExerciseData from "../../api/getExerciseData";
import ChoiceBox from "../../components/ChoiceBox";
import defaultStyles from "../../config/styles";

import QuizScreen from "./QuizScreen";
import colors from "../../config/colors";

function PromptScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState();
  const [numItems, setNumItems] = useState();
  const [phrase, setPhrase] = useState();
  const [instruction, setInstruction] = useState();

  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData({
      ...route.params,
      prompt: true,
    });
    setData(setUpData);
    setNumItems(setUpData.selections.length);
    setInstruction(
      <AppText style={[defaultStyles.instructionText, styles.instruction]}>
        {setUpData.instruction}
      </AppText>
    );
    setPhrase(
      <View style={styles.phraseContainer}>
        <AppText style={[defaultStyles.big, styles.phrase]}>
          {setUpData.phrase}
        </AppText>
      </View>
    );
  }, []);

  const { height } = useWindowDimensions();

  const numColumns = height - 300 < numItems * 80 || numItems > 6 ? 2 : 1;
  const renderChoiceBox = (item) => {
    return (
      <ChoiceBox
        title={item.word}
        currentObjects={[selected]}
        onPress={() => {
          item.correct
            ? setAnswerIsCorrect(item.correct)
            : setAnswerIsCorrect(false);
          setSelected(item.word);
        }}
        style={
          numColumns === 2
            ? { width: "45%", marginHorizontal: 7, maxWidth: 300 }
            : null
        }
      />
    );
  };
  if (!data) {
    return <></>;
  } else {
    return (
      <QuizScreen
        routeParams={route.params}
        navigation={navigation}
        renderItem={renderChoiceBox}
        answerIsCorrect={answerIsCorrect}
        selected={selected}
        numColumns={numColumns}
        passInstruction={instruction}
        passPhrase={phrase}
        multipleChoice={false}
        prompt={true}
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
    color: colors.orange,
    backgroundColor: colors.primary + "20",
    marginTop: 50,
    borderWidth: 3,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 50,
  },
});

export default PromptScreen;
