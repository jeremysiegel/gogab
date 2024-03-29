import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import RNModal from "react-native-modal";

import colors from "../../config/colors";
import Icon from "../Icon";
import AppText from "../AppText";
import AppButton from "../AppButton";
import defaultStyles from "../../config/styles";
import AuthContext from "../../navigation/authContext";

// Creates a modal that appears when user checks
// if their answer is correct
function CheckAnswerModal({
  correctAnswer,
  modalVisible,
  setModalVisible,
  navigation,
  lessonId,
  nextExercise,
  nextExerciseType,
  lessonData,
  skippable, // Lets user skip exercise if true.
}) {
  const { country } = useContext(AuthContext);
  return (
    <RNModal
      animationIn={"slideInUp"}
      onBackdropPress={() => {
        // Allow user to dismiss modal only if the answer is wrong
        if (!correctAnswer) {
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
                  iconType={"FontAwesome5"}
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
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title={correctAnswer ? "Next" : "Okay"}
              style={{ width: skippable && !correctAnswer ? "45%" : "100%" }}
              onPress={async () => {
                if (correctAnswer) {
                  setModalVisible(!modalVisible);
                  navigation.push(nextExerciseType, {
                    exerciseId: nextExercise,
                    lessonId: lessonId,
                    lessonData: lessonData,
                    country: country,
                  });
                } else {
                  setModalVisible(!modalVisible);
                }
              }}
            />

            {skippable && !correctAnswer && (
              <AppButton
                style={{ width: "45%" }}
                title={"Skip"}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.push(nextExerciseType, {
                    exerciseId: nextExercise,
                    lessonId: lessonId,
                    lessonData: lessonData,
                    country: country,
                  });
                }}
              />
            )}
          </View>
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
  buttonContainer: {
    flexDirection: "row",

    justifyContent: "space-around",
  },
});

export default CheckAnswerModal;
