import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";

// Creates a button that appears to have 3D reaction when pressed.

function AppButton({
  title,
  textColor = colors.white,
  color = colors.primary,
  buttonBorderColor = colors.primaryTint,
  borderTopWidth = 0,
  onPress,
  disabled,
  style,
  opacity = "",
  children,
}) {
  const backgroundColor = color + opacity;
  const borderColor = buttonBorderColor + opacity;

  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      disabled={disabled}
      style={[
        {
          backgroundColor: backgroundColor,
          borderTopWidth: borderTopWidth,
          borderColor: borderColor,
        },
        styles.button,
        style,
        !pressed && styles.buttonBorder,
        pressed && styles.buttonPressed,
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      {title && (
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      )}
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 5,
    maxWidth: 600,
    width: "100%",
    borderRadius: 30,
  },
  buttonBorder: {
    borderBottomWidth: 4,
    borderWidth: 2,
  },
  buttonPressed: {
    marginTop: 8,
    borderTopWidth: 0,
  },
  buttonText: {
    fontSize: moderateScale(18),
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default AppButton;
