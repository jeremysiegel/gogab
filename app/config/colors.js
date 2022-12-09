import React from "react";
import { View, StyleSheet } from "react-native";

const palete = {
  primary: "#18bbbb",
  secondary: "#5E60CE",
  periodDay: "#5E60CE",
  header: "#5E60CE",
  purple: "#5E60CE",
  orange: "#FF6347",
  yellow: "#ebae19",
  red: "#eb4747",
  green: "#36AE7C",
  blue: "#3AB0FF",
  pink: "#FF869E",
  black: "#000",
  white: "#fff",
  dark: "#0f0f0f",
  darkText: "#0c0c0c",
  medium: "#6e6969",
  light: "#f8fcfc",
  dayHeader: "#949797",
  deselected: "#dfdbdb",
  danger: "#ff5252",
  prepDark: "#48D7D7",
  navigationButton: "#48D7D7",
  prep: "#a0e3e3",
  exitButton: "#9eb3c4",
  category: "#f0f0f0",
};

function colors(props) {
  return palete;
}

const styles = StyleSheet.create({
  container: {},
});

export default palete;
