import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";

function AppButton({
  title,
  color = colors.primary,
  onPress,
  disabled,
  opacity = "",
}) {
  const backgroundColor = color + opacity;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[{ backgroundColor: backgroundColor }, styles.button]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: moderateScale(18),
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
