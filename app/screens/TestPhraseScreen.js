import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";

import { moderateScale } from "../utility/scaler";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ChoiceBox from "../components/ChoiceBox";
import CheckAnswerModal from "../components/CheckAnswerModal";
import sampleLesson from "../lessons/sampleLesson";

function TestPhraseScreen({ route, navigation }) {
  const { lessonId } = route.params;
  const data = sampleLesson[lessonId];

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <ChoiceBox
      title={item.title}
      onPress={() => {
        setCorrectAnswer(item.correct);
        setModalVisible(true);
      }}
    />
  );
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}>
          <AppText style={styles.instructionText}>
            Select the correct word
          </AppText>
          <View>
            <AppText style={styles.learnWord}>{data.learnWord}</AppText>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.selectorContainer}>
            <FlatList
              data={data.boxSelections}
              keyExtractor={(item) => item.title} //has to be unique
              renderItem={renderItem} //method to render the data in the way you want using styling u need
              numColumns={1}
            />
          </View>
          <Button
            title="Next"
            onPress={() => {
              navigation.push("newWord", { lessonId: data.nextLesson });
            }}
          />
        </View>
      </View>

      <CheckAnswerModal
        correctAnswer={correctAnswer}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  middleContainer: {
    flex: 2,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 6,
  },
  learnWord: {
    fontSize: moderateScale(38),
    paddingTop: 25,
    color: colors.orange,
  },
  instructionText: {
    fontSize: moderateScale(28),
  },
  selectorContainer: {
    marginTop: 20,
  },
});

export default TestPhraseScreen;
