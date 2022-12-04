import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import LearnWord from "../components/LearnWord";
import Screen from "../components/Screen";

function BathroomScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <LearnWord translation={"Bathroom"}>Bano</LearnWord>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BathroomScreen;
