import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Lottie from "lottie-react-native";

function AppLottie({ source, loop }) {
  const { height, width } = useWindowDimensions();

  return (
    <Lottie
      source={source}
      autoPlay
      loop={loop}
      style={{ alignSelf: "center" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppLottie;
