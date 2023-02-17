import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import getElementFromId from "../utility/getElementFromId";
import lessonStyles from "../api/lessonStyles";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import lessonData from "../lessons/lessonData";
import generateLessonData from "../api/generateLessonData";
import LessonContext from "../navigation/cycleContext";

// Home screen of app.

const exerciseId = 1;

function HomeScreen({ navigation }) {
  const { setLessonData } = useContext(LessonContext);
  const renderItems = ({ item }) => {
    return (
      <AppButton
        title={item.title}
        onPress={() => {
          const lessonData = generateLessonData(item.lessonId);
          setLessonData(lessonData);

          navigation.push("lessonNavigator", {
            screen: lessonData[exerciseId].screenType,
            params: {
              exerciseId: exerciseId,
              lessonId: item.lessonId,
              lessonData: lessonData,
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
            data={lessonData}
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

export default HomeScreen;
