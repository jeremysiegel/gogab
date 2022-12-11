import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import RNModal from "react-native-modal";

import colors from "../config/colors";
import AppText from "./AppText";

const deviceHeight = Dimensions.get("screen").height;

function CheckAnswerModal({ correctAnswer, modalVisible, setModalVisible }) {
  return (
    <RNModal
      animationIn={"slideInUp"}
      hasBackdrop
      coverScreen
      deviceHeight={deviceHeight}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      useNativeDriver
      backdropColor="black"
      backdropOpacity={0.4}
      transparent={true}
      isVisible={modalVisible}
      // onRequestClose={() => {
      //   setModalVisible(!modalVisible);
      // }}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      statusBarTranslucent
      style={styles.modal}
    >
      <View style={styles.modalText}>
        {correctAnswer && <AppText style={styles.correct}>Correct!</AppText>}
        {!correctAnswer && <AppText style={styles.wrong}>Try again!</AppText>}
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  correct: {
    color: colors.green,
  },
  modal: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
  },
  modalText: {
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  wrong: {
    color: colors.red,
  },
});

export default CheckAnswerModal;
