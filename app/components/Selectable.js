import React from "react";
import { Pressable, StyleSheet } from "react-native";
import colors from "../config/colors";

function Selectable({ children, onPress, name, selected, style }) {
  const backgroundColor = name === selected ? colors.selected : undefined;

  return (
    <Pressable
      key={name}
      onPress={onPress}
      style={[{ backgroundColor: backgroundColor }, style]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Selectable;
