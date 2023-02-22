import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Pressable,
  Alert,
  useWindowDimensions,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import LessonContext from "../../navigation/lessonContext";
import { CommonActions } from "@react-navigation/native";
import { moderateScale } from "../../utility/scaler";
import constants from "../../config/constants";

// Creates header for exercise screen.
function ExerciseHeader({
  navigation,
  currentIndex,
  quizLength,
  exitable = true,
}) {
  const { height } = useWindowDimensions();
  // Alert if user tries to exit lesson.
  const closeAlert = () => {
    Alert.alert(
      "You will lose all lesson progress.",
      "Click on 'cancel' to cancel.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Quit",
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: "homeTab" }, { name: "section" }],
              })
            );
          },
        },
      ],
      { cancelable: true }
    );
  };
  // Generate lesson progress bar.
  let fromValue = (currentIndex - 1) / quizLength;
  if (fromValue < 0) {
    fromValue = 0;
  }

  const [animatedValue] = useState(new Animated.Value(fromValue));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    let toValue = currentIndex / quizLength;
    if (toValue === 0) {
      toValue = 0.05;
    }
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View
      style={[
        { marginBottom: height < constants.shortHeight ? 7 : 25 },
        styles.mainContainer,
      ]}
    >
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressBarFill, { flex: animatedValue }]}
        />
      </View>
      <View style={styles.closeButtonContainer}>
        <Pressable
          hitSlop={17}
          onPress={() => {
            if (!exitable) {
              return true;
            } else {
              closeAlert();
            }
          }}
        >
          <AppText style={styles.closeButton}>X</AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
  },
  closeButtonContainer: {
    marginLeft: 10,
    marginBottom: 2,
  },
  closeButton: {
    color: colors.medium,
    fontSize: 25,
  },
  progressBar: {
    flex: 1,
    flexDirection: "row",
    height: 20,
    backgroundColor: colors.light,
    elevation: 1,

    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
  },
  progressBarFill: {
    backgroundColor: colors.red,
    borderRadius: 2.5,
    height: "100%",
  },
});

export default ExerciseHeader;
