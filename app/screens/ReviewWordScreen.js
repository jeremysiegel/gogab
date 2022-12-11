import React, { useState } from "react";
import { View, StyleSheet, Pressable, FlatList, Button } from "react-native";

import AppText from "../components/AppText";
import LearnWord from "../components/LearnWord";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import CheckAnswerModal from "../components/CheckAnswerModal";

const iconSelections = [
  {
    name: "bus",
    title: "bus",
    correct: false,
  },
  {
    name: "umbrella",
    title: "umbrella",
    correct: false,
  },
  {
    name: "toilet",
    title: "bathroom",
    correct: true,
  },
];

function ReviewWordScreen({ navigation }) {
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
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}>
          <AppText style={styles.learnWord}>Translate </AppText>
          <View>
            <LearnWord style={styles.learnWord} translation={"bathroom"}>
              baño
            </LearnWord>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.selectorContainer}>
            <FlatList
              data={iconSelections}
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
      <Button title="Next" onPress={() => navigation.navigate("testWord")} />
    </Screen>
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
    fontSize: 38,
    paddingTop: 20,
  },
  selectorContainer: {
    marginTop: 20,
  },
  listContainer: {
    justifyContent: "space-around",
    paddingVertical: 30,
  },
});

export default ReviewWordScreen;
