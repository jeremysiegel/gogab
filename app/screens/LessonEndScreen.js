import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import { CommonActions } from "@react-navigation/native";
import BackgroundScreen from "../components/BackgroundScreen";
import AppLottie from "../components/AppLottie";
import colors from "../config/colors";
import ExerciseHeader from "../components/exerciseScreen/ExerciseHeader";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";
import sections from "../lessons/sections";
const endLotties = [
  require("../assets/endLesson1.json"),
  require("../assets/endLesson2.json"),
  require("../assets/endLesson3.json"),
  require("../assets/endLesson4.json"),
  require("../assets/endLesson5.json"),
  require("../assets/endLesson6.json"),
];

function LessonEndScreen({ navigation, route }) {
  let sectionParams = {};
  sections.forEach((level) => {
    level.data.forEach((section) => {
      if (section.lessons.includes(route.params.lessonId)) {
        sectionParams = section;
      }
    });
  });

  const quizLength = Object.keys(route.params.lessonData).length;
  const lottieNumber = Math.floor(Math.random() * endLotties.length);
  const lottie = endLotties[lottieNumber];
  const { country } = useContext(AuthContext);

  const getCompletedLessons = async () => {
    let cachedCompletedLessons = await cache.get("completedLessons");
    if (!cachedCompletedLessons) {
      cachedCompletedLessons = {};
    }
    if (!cachedCompletedLessons.hasOwnProperty(country)) {
      cachedCompletedLessons = { [country]: [route.params.lessonId] };
    } else if (
      !cachedCompletedLessons[country].includes(route.params.lessonId)
    ) {
      cachedCompletedLessons[country].push(route.params.lessonId);
    }
    cache.store("completedLessons", cachedCompletedLessons);
  };

  useEffect(() => {
    async function updateCompletedLessons() {
      await getCompletedLessons();
    }
    updateCompletedLessons();
  }, []);

  return (
    <BackgroundScreen>
      <ExerciseHeader
        currentIndex={quizLength}
        quizLength={quizLength}
        exitable={false}
      />
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <AppLottie source={lottie} loop={true} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title={"Next Lesson"}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: "homeTab" },
                    {
                      name: "section",
                      params: {
                        sectionData: sectionParams,
                        completedLesson: route.params.lessonId,
                      },
                    },
                  ],
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
                  routes: [{ name: "homeTab" }],
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
