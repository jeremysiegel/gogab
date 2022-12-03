import React, { useContext, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

const backgrounds = {
  background1: require("../assets/background1.png"),
};

function Screen({ children, style, backgroundLabel }) {
  const background = "background1"; 

  // Allows page to set background
  let imageUri = backgrounds[background];
  if (backgroundLabel) imageUri = backgrounds[backgroundLabel];
  const image = imageUri;

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
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
