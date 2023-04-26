import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import lessonData from "../lessons/lessonData";
import generateLessonData from "../api/generateLessonData";
import LessonContext from "../navigation/lessonContext";
import sections from "../lessons/sections";
import getElementFromId from "../utility/getElementFromId";
import AppText from "../components/AppText";
import SectionButton from "../components/SectionButton";
import BackgroundScreen from "../components/BackgroundScreen";
import { scale, moderateScale } from "../utility/scaler";
import AuthContext from "../navigation/authContext";

// Section screen.

const exerciseId = 1;

function SectionScreen({ navigation, route }) {
  const { section, setLessonData, setLesson } = useContext(LessonContext);
  const { country } = useContext(AuthContext);
  const sectionData = getElementFromId(sections, "sectionId", section);
  // Makes a deep copy.
  const allLessons = JSON.parse(JSON.stringify(lessonData));
  const sectionLessons = [];
  allLessons.forEach((lesson) => {
    if (sectionData.lessons.includes(lesson.lessonId)) {
      sectionLessons.push(lesson);
    }
  });

  const renderItems = ({ item }) => {
    return (
      <View style={styles.buttonContainer}>
        <SectionButton
        lessonData={item}
        country={country}
          title={item.title}
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
      </View>
    );
  };

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <AppText style={styles.header}>{sectionData.title}</AppText>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            scrollEnabled={true}
            data={sectionLessons}
            keyExtractor={(item) => item.lessonId}
            renderItem={renderItems}
            numColumns={1}
           // columnWrapperStyle={styles.listContainer}
          />
        </View>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: "space-evenly",
  },
  listContainer: {
    flex: 1,
  //  justifyContent: "space-evenly",
  },
  buttonContainer: {
    flexDirection: "column",
   // alignItems: "space-around",
    margin: 20,
    //justifyContent: "space-between",
    //flex:1,
  },
  header: {
    marginLeft: scale(40),
    fontSize: moderateScale(40),
  },
});

export default SectionScreen;
