import React from "react";
import { View, StyleSheet } from "react-native";
import RNModal from "react-native-modal";

import colors from "../../config/colors";
import Icon from "../Icon";
import AppText from "../AppText";
import AppButton from "../AppButton";
import defaultStyles from "../../config/styles";

function CheckAnswerModal({
  correctAnswer,
  modalVisible,
  setModalVisible,
  navigation,
  nextLesson,
  nextLessonType,
  data,
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
        <>
          <View style={styles.answerContainer}>
            <View style={styles.messageContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  name={correctAnswer ? "check" : "times"}
                  size={23}
                  backgroundColor={correctAnswer ? colors.green : colors.red}
                />
              </View>
              {correctAnswer && (
                <AppText style={[defaultStyles.checkAnswer, styles.correct]}>
                  Correct!
                </AppText>
              )}
              {!correctAnswer && (
                <AppText style={[defaultStyles.checkAnswer, styles.wrong]}>
                  Try again!
                </AppText>
              )}
            </View>
            {false && <AppText>{data.word}</AppText>}
          </View>
          <AppButton
            title={correctAnswer ? "Next" : "Okay"}
            onPress={() => {
              if (correctAnswer) {
                setModalVisible(!modalVisible);
                navigation.push(nextLessonType, {
                  lessonId: nextLesson,
                });
              } else {
                setModalVisible(!modalVisible);
              }
            }}
          />
        </>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  correct: {
    color: colors.green,
    paddingLeft: 7,
  },
  wrong: {
    paddingLeft: 7,
    color: colors.red,
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
    backgroundColor: colors.primaryTint30,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: "center",
    width: "100%",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 10,
  },
  answerContainer: {
    marginBottom: 10,
  },
});

export default CheckAnswerModal;
