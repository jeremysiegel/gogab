import React, { useContext, useEffect, useState, useRef } from "react";
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
import cache from "../utility/cache";
import { FontAwesome } from "@expo/vector-icons";

// Section screen.

const exerciseId = 1;

function SectionScreen({ navigation, route }) {
  const { section, setLessonData, setLesson } = useContext(LessonContext);
  const { country } = useContext(AuthContext);
  const [completedLessons, setCompletedLessons] = useState();
  const flatListRef = useRef(null);

  let continuing = route.params.hasOwnProperty("completedLesson");
  let previousLesson = continuing ? route.params.completedLesson : undefined;
  let nextLessonIndex = 0;
  useEffect(() => {
    async function getCompletedLessons() {
      let cachedCompletedLessons = await cache.get("completedLessons");
      if (!cachedCompletedLessons) {
        cachedCompletedLessons = {};
      }
      if (!cachedCompletedLessons.hasOwnProperty(country)) {
        cachedCompletedLessons = { [country]: [] };
      }
      setCompletedLessons(cachedCompletedLessons);
    }
    getCompletedLessons();
  }, []);
  if (completedLessons) {
    const sectionData = route.params.sectionData;
    // Makes a deep copy.
    const allLessons = JSON.parse(JSON.stringify(lessonData));
    const sectionLessons = [];

    allLessons.forEach((lesson) => {
      if (sectionData.lessons.includes(lesson.lessonId)) {
        sectionLessons.push(lesson);
      }
    });

    const renderItems = ({ item, index }) => {
      if (continuing && item.lessonId === previousLesson) {
        nextLessonIndex = index + 1;
      }
      let phraseMainText = "";
      let complete = completedLessons[country].includes(item.lessonId);

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
        <View style={styles.cardContainer}>
          <NavigationButton
            subtitle={item.title}
            title={phraseMainText}
            sectionColor={route.params.sectionColor}
            cornerColor={route.params.cornerColor}
            complete={complete}
            icon={
              <FontAwesome
                name={"star"}
                size={30}
                color={complete ? colors.gold : route.params.sectionColor}
                style={{ padding: 5 }}
              />
            }
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

    const header = (
      <View style={styles.textBox}>
        <AppText style={styles.header}>{sectionData.title}</AppText>
      </View>
    );

    return (
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          ListHeaderComponent={header}
          ListHeaderComponentStyle={styles.listHeader}
          scrollEnabled={true}
          data={sectionLessons}
          keyExtractor={(item) => item.lessonId}
          renderItem={renderItems}
          numColumns={1}
          onLayout={() => {
            if (continuing) {
              try {
                flatListRef.current?.scrollToIndex({
                  index: nextLessonIndex,
                  animated: false,
                });
              } catch (error) {
                console.log(error);
              }
            }
          }}
          // columnWrapperStyle={styles.listContainer}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft: 30,
  },
  listHeader: {
    marginVertical: 20,
  },
  header: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    color: colors.darkText,
    marginLeft: scale(10),
    marginBottom: 30,
    marginTop: 40,
  },
  cardContainer: {
    paddingLeft: 20,
  },
});

export default SectionScreen;
