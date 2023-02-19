import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import lessonData from "../lessons/lessonData";
import generateLessonData from "../api/generateLessonData";
import LessonContext from "../navigation/cycleContext";

// Section screen.

const exerciseId = 1;

function SectionScreen({ navigation, route }) {
  const allLessons = JSON.parse(JSON.stringify(lessonData));
  const sectionLessons = [];
  allLessons.forEach((lesson) => {
    if (route.params.lessons.includes(lesson.lessonId)) {
      sectionLessons.push(lesson);
    }
  });

  const { setLessonData } = useContext(LessonContext);
  const renderItems = ({ item }) => {
    return (
      <AppButton
        title={item.title}
        onPress={() => {
          const lesson = generateLessonData(item.lessonId);
          setLessonData(lesson);

          navigation.push("lessonNavigator", {
            screen: lesson[exerciseId].screenType,
            params: {
              exerciseId: exerciseId,
              lessonId: item.lessonId,
              lessonData: lesson,
            },
          });
        }}
        style={styles.button}
      />
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <FlatList
            scrollEnabled={false}
            data={sectionLessons}
            keyExtractor={(item) => item.lessonId}
            renderItem={renderItems}
            numColumns={2}
            columnWrapperStyle={styles.listContainer}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: "40%",
    margin: 20,
  },
});

export default SectionScreen;
