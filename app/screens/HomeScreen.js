import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import getElementFromId from "../utility/getElementFromId";
import lessonStyles from "../api/lessonStyles";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import sections from "../lessons/sections";
import LessonContext from "../navigation/cycleContext";

// Home screen of app.

function HomeScreen({ navigation }) {
  const { setSection } = useContext(LessonContext);
  const renderItems = ({ item }) => {
    return (
      <AppButton
        title={item.title}
        onPress={() => {
          setSection(item.sectionId);
          navigation.push("lessonNavigator", {
            screen: "section",
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
            data={sections}
            keyExtractor={(item) => item.sectionId}
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
