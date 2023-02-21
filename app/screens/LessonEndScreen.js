import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import { CommonActions } from "@react-navigation/native";
import BackgroundScreen from "../components/BackgroundScreen";
import AppLottie from "../components/AppLottie";
import colors from "../config/colors";
import ExerciseHeader from "../components/exerciseScreen/ExerciseHeader";

function LessonEndScreen({ navigation, route }) {
  const quizLength = Object.keys(route.params.lessonData).length;

  return (
    <BackgroundScreen>
      <ExerciseHeader
        currentIndex={quizLength}
        quizLength={quizLength}
        exitable={false}
      />
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <AppLottie
            source={require("../assets/endLesson7.json")}
            loop={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={"Next Lesson"}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: "homeTab" }, { name: "section" }],
                })
              );
            }}
          />
          <AppButton
            style={styles.home}
            textColor={colors.primaryTint}
            borderTopWidth={1}
            title={"Home"}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: "homeTab" }, { name: "section" }],
                })
              );
            }}
          />
        </View>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    flex: 2,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    alignSelf: "center",
    width: 250,
  },
  home: {
    backgroundColor: colors.primary + 10,
  },
});

export default LessonEndScreen;
