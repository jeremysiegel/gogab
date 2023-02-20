import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

function AppLottie({ source, loop }) {
  return <Lottie source={source} autoPlay loop={loop} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default AppLottie;
