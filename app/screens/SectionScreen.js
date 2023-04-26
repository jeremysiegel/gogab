import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
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
import colors from "../config/colors";

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

  const header =    <View style={styles.textBox}>
  <AppText style={styles.header}>{sectionData.title}</AppText>
</View>

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
  backgroundColor: colors.backgroundBlue
  },
  listHeader: {
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 5,
    maxWidth: 400,
    justifyContent: "center",
 
  },
  header: {
    marginLeft: scale(40),
    fontSize: moderateScale(40),
  },
});

export default SectionScreen;
