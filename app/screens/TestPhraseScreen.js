import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";

import { moderateScale } from "../utility/scaler";
import AppText from "../components/AppText";
import LessonScreen from "../components/LessonScreen";
import colors from "../config/colors";
import ChoiceBox from "../components/ChoiceBox";
import CheckAnswerModal from "../components/CheckAnswerModal";
import getLessonData from "../api/getLessonData";

function TestPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

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

  const instruction = "Select the correct word:";

  const phrase = <AppText style={styles.learnWord}>{data.learnWord}</AppText>;

  return (
    <LessonScreen
      instruction={instruction}
      lessonData={data}
      navigation={navigation}
      phrase={phrase}
    >
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.selectorContainer}>
            <FlatList
              data={data.boxSelections}
              keyExtractor={(item) => item.title} //has to be unique
              renderItem={renderItem} //method to render the data in the way you want using styling u need
              numColumns={1}
            />
          </View>
        </View>
      </View>

      <CheckAnswerModal
        correctAnswer={correctAnswer}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </LessonScreen>
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
    fontSize: moderateScale(26),

    color: colors.orange,
  },

  selectorContainer: {
    marginTop: 20,
  },
});

export default TestPhraseScreen;
