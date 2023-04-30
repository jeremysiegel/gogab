import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import Screen from "./Screen";
import colors from "../config/colors";

function BackgroundScreen({ style, children }) {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={[styles.screen]}>
        <View style={[styles.view]}>{children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  screen: {
    flex: 1,
    height: "100%",
  },

  view: {
    flex: 1,
  },
});

export default BackgroundScreen;
