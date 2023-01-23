import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import getLessonStyle from "../api/getLessonStyle";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import lessonData from "../lessons/lessonData";

function HomeScreen({ navigation }) {
  const renderItems = ({ item }) => {
    return (
      <AppButton
        title={item.title}
        onPress={() => {
          const lessonStyle = getLessonStyle(item.lessonId);
          navigation.navigate("lessonNavigator", {
            screen: lessonStyle.firstScreen,
            params: { exerciseId: 1, lessonId: item.lessonId },
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
