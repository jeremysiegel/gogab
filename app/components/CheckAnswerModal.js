import React from "react";
import { View, StyleSheet } from "react-native";
import RNModal from "react-native-modal";

import colors from "../config/colors";
import Icon from "../components/Icon";
import AppText from "./AppText";
import AppButton from "./AppButton";

function CheckAnswerModal({
  correctAnswer,
  modalVisible,
  setModalVisible,
  navigation,
  nextLesson,
  nextLessonType,
}) {
  return (
    <RNModal
      animationIn={"slideInUp"}
      onBackdropPress={() => {
        if (true) {
          //!correctAnswer) {
          setModalVisible(!modalVisible);
        }
      }}
      useNativeDriver
      backdropOpacity={0}
      transparent={true}
      isVisible={modalVisible}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      statusBarTranslucent
      style={styles.modalContainer}
    >
      <View style={styles.modal}>
        {correctAnswer && (
          <>
            <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <Icon name={"check"} size={23} backgroundColor={colors.green} />
              </View>
              <AppText style={styles.correct}>Correct!</AppText>
            </View>
            <AppButton
              title={"Next"}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.push(nextLessonType, {
                  lessonId: nextLesson,
                });
              }}
            />
          </>
        )}

        {!correctAnswer && (
          <>
            <View style={styles.textContainer}>
              <View style={styles.iconContainer}>
                <Icon name={"times"} size={23} backgroundColor={colors.red} />
              </View>
              <AppText style={styles.wrong}>Try again!</AppText>
            </View>
            <AppButton
              title={"Okay"}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </>
        )}
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  correct: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.green,
    paddingLeft: 7,
  },
  iconContainer: {
    justifyContent: "center",
    paddingTop: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
  },
  modal: {
    backgroundColor: colors.grey,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  wrong: {
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 7,
    color: colors.red,
  },
});

export default CheckAnswerModal;
