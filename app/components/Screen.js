import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import colors from "../config/colors";

// Creates screen with SafeAreaView.

function Screen({ children, style }) {
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
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    height: "100%",
  },

  view: {
    flex: 1,
  },
});

export default Screen;
