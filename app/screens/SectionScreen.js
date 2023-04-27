import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import Screen from "../components/Screen";
import lessonData from "../lessons/lessonData";
import generateLessonData from "../api/generateLessonData";
import LessonContext from "../navigation/lessonContext";
import sections from "../lessons/sections";
import getElementFromId from "../utility/getElementFromId";
import AppText from "../components/AppText";
import NavigationButton from "../components/NavigationButton";
import BackgroundScreen from "../components/BackgroundScreen";
import { scale, moderateScale } from "../utility/scaler";
import AuthContext from "../navigation/authContext";
import colors from "../config/colors";
import getPhrase from "../api/getPhrase";
import stripArray from "../utility/stripArray";

// Section screen.

const exerciseId = 1;

function SectionScreen({ navigation, route }) {
  const { section, setLessonData, setLesson } = useContext(LessonContext);
  const { country } = useContext(AuthContext);
  const sectionData = route.params.sectionData;
  // Makes a deep copy.
  const allLessons = JSON.parse(JSON.stringify(lessonData));
  const sectionLessons = [];
  allLessons.forEach((lesson) => {
    if (sectionData.lessons.includes(lesson.lessonId)) {
      sectionLessons.push(lesson);
    }
  });

  const renderItems = ({ item }) => {
    let phraseMainText = "";

    for (var i = 0; i < item.phrases.length; i++) {
      const phraseData = getPhrase(item.phrases[i], country);
      let phraseMain = [];
      if (phraseData.phraseMain.order) {
        phraseMain = phraseData.phraseMain.order.split(" ");
      }
      const phraseMainStripped = stripArray({
        arrayToStrip: phraseMain,
        removeSpecialCharacters: false,
        removeUnderscore: true,
      });

      phraseMainText = phraseMainText + phraseMainStripped.join(" ");
      if (i < item.phrases.length - 1) {
        phraseMainText = phraseMainText + "\n";
      }
    }
    if (!phraseMainText) {
      phraseMainText = "review";
    }
    return (
      <NavigationButton
        titleColor={colors.primary}
        color={colors.primaryTint}
        buttonBorderColor={colors.primaryTint}
        lessonData={item}
        country={country}
        title={item.title}
        subtitle={phraseMainText}
        onPress={() => {
          const lesson = generateLessonData(
            item.lessonId,
            sectionLessons,
            country
          );
          setLessonData(lesson);
          setLesson(item.lessonId);
          navigation.push(lesson[exerciseId].screenType, {
            screen: lesson[exerciseId].screenType,
            exerciseId: exerciseId,
            lessonId: item.lessonId,
            lessonData: lesson,
            country: country,
          });
        }}
      />
    );
  };

  const header = (
    <View style={styles.textBox}>
      <AppText style={styles.header}>{sectionData.title}</AppText>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.listHeader}
        scrollEnabled={true}
        data={sectionLessons}
        keyExtractor={(item) => item.lessonId}
        renderItem={renderItems}
        numColumns={1}
        // columnWrapperStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
  },
  listHeader: {
    marginVertical: 20,
  },
  header: {
    marginLeft: scale(40),
    fontSize: moderateScale(40),
  },
});

export default SectionScreen;
