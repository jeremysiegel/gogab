import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Screen from "../components/Screen";

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Button
          title="Start"
          onPress={() =>
            navigation.navigate("lessonNavigator", {
              screen: "newWord",
              params: { exerciseId: 1 },
            })
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
