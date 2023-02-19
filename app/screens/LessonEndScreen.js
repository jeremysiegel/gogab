import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { CommonActions } from "@react-navigation/native";

function LessonEndScreen({ navigation }) {
  return (
    <Screen>
      <AppButton
        title={"Home"}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "home" }, { name: "section" }],
            })
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LessonEndScreen;
