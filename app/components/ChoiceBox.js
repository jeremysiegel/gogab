import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";

function ChoiceBox({ title, color = "primary", onPress }) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: colors[color] }, styles.button]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: moderateScale(10),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
    maxWidth: 350,
  },
  buttonText: {
    color: colors.light,
    fontSize: moderateScale(24),
    textTransform: "lowercase",
    fontWeight: "bold",
  },
});

export default ChoiceBox;
