import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useWindowDimensions } from "react-native";

import AppText from "../../components/AppText";
import getExerciseData from "../../api/getExerciseData";
import defaultStyles from "../../config/styles";
import { moderateScale } from "../../utility/scaler";

import Icon from "../../components/Icon";
import QuizScreen from "./QuizScreen";
import colors from "../../config/colors";
import RenderChoiceBoxes from "../../components/RenderChoiceBoxes";
import getElementFromId from "../../utility/getElementFromId";
import phraseDictionary from "../../lessons/phraseDictionary";

// Creates a multiple choice screen that can take in prompts.
// TODO: test on iphone 13
function PromptScreen({ route, navigation }) {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState();
  const [numColumns, setNumColumns] = useState();
  const [phrase, setPhrase] = useState();
  const [instruction, setInstruction] = useState();

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData({
      ...route.params,
      screenType: "prompt",
      prompt: true,
    });
    const setUpNumColumns =
      height - 550 < setUpData.selections.length * 80 ||
      setUpData.selections.length > 3
        ? 2
        : 1;

    setNumColumns(setUpNumColumns);
    const smallPhrase = setUpNumColumns > 1 && height < 700;
    setData(setUpData);
    const phrase = getElementFromId(
      phraseDictionary,
      "phraseId",
      setUpData.phrase
    );
    const phraseText = phrase.es;
    setInstruction(
      <AppText style={[defaultStyles.instructionText, styles.instruction]}>
        {setUpData.instruction}
      </AppText>
    );
    setPhrase(
      <View style={styles.phraseContainer}>
        {setUpData.screenSubType === "icon" && (
          <View
            style={[
              styles.iconContainer,
              smallPhrase ? styles.smallPhrase : null,
            ]}
          >
            <Icon
              name={setUpData.icon}
              size={Math.min(0.12 * height, 100)}
              label={phraseText}
              backgroundColor={colors.secondary}
              labelSize={Math.min(0.045 * height, 37)}
              labelWeight={"bold"}
            />
          </View>
        )}
        {setUpData.screenSubType === "chat" && (
          <View style={styles.chatContainer}>
            <AppText style={styles.chatPhrase}>{phraseText}</AppText>
            <View style={styles.rightArrow}></View>
            <View style={styles.rightArrowOverlap}></View>
          </View>
        )}
        {setUpData.screenSubType === "sign" && (
          <AppText
            style={[
              setUpData.screenSubType === "sign" ? styles.signPhrase : null,
              smallPhrase ? styles.smallPhrase : null,
            ]}
          >
            {phraseText}
          </AppText>
        )}
      </View>
    );
  }, []);

  const renderChoiceBox = (item) => {
    const phrase = getElementFromId(phraseDictionary, "phraseId", item.phrase);
    const boxText = phrase.es;

    return (
      <RenderChoiceBoxes
        data={item}
        title={boxText}
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
  iconContainer: {
    borderColor: colors.dark,
    backgroundColor: colors.blue + "20",
    borderWidth: 6,
    borderRadius: 5,
    padding: 20,
    marginTop: 30,
    maxWidth: 300,
  },
  signPhrase: {
    ...defaultStyles.big,
    color: colors.black,
    backgroundColor: colors.blue + "20",
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 30,
    textAlign: "center",
  },
  chatContainer: {
    backgroundColor: colors.secondary,
    padding: 10,
    paddingBottom: 13,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    marginRight: "5%",
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  chatPhrase: {
    color: colors.light,
    fontSize: moderateScale(30),
  },
  smallPhrase: {
    fontSize: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: colors.secondary,
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: colors.background,
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
});

export default PromptScreen;
