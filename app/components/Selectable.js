import React from "react";
import { Pressable } from "react-native";
import colors from "../config/colors";

// Creates an UI element that changes background color if selected.

function Selectable({ children, onPress, name, selected, style }) {
  const backgroundColor = selected ? colors.selected : undefined;
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

export default Selectable;
