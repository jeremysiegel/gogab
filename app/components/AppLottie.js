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
      // lottie-react-native 7.x collapses an unsized view to 0 (older versions
      // used the animation's intrinsic size), so give it explicit dimensions.
      style={{ width: width * 0.9, height: width * 0.9, alignSelf: "center" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppLottie;
