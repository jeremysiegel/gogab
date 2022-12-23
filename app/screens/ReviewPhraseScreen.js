import React, { useState } from "react";
import { View, StyleSheet, Pressable, FlatList, Button } from "react-native";

import AppText from "../components/AppText";
import LessonScreen from "../components/LessonScreen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import CheckAnswerModal from "../components/CheckAnswerModal";
import getLessonData from "../api/getLessonData";
import RenderLearnWord from "../components/RenderLearnWord";
import { moderateScale } from "../utility/scaler";

function ReviewPhraseScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);

  const learnWords = data.learnWordArray;
  const helpText = data.helpTextArray;

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      onPress={() => {
        setCorrectAnswer(item.correct);
        setModalVisible(true);
      }}
    >
      <Icon
        name={item.name}
        size={100}
        label={item.title}
        backgroundColor={colors.secondary}
      />
    </Pressable>
  );

  const instruction = "Translate:";
  const phrase = (
    <RenderLearnWord
      learnWords={learnWords}
      helpText={helpText}
      style={styles.learnWord}
    />
  );

  return (
    <LessonScreen
      navigation={navigation}
      lessonData={data}
      instruction={instruction}
      phrase={phrase}
    >
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.selectorContainer}>
            <FlatList
              data={data.iconSelections}
              keyExtractor={(item) => item.title} //has to be unique
              renderItem={renderItem} //method to render the data in the way you want using styling u need
              numColumns={2}
              columnWrapperStyle={styles.listContainer}
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
  colorSelector: {
    backgroundColor: colors.secondary,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 17,
    marginTop: 15,
  },
  container: {
    marginHorizontal: 22,
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  phraseContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomContainer: {
    flex: 4,
  },
  learnWord: {
    fontSize: moderateScale(28),
  },
  selectorContainer: {
    marginTop: 20,
  },
  listContainer: {
    justifyContent: "space-around",
    paddingVertical: 30,
  },
});

export default ReviewPhraseScreen;
