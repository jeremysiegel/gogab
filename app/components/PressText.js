import React from "react";
import { StyleSheet, Pressable } from "react-native";

import AppText from "./AppText";

function PressText({ children, onPress, style, ...otherProps }) {
  return (
    <Pressable onPress={onPress}>
      <AppText style={style} {...otherProps}>
        {children}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PressText;
