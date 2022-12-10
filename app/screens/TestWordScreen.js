import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import RNModal from "react-native-modal";

import { moderateScale } from "../utility/scaler";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ChoiceBox from "../components/ChoiceBox";

const deviceHeight = Dimensions.get("screen").height;

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
  {
    name: "tree",
    title: "tree",
    correct: false,
  },
];

function TestWordScreen(props) {
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
            <AppText style={styles.learnWord}>baño</AppText>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.selectorContainer}>
            <FlatList
              data={iconSelections}
              keyExtractor={(item) => item.title} //has to be unique
              renderItem={renderItem} //method to render the data in the way you want using styling u need
              numColumns={1}
            />
          </View>
        </View>
      </View>

      <RNModal
        animationIn={"slideInUp"}
        // animationOutTiming={120}
        hasBackdrop
        coverScreen
        deviceHeight={deviceHeight}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        useNativeDriver
        backdropColor="black"
        backdropOpacity={0.4}
        transparent={true}
        isVisible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        statusBarTranslucent
        style={{ flex: 1, height: "100%" }}
      >
        <View
          style={{
            backgroundColor: colors.light,
            padding: 10,
            borderRadius: 10,
            alignSelf: "center",
          }}
        >
          {correctAnswer && (
            <AppText style={{ color: colors.green }}>Correct!</AppText>
          )}
          {!correctAnswer && (
            <AppText style={{ color: colors.red }}>Try again!</AppText>
          )}
        </View>
      </RNModal>
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
  },
  bottomContainer: {
    flex: 3,
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
  listContainer: {
    justifyContent: "space-around",
    paddingVertical: 30,
  },
});

export default TestWordScreen;
