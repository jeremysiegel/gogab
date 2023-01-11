import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";

function AppButton({
  title,
  color = colors.primary,
  buttonBorderColor = colors.primaryTint,
  onPress,
  disabled,
  opacity = "",
}) {
  const backgroundColor = color + opacity;
  const borderColor = buttonBorderColor + opacity;

  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      disabled={disabled}
      style={[
        { backgroundColor: backgroundColor, borderColor: borderColor },
        styles.button,

        !pressed && styles.buttonBorder,
        pressed && styles.buttonPressed,
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 4,
    marginBottom: 5,
  },
  buttonBorder: {
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 5,
    borderWidth: 2,
  },
  buttonPressed: {
    marginTop: 9,
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(18),
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
